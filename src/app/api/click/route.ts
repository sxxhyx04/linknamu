import { linkIds } from '@/data/profile';
import { incrementClick, isClickTrackingEnabled } from '@/lib/mongodb';

// 링크 카드를 누를 때 브라우저가 navigator.sendBeacon 으로 { id } 를 보냅니다.
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return Response.json({ error: '잘못된 요청이에요.' }, { status: 400 });
  }

  if (typeof id !== 'string' || !linkIds.has(id)) {
    return Response.json({ error: '없는 링크예요.' }, { status: 404 });
  }

  if (!isClickTrackingEnabled()) {
    return new Response(null, { status: 204 });
  }

  try {
    await incrementClick(id);
  } catch (err) {
    console.error('클릭 수 저장 실패', err);
    return Response.json({ error: '클릭 수를 저장하지 못했어요.' }, { status: 500 });
  }
  return new Response(null, { status: 204 });
}

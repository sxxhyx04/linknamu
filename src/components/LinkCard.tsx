'use client';

import type { LinkItem } from '@/data/profile';

export default function LinkCard({ link }: { link: LinkItem }) {
  // 클릭 수를 기록합니다. sendBeacon 은 페이지를 떠나는 중에도 요청을 끝까지 보내 주므로 링크 이동을 막지 않습니다.
  const recordClick = () => {
    const body = new Blob([JSON.stringify({ id: link.id })], { type: 'application/json' });
    navigator.sendBeacon?.('/api/click', body);
  };

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      className="flex min-h-14 items-center rounded-2xl border border-black/10 bg-white px-5 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground active:translate-y-0 dark:border-white/15 dark:bg-white/5"
    >
      <span className="truncate">{link.title}</span>
    </a>
  );
}

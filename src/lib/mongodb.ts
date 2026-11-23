import 'server-only';
import { MongoClient } from 'mongodb';

// 클릭 수는 MongoDB Atlas 의 clicks 컬렉션에 { _id: 링크 id, count: 숫자 } 형태로 저장합니다.
// MONGODB_URI 가 없으면 집계를 건너뛰고, 화면은 클릭 수 없이 그대로 동작합니다.

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB || 'linknamu';

type ClickDoc = { _id: string; count: number };

// 개발 서버가 파일을 다시 불러올 때마다 연결이 새로 생기지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as { mongoClient?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!globalForMongo.mongoClient) {
    globalForMongo.mongoClient = new MongoClient(uri).connect().catch((err) => {
      globalForMongo.mongoClient = undefined; // 다음 요청에서 다시 연결을 시도합니다.
      throw err;
    });
  }
  return globalForMongo.mongoClient;
}

async function clicks() {
  const client = getClient();
  if (!client) return null;
  return (await client).db(dbName).collection<ClickDoc>('clicks');
}

export function isClickTrackingEnabled() {
  return Boolean(uri);
}

export async function incrementClick(linkId: string) {
  const col = await clicks();
  if (!col) return;
  await col.updateOne({ _id: linkId }, { $inc: { count: 1 } }, { upsert: true });
}

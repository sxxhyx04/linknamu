# 링크나무

내 모든 링크를 한 페이지에 모아 두고, 하나의 URL로 공유하는 서비스입니다. (자세한 내용은 `PRD.md`)

## 실행

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # 배포용 빌드
npm run lint
```

## 설정

- 프로필과 링크 목록은 `src/data/profile.ts`에서 고칩니다. 프로필 사진은 `public/`에 넣고 `image` 경로를 바꾸세요.
- 클릭 수를 저장하려면 `.env.example`을 `.env.local`로 복사하고 `MONGODB_URI`를 채우세요. 비워 두면 클릭 수 집계 없이 동작합니다.
- Vercel에 배포할 때는 프로젝트 설정의 Environment Variables에 같은 값을 넣으세요.

## 구조

```
src/app/page.tsx            메인 페이지 (프로필 + 링크 카드)
src/app/api/click/route.ts  클릭 수 기록 API (POST { id })
src/components/             ProfileHeader, LinkList, LinkCard
src/data/profile.ts         프로필·링크 데이터
src/lib/mongodb.ts          MongoDB 연결, 클릭 수 증가·조회
```

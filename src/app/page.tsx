import ProfileHeader from '@/components/ProfileHeader';
import LinkList from '@/components/LinkList';
import { links, profile } from '@/data/profile';

// wireframe.png 배치: 위에 원형 사진·이름·한 줄 소개, 아래에 링크 카드 세로 나열
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-[440px] flex-1 flex-col gap-11 px-6 pt-20 pb-16 sm:px-8 sm:pt-24">
      <ProfileHeader profile={profile} />
      <LinkList links={links} />
    </main>
  );
}

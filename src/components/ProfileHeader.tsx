import Image from 'next/image';
import type { Profile } from '@/data/profile';

// 와이어프레임 상단: 큰 원형 사진 → 이름 → 한 줄 소개 (가운데 정렬)
export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        unoptimized={profile.image.endsWith('.svg')}
        className="size-36 rounded-full border-2 border-foreground/80 object-cover sm:size-40"
      />
      <h1 className="mt-6 text-xl font-bold">{profile.name}</h1>
      <p className="mt-1 text-base text-foreground/70">{profile.bio}</p>
    </header>
  );
}

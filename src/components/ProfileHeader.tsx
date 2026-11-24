import Image from 'next/image';
import type { Profile } from '@/data/profile';

// 와이어프레임 상단: 큰 원형 사진 → 이름 → 한 줄 소개 (가운데 정렬)
export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={150}
        height={150}
        priority
        unoptimized={profile.image.endsWith('.svg')}
        className="shadow-avatar size-[150px] rounded-full object-cover ring-4 ring-white/80"
      />
      <h1 className="mt-7 text-[22px] font-bold tracking-tight">{profile.name}</h1>
      <p className="mt-2 max-w-[18rem] text-[15px] leading-relaxed text-muted">{profile.bio}</p>
    </header>
  );
}

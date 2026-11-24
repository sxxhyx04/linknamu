'use client';

import type { LinkItem } from '@/data/profile';
import BrandIcon from './BrandIcon';

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
      className="shadow-soft hover:shadow-soft-lg grid min-h-[60px] grid-cols-[24px_1fr_24px] items-center gap-3 rounded-3xl border border-glass-border bg-glass px-5 py-4 text-[15px] font-semibold backdrop-blur-xl backdrop-saturate-150 transition duration-300 ease-out hover:-translate-y-px hover:bg-glass-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/60 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span className="flex justify-center">{link.icon && <BrandIcon icon={link.icon} />}</span>
      <span className="truncate text-center">{link.title}</span>
      <span aria-hidden="true" />
    </a>
  );
}

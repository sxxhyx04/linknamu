import type { LinkItem } from '@/data/profile';
import LinkCard from './LinkCard';

// 와이어프레임 하단: 링크 카드를 세로로 나열
export default function LinkList({ links }: { links: LinkItem[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard link={link} />
        </li>
      ))}
    </ul>
  );
}

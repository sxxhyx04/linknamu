// 페이지에 보여 줄 프로필과 링크 목록입니다. 이 파일만 고치면 화면이 바뀝니다.
// 링크의 id 는 클릭 수를 저장하는 키로 쓰이므로, 한 번 정한 뒤에는 바꾸지 마세요.

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
};

// 보여 주기용 더미 값입니다. 사진은 public/ 에 넣고 image 경로를 바꾸세요.
export const profile: Profile = {
  name: '박서현',
  bio: '제2의 일론머스크',
  image: '/profile.svg',
};

// 보여 주기용 더미 주소입니다. TODO: 실제 주소로 바꿔 주세요.
export const links: LinkItem[] = [
  { id: 'github', title: 'GitHub', url: 'https://github.com/' },
  { id: 'linkedin', title: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { id: 'blog', title: 'Blog', url: 'https://velog.io/' },
];

export const linkIds = new Set(links.map((link) => link.id));

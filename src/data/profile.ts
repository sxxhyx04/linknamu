// 페이지에 보여 줄 프로필과 링크 목록입니다. 이 파일만 고치면 화면이 바뀝니다.
// 링크의 id 는 클릭 수를 저장하는 키로 쓰이므로, 한 번 정한 뒤에는 바꾸지 마세요.

export type LinkIcon = 'github' | 'linkedin' | 'velog';

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  icon?: LinkIcon;
};

export type Profile = {
  name: string;
  bio: string;
  image: string;
};

// 보여 주기용 더미 값입니다. 사진은 public/ 에 넣고 image 경로를 바꾸세요.
export const profile: Profile = {
  name: 'Park Seo Hyeon',
  bio: 'AI비전 개발자 | 현재 컴퓨터공학부 학생 입니다.',
  image: '/profile.png',
};

export const links: LinkItem[] = [
  { id: 'github', title: '깃허브', url: 'https://github.com/sxxhyx04', icon: 'github' },
  { id: 'linkedin', title: '링크드인', url: 'https://www.linkedin.com/feed/', icon: 'linkedin' },
  { id: 'blog', title: '벨로그', url: 'https://velog.io/@sx_hdx04/posts', icon: 'velog' },
];

export const linkIds = new Set(links.map((link) => link.id));

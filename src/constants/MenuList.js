export const MenuList = [
  { id: 1, name: 'MAIN', to: '/home' },
  { id: 2, name: '기록하기', to: '/writing' },
  { id: 3, name: '추억회상', to: '/search' },
  { id: 4, name: '쿼디상담소', to: '/counseling' },
  {
    id: 5,
    name: '마이페이지',
    to: '/mypage/editProfile',
    subMenu: [
      { name: '프로필 수정', to: '/mypage/editProfile' },
      { name: '내 활동', to: '/mypage/myActivity' },
      { name: '북마크 일기', to: '/mypage/bookMark' },
      { name: '통계목록', to: '/mypage/stats' },
    ],
  },
];

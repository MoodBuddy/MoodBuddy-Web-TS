import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import WelcomePage from '../pages/AuthPage/WelcomePage';
import MainPage from '../pages/MainPage/MainPage';
import WritingPage from '../pages/WritingPage/WritingPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import Layout from './Layout';
import SearchListPage from '../pages/SearchPage/SearchListPage';
import DiaryPage from '../pages/DiaryPage/DiaryPage';
import CounselingPage from '../pages/CounselingPage/CounselingPage';
import WritingLetterPage from '../pages/CounselingPage/WritingLetterPage';
import CompletedWriting from '../pages/CounselingPage/CompletedWriting';
import QuddyLetter from '../pages/CounselingPage/QuddyLetter';
import AuthPage from '../pages/AuthPage/AuthPage';
import KakaoLoginAuth from '../components/AuthPage/KakaoLoginAuth';
import CompletePage from '../pages/AuthPage/CompletePage';
import StatsPage from '../pages/MyPage/StatsPage';
import QuddyTiPage from '../pages/MyPage/QuddyTiPage';
import EditProfilePage from '../pages/MyPage/EditProfilePage';
import MyActivityPage from '../pages/MyPage/MyActivityPage';
import BookMarkPage from '../pages/MyPage/BookMarkPage';
import NoWritingLetterPage from '../pages/CounselingPage/NoWritingLetterPage';
import ProtectedRoute from '../components/AuthPage/ProtectedRoute';

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: '/', element: <WelcomePage /> },
          { path: '/home', element: <ProtectedRoute element={<MainPage />} /> },
          {
            path: '/writing',
            element: <ProtectedRoute element={<WritingPage />} />,
          },
          {
            path: '/search',
            element: <ProtectedRoute element={<SearchPage />} />,
          },
          {
            path: '/search/searchlist',
            element: <ProtectedRoute element={<SearchListPage />} />,
          },
          {
            path: '/diary/:id',
            element: <ProtectedRoute element={<DiaryPage />} />,
          },
          {
            path: '/counseling',
            element: <ProtectedRoute element={<CounselingPage />} />,
          },
          {
            path: '/counseling/writingLetter',
            element: <ProtectedRoute element={<WritingLetterPage />} />,
          },
          {
            path: '/counseling/noWritingLetter',
            element: <ProtectedRoute element={<NoWritingLetterPage />} />,
          },
          {
            path: '/counseling/completedWriting',
            element: <ProtectedRoute element={<CompletedWriting />} />,
          },
          {
            path: 'counseling/letter/:id',
            element: <ProtectedRoute element={<QuddyLetter />} />,
          },
          { path: '/user', element: <ProtectedRoute element={<AuthPage />} /> },
          {
            path: '/api/v1/user/login/oauth2/code/kakao',
            element: <KakaoLoginAuth />,
          },
          {
            path: '/complete',
            element: <ProtectedRoute element={<CompletePage />} />,
          },
          {
            path: '/mypage/stats',
            element: <ProtectedRoute element={<StatsPage />} />,
          },
          {
            path: '/mypage/quddyti',
            element: <ProtectedRoute element={<QuddyTiPage />} />,
          },
          {
            path: '/mypage/editProfile',
            element: <ProtectedRoute element={<EditProfilePage />} />,
          },
          {
            path: '/mypage/myActivity',
            element: <ProtectedRoute element={<MyActivityPage />} />,
          },
          {
            path: '/mypage/bookMark',
            element: <ProtectedRoute element={<BookMarkPage />} />,
          },
        ],
      },
    ])}
  />
);

export default Router;

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/pages/Upload';
import OnlyHeader from '~/components/Layout/OnlyHeader';
import Search from '~/pages/Search';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/upload', component: Upload, layout: OnlyHeader },
  { path: '/search', component: Search, layout: null },
];

export { publicRoutes };

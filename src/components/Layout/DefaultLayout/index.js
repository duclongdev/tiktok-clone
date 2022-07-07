import Header from '../components/Header';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cs('wrapper')}>
      <Header />
      <div className={cs('container')}>
        <SideBar />
        <div className={cs('content')}>{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;

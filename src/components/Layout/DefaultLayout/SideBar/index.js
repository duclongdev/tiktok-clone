import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

function SideBar() {
  const cs = classNames.bind(styles);
  return (
    <aside className={cs('wrapper')}>
      <h2>Sidebar</h2>
    </aside>
  );
}

export default SideBar;

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

const cs = classNames.bind(styles);
function Header() {
  return (
    <header className={cs('wrapper')}>
      <div className={cs('inner')}></div>
    </header>
  );
}

export default Header;

import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import images from '~/assets/images';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const cs = classNames.bind(styles);
function Header() {
  return (
    <header className={cs('wrapper')}>
      <div className={cs('inner')}>
        <img src={images.logo} alt="TikTok" />
        <div className={cs('search-container')}>
          <input type="text" placeholder="Search account and videos" />
          {/* <img src={images.close} alt="close" /> */}
          {/* <FontAwesomeIcon className={cs('loading-icon')} icon={faSpinner} /> */}
          <button className={cs('btn-search')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;

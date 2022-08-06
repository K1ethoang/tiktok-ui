import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://avatars.githubusercontent.com/u/88199151?s=96&v=4"
                alt="K1ethoang"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>K1ethoang</span>
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </h4>
                <p className={cx('name')}>Hoang Gia Kiet</p>
            </div>
        </div>
    );
}

export default AccountItem;

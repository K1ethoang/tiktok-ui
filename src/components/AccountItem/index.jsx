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
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/be2f9f550108805cf58c4c7ffaf9522b~c5_300x300.webp?x-expires=1659628800&x-signature=ayk9bN%2FTxZLenhZUaaEaMxiJLLo%3D"
                alt="Thuy Tien"
            />
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    <span>missgrand2021.thuytien</span>
                    <span className={cx('check')}>
                        <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                </h4>
                <p className={cx('name')}>Nguyễn Thúc Thuỳ Tiên</p>
            </div>
        </div>
    );
}

export default AccountItem;

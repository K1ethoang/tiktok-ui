import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import {
    CoinIcon,
    GearIcon,
    InboxIcon,
    KeyboardIcon,
    LanguageIcon,
    LogOutIcon,
    MessageIcon,
    PlusIcon,
    QuestionIcon,
    UserIcon,
} from '~/components/Icons';
import Search from '../Search';
import Button from '~/components/Button';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';
import styles from './Header.module.scss';
import config from '~/config';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <LanguageIcon />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi-vn',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <QuestionIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <UserIcon />,
        title: 'View profile',
        to: '/@K1ethoang',
    },
    {
        icon: <CoinIcon />,
        title: 'Get coins',
        to: '/coin',
    },
    {
        icon: <GearIcon />,
        title: 'Settings',
        to: '/setting',
    },
    ...MENU_ITEMS,
    {
        icon: <LogOutIcon />,
        title: 'Log out',
        to: '/logout',
        separate: true,
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {};

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                <Search />

                <div className={cx('action')}>
                    <Button className={cx('action-btn')} to={config.routes.upload} normal leftIcon={<PlusIcon />}>
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <div className={cx('inbox-wrapper')}>
                                <Tippy content="Inbox" placement="bottom">
                                    <button className={cx('action-btn')}>
                                        <InboxIcon />
                                    </button>
                                </Tippy>
                                {/* display: 'inbox-notice','active' */}
                                <span className={cx('inbox-notice', 'active')}>10</span>
                            </div>
                        </>
                    ) : (
                        <Button primary>Log In</Button>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://avatars.githubusercontent.com/u/88199151?s=40&v=4"
                                alt="K1ethoang"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;

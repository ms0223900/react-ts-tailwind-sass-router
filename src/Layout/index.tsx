import React, { memo } from 'react';
import { Link, Outlet } from 'react-router-dom';
import '../index.scss';

const Layout = () => {
    return (
        <div className={'layout--wrapper'}>
            <nav className={'link--wrapper p-10 flex justify-center'}>
                <Link className={'p-4'} to={'/'}>
                    {'Home'}
                </Link>
                <Link className={'p-4'} to={'/article/3'}>
                    {'Article 3'}
                </Link>
            </nav>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default memo(Layout);

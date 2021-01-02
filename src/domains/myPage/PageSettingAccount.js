import React, { useState, useEffect } from 'react';
import Page from '../../components/Page/Page';
import SettingAccount from './SettingAccount';
import WishList from './WishList';

export default function PageSettingAccount({ match }) {
    const pages = match.params.page;
    return (
        <Page>
            {pages === 'myInfo' ? <SettingAccount /> : <WishList />},
        </Page>
    )
}
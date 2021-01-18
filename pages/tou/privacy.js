import React from 'react';

import Page from '../../components/Layout/Page';

import AboutImage from '../about/sections/AboutImage';

import TouMenu from './sections/TouMenu';
import TouPrivacy from './sections/TouPrivacy';


export default function PagePrivacy({ location }) {
    return (
        <Page>
            <AboutImage />
            <TouMenu location={location} />
            <TouPrivacy />
        </Page>
    )
}
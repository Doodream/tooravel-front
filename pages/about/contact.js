import React from 'react';

import Page from '../../components/Layout/Page';

import AboutImage from './sections/AboutImage';
import AboutMenu from './sections/AboutMenu';
import AboutContact from './sections/AboutContact';

export default function PageContact({ location }) {
    return (
        <Page>
            <AboutImage />
            <AboutMenu location={location} />
            <AboutContact />
        </Page>
    )
}
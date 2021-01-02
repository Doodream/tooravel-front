import React from 'react';

import Page from '../../../components/Page/Page';

import AboutImage from '../PageAbout/sections/AboutImage';

import TouMenu from './sections/TouMenu';
import TouTos from './sections/TouTos';

export default function PageTos({ location }) {
    return (
        <Page>
            <AboutImage />
            <TouMenu location={location} />
            <TouTos />
        </Page>
    )
}
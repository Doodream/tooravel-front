import React from 'react';

import Page from '../Page/Page';

import AboutImage from '../PageAbout/sections/AboutImage';

import TouMenu from './sections/TouMenu';
import TouTos from './sections/TouTos';

export default function PageIntro({ location }) {
    return (
        <Page>
            <AboutImage />
            <TouMenu location={location} />
            <TouTos />
        </Page>
    )
}
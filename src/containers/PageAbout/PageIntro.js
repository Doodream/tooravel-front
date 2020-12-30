import React from 'react';

import Page from 'containers/Page/Page';

import AboutImage from './sections/AboutImage';
import AboutMenu from './sections/AboutMenu';
import AboutIntro from './sections/AboutIntro';

export default function PageIntro({ location }) {
    return (
        <Page>
            <AboutImage />
            <AboutMenu location={location} />
            <AboutIntro />
        </Page>
    )
}
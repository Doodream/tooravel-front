import React from 'react';

import Page from '../Page/Page';

import AboutImage from '../PageAbout/sections/AboutImage';

import TouMenu from './sections/TouMenu';
import TouRentRule from './sections/TouRentRule';

export default function PageRentRule({ location }) {
    return (
        <Page>
            <AboutImage />
            <TouMenu location={location} />
            <TouRentRule />
        </Page>
    )
}
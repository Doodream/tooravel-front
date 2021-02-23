import React from 'react';

import Page from '../../src/components/Layout/Page';

import AboutImage from './sections/AboutImage';
import AboutMenu from './sections/AboutMenu';
import AboutPartnershipInquiry from './sections/AboutPartnershipInquiry';

export default function PagePartnershipInquiry({ location }) {
    return (
        <Page>
            <AboutImage />
            <AboutMenu location={location} />
            <AboutPartnershipInquiry />
        </Page>
    )
}
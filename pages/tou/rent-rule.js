import React from 'react';

import Page from '../../components/Layout/Page';

import AboutImage from '../about/sections/AboutImage';

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
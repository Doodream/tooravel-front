import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

export default function Page({ children }) {
    return (
        <React.Fragment>
            <Header />
            {children}
            <Footer />
        </React.Fragment>
    )
}
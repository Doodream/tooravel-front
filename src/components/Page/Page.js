import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import HeaderLogin from 'components/Header/HeaderLogin'

export default function Page({ children }) {
    return (
        <React.Fragment>
            <HeaderLogin />
            {/* <Header /> */}
            {children}
            <Footer />
        </React.Fragment>
    )
}
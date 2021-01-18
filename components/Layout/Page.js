import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderLogin from '../Header/HeaderLogin'
import AuthContext from '../../contexts/Auth/AuthContext';
import Head from 'next/head';


export default function Page({ children }) {
    const { isAuthenticated } = React.useContext(AuthContext)
    return (
        <div className="container">
            <Head>
                <title>Tooravel</title>
                <link rel="icon" href="https://tooravel.s3.ap-northeast-2.amazonaws.com/media/company/small/TOORAVEL.jpg" />
            </Head>
            {isAuthenticated ? <HeaderLogin /> : <Header />}
            {children}
            <Footer />
        </div>
    )
}
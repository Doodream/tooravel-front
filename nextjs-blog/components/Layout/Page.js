import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderLogin from '../Header/HeaderLogin'
import Head from 'next/head';

export default function Page({ children }) {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="container">
            <Head>
                <title>Tooravel</title>
                <link rel="icon" href="https://tooravel.s3.ap-northeast-2.amazonaws.com/media/company/small/TOORAVEL.jpg" />
            </Head>
            {isLogin ? <HeaderLogin /> : <Header />}
            {children}
            <Footer />
        </div>
    )
}
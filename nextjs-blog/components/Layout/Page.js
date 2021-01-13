import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import HeaderLogin from '../Header/HeaderLogin'


export default function Page({ children }) {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div>
            {isLogin ? <HeaderLogin /> : <Header />}
            {children}
            <Footer />
        </div>
    )
}
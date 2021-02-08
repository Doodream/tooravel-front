import React from "react";
import { withRouter, useRouter } from "next/router";

import AuthContext from './AuthContext.js';
import { Fetch } from '../../utils/Fetch.js';

const copyObject = obj => ({ ...obj, ...JSON.parse(JSON.stringify(obj)) })
const AuthProvider = ({ children, localStorage }) => {

    const [prevAuthUser, setPrevAuthUser] = React.useState(localStorage.user || {})
    const router = useRouter();
    const homeRedirect = () => router.push('/')
    const saveUserInfo = res => {

        if (!res.loginSuccess) {
            throw new Error("아이디나 비밀번호가 맞지 않습니다.");
        }
        // const newAuthUser = {...copyObject(value.prevAuthUser), ...copyObject(res)}
        const newAuthUser = { ...prevAuthUser, ...res }
        setPrevAuthUser(newAuthUser)
        console.log(prevAuthUser);
        // setValue({...copyObject(value), authUser: newAuthUser, isAuthenticated: 'token' in newAuthUser})
    }
    const login = ({ email, password }) => Fetch.post('/api/login/', {
        'email': email,
        'password': password,
    }).then(saveUserInfo).then(homeRedirect).catch(err => alert(err));

    const kakaoLogin = ({ response, profile }) => {
        const data = {
            kakao_id: profile.id,
            email: profile.properties?.email,
            name: profile.properties?.nickname,
            // tel
        }

        Fetch.post('/api/login/kakao/', data).then(saveUserInfo).then(homeRedirect);
    }
    const logout = () => {
        alert('로그아웃 되었습니다.')
        setValue({ ...initialState, authUser: {}, isAuthenticated: false })
        window.localStorage.clear()
        router.push('/')
    };
    const signUp = ({ email, password }) => Fetch.post('/api/signup/', {
        'email': email,
        'password': password,
    }).then(res => router.push('/account/login'));

    //state초기화 객체 입니다.
    const initialState = {
        saveUserInfo,
        login,
        kakaoLogin,
        logout,
        signUp,
        authUser: prevAuthUser,
        isAuthenticated: 'token' in prevAuthUser,
    };
    //Hook을 통한 state, setState를 정의합니다.
    const [value, setValue] = React.useState(initialState);

    // React.useEffect(() => {
    //   console.log('reload')
    //   setPrevAuthUser( JSON.parse( window.localStorage.getItem('user') ) || {} )
    // });

    React.useEffect(() => {
        console.log('prevAuthUser change')
        if (Object.keys(prevAuthUser).length > 0) {
            console.log('prevAuthUser not null')
            console.log(prevAuthUser)
            setValue({
                ...initialState,
                authUser: prevAuthUser,
                isAuthenticated: 'token' in prevAuthUser,
            })
        }
    }, [prevAuthUser]);

    React.useEffect(() => {
        console.log('value change')
        window.localStorage.clear()
        window.localStorage['isAuthenticated'] = 'token' in value.authUser;
        window.localStorage.setItem('user', JSON.stringify(value.authUser));
    }, [value.authUser]);

    return (
        //AuthProvider에 state를 사용할 컴포넌트들을 호출하려면
        //{children}이 있어야 합니다
        //그래서 마지막 return에서 {children}을 리턴해줍니다.
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default withRouter(AuthProvider);
import React from "react";
import { withRouter, useRouter } from "next/router";

import AuthContext from './AuthContext.js';
import { Fetch } from '../../src/utils/Fetch.js';
import { FormatTextdirectionLToRSharp } from "@material-ui/icons";

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
        'image': 'https://w7.pngwing.com/pngs/971/990/png-transparent-computer-icons-login-person-user-pessoa-smiley-desktop-wallpaper-address-icon.png'
    }).then(saveUserInfo).then(homeRedirect).catch(err => alert(err));

    const kakaoLogin = ({ profile }) => {
        //console.log(profile);
        Fetch.post('/api/login/kakao/', {
            email: profile.kakao_account.email,
        }).then(saveUserInfo).then(homeRedirect);
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
        'image': 'https://lh3.googleusercontent.com/proxy/bHKea4QHqjImDZrvbdH18BrZNDwgsiv_MMw5kRjJivFax3-gzUE_VWPwhuHAiEoaLo3Qt0lVO2sQY9BDw745tuPNSxyKwiI4zezG4RuphUv1IXziDNXE-cC7HdmVpN5x4ZFle5PTp94lu3HGP704Jv5kRfybTZIu1lSgHnsROMHRS4wNbyJcDEb870DVTc2bgThdJLKSaZK2llSCvu6NCCXbW8H1liQoxAjbunL4OZmLJ8Cu_IeXHoi7umZRT_78lsMCxNjN4vY3f7CvjoOHEYpjNtM_AMnEQBGkLmrHQXq3hgjAu1rVVQlCN9CrdrQm5shapRNS9KobygWpnmmrXqd4hbmFHLs7LA'
    }).then(res => router.push('/account/login'));

    const kakaoSignUp = ({ profile }) => Fetch.post('/api/signUp/', {
        'email': profile.kakao_account.email,
        'name': profile.properties.nickname,
        'gender': profile.kakao_account.gender,
        'image': profile.properties.profile_image,
    }).then(res => {
        alert(res.message)
        res.success ? router.push('/account/login') : null;
    });

    const uploadReview = (data) => {
        console.log(data);
        Fetch.post('/api/upload/review', {
            'name': data.userName,
            'image': data.userImage,
            'date': data.date,
            'rating': data.rating,
            'comment': data.comment,
        }).then(res => {
            alert(res.message)
        }).catch(err => alert(err));
    }

    const settingAccount = ({ email, name, gender, nationality, image }) => Fetch.post('/api/account/setting', {
        'email': email,
        'name': name,
        'gender': gender,
        'nationality': nationality,
        'image': image
    }).then(res => alert('회원님의 정보가 저장되었습니다.'))

    //state초기화 객체 입니다.
    const initialState = {
        saveUserInfo,
        login,
        kakaoLogin,
        logout,
        signUp,
        kakaoSignUp,
        uploadReview,
        settingAccount,
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
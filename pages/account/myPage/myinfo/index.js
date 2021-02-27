import React, { useEffect, useState } from 'react';
import { Box, List, ListItem, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import Link from 'next/link';
import Page from '../../../../src/components/Layout/Page'
import { makeStyles } from "@material-ui/core/styles";
import styles from '../../../../src/views/account/myPage/myinfo/SettingAccount.style.js';
import AuthContext from '../../../../contexts/Auth/AuthContext';
import { useForm } from 'react-hook-form';
import { Fetch } from '../../../../src/utils/Fetch';
import { RestoreRounded } from '@material-ui/icons';

const useStyles = makeStyles(styles);

export default function SettingAccount() {


    const [baseUrl, setBaseUrl] = useState(process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'http://Doodream.github.io/tooravel.com/tooravel_front');

    const { settingAccount, logout } = React.useContext(AuthContext);
    const classes = useStyles();
    const [user, setUser] = useState(typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem('user')) : []);
    const [gender, setGender] = useState(user.gender || '');
    const [name, setName] = useState(user.name);
    const [nationality, setNationality] = useState(user.nationality || '');
    const [userUploadedImage, setUserUploadedImage] = useState(
        {
            fileName: "",
            filePath: user.image
        }
    )

    const [userImage, setUserImage] = useState("https://www.flaticon.com/svg/static/icons/svg/1221/1221751.svg");
    const { register, handleSubmit } = useForm();

    const imageUpload = (e) => {
        setUserImage(e.target.files[0]);
        // 서버의 upload API 호출
        //const res = await Fetch.post("/api/upload", formData);
    }
    const imageUploadServer = (data) => {
        const formData = new FormData();
        formData.append("image", userImage);
        Fetch.post('/api/upload/image', formData).then(res => {
            //console.log(res);
            const { fileName } = res;
            setUserUploadedImage({
                fileName: res.fileName,
                filePath: `${baseUrl}/img/${fileName}`
            })
        }).catch(err => {
            console.error(err);
        });

        var newUserInfo = {
            ...user,
            name: data.name,
            gender: gender,
            nationality: nationality,
            image: userUploadedImage.filePath,
        }
        //console.log(JSON.stringify(newUserInfo));
        settingAccount(newUserInfo);

    }

    const genderChange = (e) => {
        setGender(e.target.value)
    };

    const nationalityChange = (e) => {
        setNationality(e.target.value)
    };

    const nameChange = (e) => {
        setName(e.target.value);
    };

    const accountInfoUpload = () => {
        //console.log(JSON.stringify(data));
        if (name === "" || gender === "" || nationality === "") {
            alert("회원 정보를 모두 입력해주세요")
            return;
        }

        var newUserInfo = {
            ...user,
            name: name,
            gender: gender,
            nationality: nationality,
            image: userUploadedImage.filePath,
        }
        settingAccount(newUserInfo);
        window.localStorage.setItem('user', JSON.stringify(newUserInfo));
    }


    return (
        <Page>
            <Box className={classes.settingAccount}>
                <Box className={classes.settingAccountSection}>
                    <List className={classes.settingAccountList}>
                        <ListItem className={classes.settingAccountSelectItem}>
                            <Link href='/account/mypage/myinfo'><a>계정설정</a></Link>
                        </ListItem>
                        <ListItem button onClick={logout}>
                            <a>로그아웃</a>
                        </ListItem>
                    </List>
                    <List className={classes.settingAccountMain}>
                        <form onSubmit={handleSubmit(imageUploadServer)}>
                            <ListItem className={classes.settingAccountTitle}>
                                계정설정
                             </ListItem>
                            <ListItem className={classes.settingAccountListDivider}></ListItem>
                            <ListItem className={classes.settingAccountUserImage}>

                                <label htmlFor='img_file'><img src={userUploadedImage.filePath ? userUploadedImage.filePath : user.image} alt="계정 이미지"></img></label>
                                <input
                                    id='img_file'
                                    ref={register}
                                    name='image'
                                    type='file'
                                    onChange={imageUpload}
                                    accept="image/png, image/jpeg"
                                >
                                </input>
                                <Button
                                    type='submit'
                                    className={classes.settingAccountSaveButton}>이미지 업로드</Button>
                            </ListItem>
                        </form>

                        <form onSubmit={handleSubmit(accountInfoUpload)}>
                            <ListItem className={classes.settingAccountUserInfo}>
                                <p>이메일</p>
                                <TextField
                                    variant='outlined'
                                    value={user.email}
                                    type='email'
                                />
                            </ListItem>
                            <ListItem className={classes.settingAccountUserInfo}>
                                <p>성별</p>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">성별</InputLabel>
                                    <Select
                                        ref={register}
                                        name='gender'
                                        labelId="demo-simple-select-outlined-label"
                                        value={gender}
                                        onChange={genderChange}
                                        label="성별"
                                    >
                                        <MenuItem value=''>
                                            <p>선택하지 않음</p>
                                        </MenuItem>
                                        <MenuItem value={'male' || '남성'}>남성</MenuItem>
                                        <MenuItem value={'여성' || 'female'}>여성</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem className={classes.settingAccountUserInfo}>
                                <p>이름</p>
                                <TextField
                                    ref={register}
                                    name='name'
                                    onChange={nameChange}
                                    variant='outlined'
                                    defaultValue={name}
                                    type='text'
                                    placeholder="이름을 입력해주세요"
                                />
                            </ListItem>
                            <ListItem className={classes.settingAccountUserInfo}>
                                <p>국적</p>
                                <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-outlined-label">국적</InputLabel>
                                    <Select
                                        ref={register}
                                        name='nationality'
                                        labelId="demo-simple-select-outlined-label"
                                        value={nationality}
                                        onChange={nationalityChange}
                                        label="국적"
                                    >
                                        <MenuItem value=''>
                                            <p>선택하지 않음</p>
                                        </MenuItem>
                                        <MenuItem value='대한민국'>대한민국</MenuItem>
                                        <MenuItem value='대만'>대만</MenuItem>
                                        <MenuItem value='일본'>일본</MenuItem>
                                        <MenuItem value='미국'>미국</MenuItem>
                                        <MenuItem value='러시아'>러시아</MenuItem>
                                    </Select>
                                </FormControl>
                            </ListItem>
                            <ListItem>
                                <Button
                                    type='submit'
                                    className={classes.settingAccountSaveButton}>회원 정보 수정</Button>
                            </ListItem>
                        </form>
                    </List>
                </Box>
            </Box>
        </Page >
    )
}
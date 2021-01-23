import React, { useState } from 'react';
import { Box, List, ListItem, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import Link from 'next/link';
import Page from '../../../../components/Layout/Page'
import { makeStyles } from "@material-ui/core/styles";
import styles from './SettingAccount.style.js';
import AuthContext from '../../../../contexts/Auth/AuthContext';

const useStyles = makeStyles(styles);

export default function SettingAccount() {

    const { authUser, logout } = React.useContext(AuthContext);
    const classes = useStyles();
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [userImage, setUserImage] = useState("https://www.flaticon.com/svg/static/icons/svg/1221/1221751.svg");


    const imageUpload = async (e) => {
        setUserImage(e.target.files[0]);
        // 서버의 upload API 호출
        //const res = await Fetch.post("/api/upload", formData);
        console.log(userImage);
    }
    const genderChange = (e) => {
        setGender(e.target.value)
    };
    const nationalityChange = (e) => {
        setNationality(e.target.value)
    };


    return (
        <Page>
            <Box className={classes.settingAccount}>
                <Box className={classes.settingAccountSection}>
                    <List className={classes.settingAccountList}>
                        <ListItem className={classes.settingAccountSelectItem}>
                            <Link href='/account/mypage/myinfo'><a>계정설정</a></Link>
                        </ListItem>
                        <ListItem>
                            <Link href='/account/mypage/wishlist'><a>위시리스트</a></Link>
                        </ListItem>
                        <ListItem button onClick={logout}>
                            <a>로그아웃</a>
                        </ListItem>
                    </List>
                    <List className={classes.settingAccountMain}>
                        <ListItem className={classes.settingAccountTitle}>
                            계정설정
                    </ListItem>
                        <ListItem className={classes.settingAccountListDivider}></ListItem>
                        <ListItem className={classes.settingAccountUsetImage}>
                            <input
                                type='file'
                                onChange={imageUpload}
                                accept="image/png, image/jpeg"
                            >
                            </input><img src={userImage} alt="계정 이미지"></img>


                        </ListItem>
                        <ListItem className={classes.settingAccountUserInfo}>
                            <p>이메일</p>
                            <TextField
                                variant='outlined'
                                value='user@email'
                                type='email'
                            />
                        </ListItem>
                        <ListItem className={classes.settingAccountUserInfo}>
                            <p>성별</p>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">성별</InputLabel>
                                <Select
                                    labelId="demo-simple-select-outlined-label"
                                    value={gender}
                                    onChange={genderChange}
                                    label="성별"
                                >
                                    <MenuItem value=''>
                                        <p>선택하지 않음</p>
                                    </MenuItem>
                                    <MenuItem value='남성'>남성</MenuItem>
                                    <MenuItem value='여성'>여성</MenuItem>
                                </Select>
                            </FormControl>
                        </ListItem>
                        <ListItem className={classes.settingAccountUserInfo}>
                            <p>이름</p>
                            <TextField
                                variant='outlined'
                                value='username'
                                type='text'
                            />
                        </ListItem>
                        <ListItem className={classes.settingAccountUserInfo}>
                            <p>국적</p>
                            <FormControl variant="outlined" className={classes.formControl}>
                                <InputLabel id="demo-simple-select-outlined-label">국적</InputLabel>
                                <Select
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
                            <Button className={classes.settingAccountSaveButton}>저장</Button>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Page>
    )
}
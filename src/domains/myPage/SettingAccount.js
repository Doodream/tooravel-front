import React, { useState } from 'react';
import { Box, Divider, List, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './SettingAccount.style.js';
import { Typography } from '@material-ui/core';
import { ListItem, Link } from '@material-ui/core';


const useStyles = makeStyles(styles);

export default function SettingAccount() {
    const classes = useStyles();
    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const genderChange = (e) => {
        setGender(e.target.value)
    };
    const nationalityChange = (e) => {
        setNationality(e.target.value)
    };
    const tabChange = () => {

    }

    return (
        <Box className={classes.settingAccount}>
            <Box className={classes.settingAccountSection}>
                <List className={classes.settingAccountList}>
                    <ListItem className={classes.settingAccountSelectItem}>
                        <Link onClick={() => { }}>계정설정</Link>
                    </ListItem>
                    <ListItem>
                        <Link>위시리스트</Link>
                    </ListItem>
                    <ListItem>
                        <Link>로그아웃</Link>
                    </ListItem>
                </List>
                <List className={classes.settingAccountMain}>
                    <ListItem className={classes.settingAccountTitle}>
                        계정설정
                    </ListItem>
                    <ListItem className={classes.settingAccountListDivider}></ListItem>
                    <ListItem className={classes.settingAccountUsetImage}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/1221/1221751.svg" alt="계정 이미지"></img>
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

    )
}
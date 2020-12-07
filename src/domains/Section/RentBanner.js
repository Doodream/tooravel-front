import React from 'react';
import {Box, Typography, Button} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import styles from './RentBanner.style.js';

const useStyles = makeStyles(styles);

export default function SlideSection(){
    
    const classes = useStyles();
    return (
        <Box className={classes.rentBanner}>
            <Box className={classes.rentBanner__image}>
                <img src="https://lh3.googleusercontent.com/proxy/XNVOycetq_XPU5fSD6IMF9vBC8D_PyJNBieS55GtGH0-sK3_57cT_SVdCOOdG5y2uDDK4ujLy8dkCDrdYGYc-guZLdGJjpr32S0uGQIamG9xSTDOsAxLAL4ozRiTEPfgDpSdXMdNEYeihwogRfblpgWYk4zbkaIHZJcr6fB-aQ7tqrShzFtnFXoNMYt0-AAc2H33OlF0Me0IcVfw1vaShIjFkUzI22tjqoQY1oKtBKMiURmrn9vsG8qxBp9tHpWDH2fXf74z86HsTm8X7QMJf-TZveFK-fhGfaB76WjQTQt62tye8EAH7cndr_qXDQJfwdSDXHwKpbJdVXfujYVBIVHNM6GuEifLCpzpHPK8u8Jk6UtqWsZ-XPwF0ZmpWRug1kecHXUfhfi4MZpyt13D4F2VsGW5luDtxtpghBszd94" alt="배너이미지"></img>
            </Box>
            <Box className={classes.rentBanner__title}>
                <Typography variant='h5'>하루 대여료 최저가 5900원</Typography>
                <Typography variant='h3'>고프로 빌려서 여행가자!</Typography>
            </Box>
            <Button className={classes.rentBanner__button}>
                <Typography vari>고프로 대여하기</Typography>
            </Button>
        </Box>
    )
}
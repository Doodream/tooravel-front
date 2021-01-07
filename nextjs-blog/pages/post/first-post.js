import Head from 'next/head'
import Link from 'next/link'
import { Card, CardContent, CardMedia, CssBaseline } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './FirstPost.style.js';

const useStyles = makeStyles(styles);

export default function FirstPost() {
    const classes = useStyles();

    return (
        <CssBaseline>
            <div>
                <Head>
                    <title>Tooravel</title>
                </Head>
                <div className={classes.body}>
                    <h1>첫 포스트si</h1>
                    <Link href='/'><a>홈으로 가기</a></Link>
                </div>

                <Card>
                    <CardMedia
                        className={classes.image}
                        image="https://miro.medium.com/max/2400/1*pxzqOAZXhA0ch05Mzlsi5A.jpeg"
                    />

                    <CardContent>
                        카드 콘텐트
                    </CardContent>
                </Card>

            </div>
        </CssBaseline>
    )
}
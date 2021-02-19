import { PlayCircleFilledWhite } from "@material-ui/icons";

const HeaderStyle = {
    header: {
        opacity: '0.8',
        width: '100%',
        position: 'fixed',
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        background: 'white',
        zIndex: 300,
    },
    headerLogo: {
        display: 'flex',
        textDecoration: 'none',
        alignItems: 'center',
        paddingLeft: 20,
        '& img': {
            width: 32.25,
            height: 32.25
        },
        '& h3': {
            marginTop: 0,
            marginBottom: 0,
            marginLeft: 15,
            fontSize: 30,
            color: 'tomato',
        }
    },
    headerAccount: {
        padding: 20,
        display: "flex",
        alignItems: 'center',
        '& a': {
            textDecoration: 'none',
            color: 'black',
        },
    },
    headerDivider: {
        height: 20,
        borderRight: '1.5px solid black',
        margin: '0px 5px',
    },
    headerUserImage: {
        width: '40px',
        display: 'flex',
        justifyContent: 'center',
        '& img': {
            width: '30px',
            height: '30px',
            borderRadius: '50%'
        }
    },
    headerList: {
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        right: '5px',
        top: '80px',
        width: '15%',
        background: 'white',
        borderRadius: '10px',
        '& a': {
            display: 'flex',
            textDecoration: 'none',
            padding: '10px 0',
            color: 'black',
            '& h5': {
                paddingLeft: 10,
                fontSize: 20
            }
        },
    }
}
export default HeaderStyle;

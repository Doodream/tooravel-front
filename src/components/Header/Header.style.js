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
        zIndex: 100,
    },
    headerLogo: {
        padding: 20,
        '& img': {
            width: 150,
            height: 32.25
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
        visibility: 'hidden',
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

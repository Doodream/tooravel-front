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
        '& div': {
            height: 20,
            borderRight: '1.5px solid black',
            margin: '0px 5px',
        },
        '& a': {
            textDecoration: 'none',
            color: 'black',
        },

    }


}
export default HeaderStyle;

const AboutMenuStyle = {
    menu: {
        display: 'flex',
        height: '60px',
        width: '100%',
        justifyContent: 'center',
        borderBottom: '1px solid #a4b0be',
    },
    menuSection: {
        display: 'flex',
        width: '60%',
        height: '100%',
        padding: 0,
    },
    menuItem: {
        margin: '0px 10px',
        padding: 0,
        display: 'flex',
        height: '100%',
        flexGrow: '1',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        textDecoration: 'none',
        color: '#1e272e',
        '& a': {
            fontSize: 20,
            fontWeight: '500',
            textDecoration: 'none',
            color: '#1e272e',
        },
    },

}
export default AboutMenuStyle;
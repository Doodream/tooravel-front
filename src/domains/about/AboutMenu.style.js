const AboutMenuStyle = {
    menu:{
        display: 'flex',
        height: '60px',
        width: '100%',
        justifyContent: 'center',
        borderBottom: '2px solid #5E5E5E',
    },
    menuSection:{
        display:'flex',
        width: '60%',
        height: '100%',
        padding: 0,
    },
    menuItem:{
        margin: '0 5px',
        padding: 0,
        display:'flex',
        height: '100%',
        flexGrow: '1',
        justifyContent: 'center',
        alignItems: 'center',
        '& a':{
            fontSize: 20,
            textDecoration: 'none',
            color: '#1e272e',
            
        },
    },

}
export default AboutMenuStyle;
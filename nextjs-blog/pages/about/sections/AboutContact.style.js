const AboutContactStyle = {
    contact: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px',
    },
    contactSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%',
    },
    contactTitle: {
        width: '100%',
        height: '180px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        '& h4': {
            fontWeight: '600',
            marginBottom: '15px',
            fontSize: '30px',
        }
    },
    contactMap: {
        '& div': {
            width: '100%',
            height: '40vh',
            '& iframe': {
                width: '100%',
                height: '100%',
                border: 'none',
            }
        }

    }



}
export default AboutContactStyle;
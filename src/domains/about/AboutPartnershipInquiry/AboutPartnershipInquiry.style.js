const AboutPartnershipInquiryStyle = {
    inquiry: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '50px',
    },
    inquirySection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '40%',
    },
    inquiryTitle: {
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
    inquiryForm: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        '& button': {
            width: '100%',
            color: 'white',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '5px',
            background: '#5E5E5E',
        }
    },
    inquiryInput: {
        display: 'flex',
        width: '100%',
    },
    inquiryIdentify: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& div': {
            width: '100%',
        },
        '&>:nth-child(3)': {
            marginBottom: '0',
        }
    },
    inquiryContent: {
        flexGrow: 1,
        display: 'flex',
        '& div': {
            width: '100%',
            height: '100%',
        }

    },



}
export default AboutPartnershipInquiryStyle;
// import { keyframes } from "styled-components";

// var fadeout = keyframes`
//         0% {
//             transform: translateZ(600px);
//             opacity: 0;
//         }
//         100% {
//             transform: translateZ(0);
//             opacity: 1;
//         }
//     `;

const SlideSectionStyle = {
    imageSection:{
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '490px',
        '& img':{
            width: '100%',
            height: '100%',
            //animation: `all 3s ease-in-out`, 
        }
    },
    title:{
        position: 'absolute',
        top: '30%',
        left: '30%',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        color: 'white',
        '& h5':{
            marginTop: '30px',
        }
    }
    
}
export default SlideSectionStyle;

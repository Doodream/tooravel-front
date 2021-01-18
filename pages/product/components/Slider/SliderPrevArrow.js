import React from 'react'
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';

export default function SliderPrevArrow(props) {
    const { className, onClick, style } = props;
    return (
        <KeyboardArrowLeftIcon
            className={className}
            onClick={onClick}
            style={{
                ...style,
                display: "block",
                color: 'white',
                filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.7))',
                width: 50,
                height: 50,
            }} />
    )
}

import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
export default function SliderNextArrow(props) {
    const { className, onClick, style } = props;
    return (
        <KeyboardArrowRightIcon
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

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from '../../../src/views/product/components/AddToCart.style.js';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const useStyles = makeStyles(styles);

export default function AddToCart({ image, title, price, quantity, removeToCart }) {
    const classes = useStyles();
    const [count, setCount] = React.useState(quantity);
    var newCart = typeof window === "undefined" ? [] : JSON.parse(window.localStorage.getItem('cart'));
    var index = newCart.findIndex(item => item.title === title);


    React.useEffect(() => {
        setCount(quantity);
        //console.log("dkdk");
    }, [quantity])

    const addProduct = () => {
        newCart[index].quantity += 1;
        window.localStorage.setItem('cart', JSON.stringify(newCart))
        setCount(newCart[index].quantity);
    }

    const reduceProduct = () => {
        if (newCart[index].quantity <= 0) return
        newCart[index].quantity -= 1;

        window.localStorage.setItem('cart', JSON.stringify(newCart))
        setCount(newCart[index].quantity);
    }

    const removeProduct = async () => {
        await removeToCart(index);
    }

    return (
        <Box className={classes.cart}>
            <Box className={classes.productImage}>
                <img src={image} alt="상품이미지" />
            </Box>
            <Box className={classes.productTitle}>
                <h4>{title}</h4>
            </Box>
            <Box className={classes.productCount}>
                <h4>수량 {count}개</h4>
                <Box className={classes.productCountButton}>
                    <button className={classes.productCountPlusButton} onClick={addProduct}><KeyboardArrowUpIcon /></button>
                    <button className={classes.productCountMinusButton} onClick={reduceProduct}><KeyboardArrowDownIcon /></button>
                </Box>
            </Box>
            <Box className={classes.productPrice}>
                <h4>{count * price} 원</h4>
            </Box>
            <Box className={classes.productRemoveButton}>
                <button onClick={removeProduct}><DeleteForeverIcon /></button>
            </Box>
        </Box>
    )
}

AddToCart.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
}
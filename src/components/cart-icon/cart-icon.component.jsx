import { useContext } from 'react';

import { CartContext } from '../../context/cart.context';
//import './cart-icon.styles.jsx';
import { ShoppingIcon, CartIconContainer , ItemCount } from './cart-icon.styles';

const CartIcon = ()=>{
    const { isCartOpen , setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleIscartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIscartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;
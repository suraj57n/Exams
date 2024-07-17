import React from 'react'
import { useStateValue } from "./StateProvider";
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import { image } from 'qr-image';
function CheckOut() {
    const [{ basket }] = useStateValue();
   
    return (
        <div className='checkout'>
            <img
                className='checkout_ad'
                src="https://wallpapers.com/images/featured/amazon-npcp6jc782ixp9zs.jpg" alt="" />
            {basket?.length === 0 ? (
                <div className="r">
                    <h2>Your Shopping basket is empty</h2>
                    <p>You have an empty basket, Add something to the basket to see your items</p>
                </div>
            ) : (
                <div>
                    {/* Render your checkout items here */}
                    <h2>Your shopping basket</h2>
                    {/* <CheckoutProduct
                    basket
                    /> */}
                    {basket.map(item => (
                        <CheckoutProduct
                        key={item.id}
                        image={image.id}
                        {...item} // Spread the properties of the item object
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default CheckOut

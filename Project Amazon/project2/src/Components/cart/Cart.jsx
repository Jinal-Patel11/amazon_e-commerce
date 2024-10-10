import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrease, deleteAction, increase } from '../Redux/Action';
import './Cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
    const data = useSelector((store) => { return store });
    const dispatch = useDispatch();

    const totalPrice = data.reduce((acc, item) => {
        // console.log(item.price, item.quantity)
        return acc + item.price * item.quantity;
    }, 0)

    function deleteFunction() {
        dispatch(deleteAction());
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Shopping Cart</h2>
            <ul className="cart-items">
                {data.map((e, i) => (
                    <li key={i} className="cart-item">
                        <img src={e.image} alt={e.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3 className="cart-item-title">{e.title}</h3>
                            <p className="cart-item-description">{e.description}</p>
                            <p className="cart-item-price">₹{e.price}</p>
                            <p className="cart-item-delivery">Delivery: {e.delivery}</p>
                        </div>
                        <div className="cart-item-controls">
                            <button className="cart-item-delete-button" onClick={() => deleteFunction(e.id)}><i class="fa-solid fa-trash-can"></i></button>
                            <button className="cart-item-button" onClick={() => dispatch(decrease(i))}>-</button>
                            <span className="cart-item-quantity">{e.quantity}</span>
                            <button className="cart-item-button" onClick={() => dispatch(increase(i))}>+</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h2>Total Price: {totalPrice}</h2>
            <Link to="/payment" className="payment-link">
                <button className="payment-button">Payment</button>
            </Link>
        </div>
    );
}

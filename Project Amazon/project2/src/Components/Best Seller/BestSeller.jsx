import React, { useState, useEffect } from 'react';

const BestSeller = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulated product data (you can replace this with an actual API call)
        const productData = [
            {
                id: 1,
                rank: 1,
                image: 'https://images-eu.ssl-images-amazon.com/images/I/61-zRoFrfqL._AC_UL675_SR675,480_.jpg',
                name: 'Tata Salt, 1kg',
                reviews: '65,572',
                price: 24
            },
            {
                id: 2,
                rank: 2,
                image: 'https://images-eu.ssl-images-amazon.com/images/I/81ILzuTdkbL._AC_UL675_SR675,480_.jpg',
                name: 'Fortune Sunlite Refined Sunflower Oil, 1L',
                reviews: '35,750',
                price: 220
            },
            {
                id: 3,
                rank: 3,
                image: 'https://images-eu.ssl-images-amazon.com/images/I/81FpXjtzVwL._AC_UL675_SR675,480_.jpg',
                name: 'Vedaka Whole Jeera (Cumin), 100g',
                reviews: '26,348',
                price: 65
            },
            {
                id: 4,
                rank: 4,
                image: 'https://images-eu.ssl-images-amazon.com/images/I/81Jv9RTTQUL._AC_UL675_SR675,480_.jpg',
                name: 'Aashirvaad Salt, 1kg',
                reviews: '28,572',
                price: 35
            },
            {
                id: 5,
                rank: 5,
                image: 'https://images-eu.ssl-images-amazon.com/images/I/71eWD5xjijL._AC_UL675_SR675,480_.jpg',
                name: 'Tata Sampann Unpolished Toor Dal/Arhar Dal , 1kg',
                reviews: '24,916',
                price: 269
            },
            {
                id: 6,
                rank: 6,
                image: 'https://images-eu.ssl-images-amazon.com/images/I/61GOmrAXroL._AC_UL675_SR675,480_.jpg',
                name: 'MAGGI, 70g',
                reviews: '65,348',
                price: 160
            }
        ];
        setProducts(productData);
    }, []);

    return (
        <div style={styles.container}>
            {/* Navbar */}
            <nav style={styles.navbar}>
                <h2>Amazon Bestsellers</h2>
                <ul style={styles.navLinks}>
                    <li>Grocery & Gourmet Foods</li>
                    <li>Electronics</li>
                    <li>Books</li>
                    <li>Clothing</li>
                    {/* Add more categories as needed */}
                </ul>
            </nav>

            {/* Product List */}
            <h3>Bestsellers in Grocery & Gourmet Foods</h3>
            <div style={styles.productList}>
                {products.map(product => (
                    <div key={product.id} style={styles.product}>
                        <span style={styles.rank}>#{product.rank}</span>
                        <img src={product.image} alt={product.name} style={styles.productImage} />
                        <div style={styles.productName}>{product.name}</div>
                        <div style={styles.productReviews}>{product.reviews} reviews</div>
                        <div style={styles.productPrice}>₹{product.price}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Inline Styles
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px'
    },
    navbar: {
        borderBottom: '1px solid #ccc',
        marginBottom: '20px',
        paddingBottom: '10px'
    },
    navLinks: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        padding: 0,
        margin: '10px 0'
    },
    productList: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    product: {
        border: '1px solid #ddd',
        padding: '10px',
        margin: '10px',
        width: '300px',
        textAlign: 'center',
        borderRadius: '5px'
    },
    productImage: {
        width: '100%',
        height: 'auto',
        marginBottom: '10px'
    },
    rank: {
        backgroundColor: '#FF9900',
        color: '#fff',
        padding: '5px',
        borderRadius: '3px',
        display: 'block',
        marginBottom: '10px'
    },
    productName: {
        fontWeight: 'bold',
        marginBottom: '5px'
    },
    productReviews: {
        color: '#555',
        marginBottom: '10px'
    },
    productPrice: {
        fontWeight: 'bold',
        color: '#B12704'
    }
};

export default BestSeller;

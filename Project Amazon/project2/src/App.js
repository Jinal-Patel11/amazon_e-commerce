import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero section/Hero';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Components/Shop secion/Shop';
import Category from './Components/Category/Category';
import ProductDetails from './Components/Product Details/ProductDetails';
import Cart from './Components/cart/Cart';
import Carousel from './Components/SmallSlider/Carousel';
import Login from './Components/Login page/Login';
import TodayDeal from './Components/Today deal/TodayDeal';
import CustomerServices from './Components/Customer Service/CustomerServices';
import Sell from './Components/Sell/Sell';
import Payment from './Components/Payment page/Payment';
import Thankyou from './Components/Thank you page/Thankyou';
import BestSeller from './Components/Best Seller/BestSeller';
import ProductSection from './Components/product section/ProductSection';
import OrderSection from './Components/oserder section/OrderSection';
import Clothes from './Components/Dropdown/Clothes/Clothes';
import Electronics from './Components/Dropdown/Electronics/Electronics';
import Jewellery from './Components/Dropdown/Jewellery/Jewellery';
import Details from './Components/Dropdown/Details';
import { useState } from 'react';
import { myContext } from './Components/Context';

function App() {
  const [state, setState] = useState({
    user: "guest user",
    isLogged: false
  })

  function fnLogged(data) {
    setState(data)
  }
  return (
    <div className="App">
      <myContext.Provider value={{ state, fnLogged }}>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Shop />
              <Carousel />
              <ProductSection />
            </>
          } />
          <Route path="/clothes" element={<Clothes />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/jewellery" element={<Jewellery />} />
          <Route path="/productDetail/:id" element={<Details />} />
          <Route path="/todaysdeal" element={<TodayDeal />} />
          <Route path="/bestseller" element={<BestSeller />} />
          <Route path="/ordersection" element={<OrderSection />} />
          <Route path="/customerservice" element={<CustomerServices />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/thankyou" element={<Thankyou />} />
          <Route path="/:type" element={<Category />} />
          <Route path="/productDetails/:type/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </myContext.Provider>
    </div>
  );
}

export default App;

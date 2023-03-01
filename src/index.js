import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import NavScrollExample from './Components/navbar';
import ColorSchemesExample from './Components/productsearch';
import ProductTable from './Components/productTable';
import Customers from './Components/Customers';
import PaymentMethod from './Components/cashDeposite';
import CashCollectButton from './Components/paymentCollectButton';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavScrollExample />
    <ColorSchemesExample/>
    <ProductTable/>
    <Customers/>
    <PaymentMethod/>
    <CashCollectButton/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
//dev-kqpbjm2mwjn3qqwj.us.auth0.com domain
//vGHoYMvCXZRPYNragFK8VYbu9ng5vKTn  client id
//ktRbVAYSdlFvmq3Hr94GGyD5fYxXISJspK2RcN3q0HumQ-VXiry1FkIpS3yFUjD7 CSECRET
root.render(
    <Auth0Provider
    domain ="dev-kqpbjm2mwjn3qqwj.us.auth0.com"
    clientId="vGHoYMvCXZRPYNragFK8VYbu9ng5vKTn"
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
    >
    <UserProvider>
<ProductsProvider>
<FilterProvider>
<CartProvider>
<App />
</CartProvider>
</FilterProvider>
</ProductsProvider>
    </UserProvider>
    </Auth0Provider>
);

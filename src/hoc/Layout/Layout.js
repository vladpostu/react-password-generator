

import React from 'react';
import { ReactDOM } from 'react';

import './Layout.css';

const Layout = (props) => (
    <div className='layout'>
        {props.children}
    </div>
)

export default Layout;
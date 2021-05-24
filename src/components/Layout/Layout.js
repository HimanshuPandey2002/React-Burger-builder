import React from 'react';
import Auxiliary from '../../hoc/Auxiliary'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import  './Layout.css'

const layout = (props) => (
  <Auxiliary>
    {/* <div>Toolbar, SideDrawer, Backdrop</div> */}
    <Toolbar />
    <main className="Content">{props.children}</main>
  </Auxiliary>
);

export default layout;
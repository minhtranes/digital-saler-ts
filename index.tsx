import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { ProSidebar, Menu, MenuItem, SubMenu, FaGem, FaHeart } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem iconShape={<FaGem />}>Inventory</MenuItem>
            <SubMenu title="Mommon Products" iconShape={<FaHeart/>}>
              <MenuItem>Product 1</MenuItem>
              <MenuItem>Product 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

import React from 'react';
import logo from './logo.svg';
import './App.less';
import 'antd/dist/antd.css'
import { Button } from "antd"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
         <Button type="primary">一个按钮</Button>
      </header>
    </div>
  );
}

export default App;

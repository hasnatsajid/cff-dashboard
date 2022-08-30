import './App.css';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { Route, Routes } from 'react-router-dom';
import Customer from './components/Customer';

function App(props) {
  const onChangeTab = (key) => {
    console.log(key);
  };
  // const [state, setState] = useState(false);
  const [tabActive, setTabActive] = useState(false);

  const handleSectionHideAndShow = () => {
    setTabActive(false);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/" element={<MainContent onChange={onChangeTab} handleSectionHideAndShow={handleSectionHideAndShow} />} />
          <Route path="/customer" element={<Customer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

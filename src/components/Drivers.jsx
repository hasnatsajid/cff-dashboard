import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormSection, FormHead } from '../styles/index';
import { GoPlus } from 'react-icons/go';
import { Button, DatePicker, Form, Input, Select } from 'antd';
import DriversForm from './DriversForm';

const Drivers = () => {
  const [componentSize, setComponentSize] = useState('default');

  const [drivers, setDrivers] = useState([]);

  return (
    <div className="Drivers">
      <a className="addBtn" href="#" onClick={() => setDrivers([...drivers, {}])}>
        <GoPlus />
        Add Driver
      </a>
      <Row>
        {drivers.map((item, index) => (
          <DriversForm driversComponent={drivers} setDriversComponent={setDrivers} para={item} id={index} />
        ))}
      </Row>
    </div>
  );
};

export default Drivers;

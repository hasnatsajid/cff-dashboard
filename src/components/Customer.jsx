import { GoPlus } from 'react-icons/go';
import { Table } from 'antd';
import React, { useState } from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend', 'ascend'],
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Created',
    dataIndex: 'created',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Operations',
    dataIndex: 'operations',
  },
];

const data = [];

for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    phone: `(123) 456-78${i}`,
    email: 'loremipsum@yoursite.com',
    created: `${new Date().getFullYear()}`,
    operations: (
      <>
        <span style={{ marginRight: '0.5rem' }}>Edit</span>
        <span>Delete</span>
      </>
    ),
  });
}

const Customer = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  const handleShowForms = (e) => {};

  const handleDelete = (key) => {
    // const newData = dataSource.filter((item) => item.key !== key);
    // setDataSource(newData);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select Odd Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }

            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: 'even',
        text: 'Select Even Row',
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }

            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <>
      <div className="customer">
        <a className="addBtn" onClick={handleShowForms}>
          <GoPlus />
          {'  '}
          Add Customer
        </a>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
      </div>
    </>
  );
};

export default Customer;

import React, { useState, useEffect } from 'react';
import DataTable from '../components/DataTable';
import axios from 'axios';

const Customers = () => {
  // State
  const [customerData, setCustomerData] = useState([]);

  // Get customer data array from server on first render
  const getCustomerData = async () => {
    try {
      const { data } = await axios.get('api/v1/customers');
      setCustomerData(data);
      console.log(data);
    } catch (error) {}
  };

  useEffect(() => {
    getCustomerData();
  }, []);

  return (
    <div>
      <h1>Customer Overview</h1>
      <DataTable customerDataSet={customerData} />
    </div>
  );
};

export default Customers;

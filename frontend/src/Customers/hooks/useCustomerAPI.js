import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('/api/v1/customers');
        setData(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    getData();
  }, []);

  return data;
};

export const GetSingle = (id) => {
  const [customerData, setCustomerData] = useState();

  useEffect(() => {
    const getCustomer = async () => {
      try {
        const { data } = await axios.get(`/api/v1/customers/${id}`);
        setCustomerData(data);
      } catch (error) {
        return error.response;
      }
    };
    getCustomer(id);
  }, [id]);

  return customerData;
};

export const CreateNew = async (
  customerName,
  customerAddress,
  customerId,
  customerRef
) => {
  try {
    const res = await axios.post('api/v1/customers', {
      customerName,
      customerAddress,
      customerId,
      customerRef,
    });

    return res;
  } catch (error) {
    return error.response;
  }
};

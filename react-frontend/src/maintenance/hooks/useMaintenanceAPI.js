import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetAll = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get('api/v1/maintenance-data');
        setData(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    getData();
  }, []);

  return data;
};

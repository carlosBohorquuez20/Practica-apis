import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useChange = (url) => {
  const [data, setData] = useState({});
  useEffect(() => {
    axios
      .get(url)
      .then((res) => setData(res.data));
  }, [])
  return { data };
};

export default useChange;
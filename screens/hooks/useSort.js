import React, { useState } from "react";

function useSort(incomingData) {
  const [data, setData] = useState(incomingData);
  const [toggle, setToggle] = useState(true);
  const reverseArray = () => {
    const newData = data.reverse();
    setData([...newData]);
    setToggle(!toggle);
  };
  return {
    data,
    toggle,
    setData,
    reverseArray,
  };
}

export default useSort;

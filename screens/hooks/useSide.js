import React, { useState } from "react";

function useSide(incomingData) {
  const [side, setSide] = useState(false);

  return {
    side,
    setSide,
  };
}

export default useSide;

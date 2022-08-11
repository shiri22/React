import React, { useState, useEffect, useMemo } from "react";

const UseEffectVsUseMemo = () => {
  const [memo, setMemo] = useState(0);
  const [effect, setEffect] = useState(0);

  useEffect(() => {
    console.log("UseEffect"+effect);
  }, [effect]);

  useMemo(() => {
    console.log("UseMemo",memo);
  }, [memo]);

  return (
    <div>
        {memo}<br/>
        {effect} <br/>
      <button onClick={() => setEffect(memo + 1)}>useEffect</button>
      <button onClick={() => setMemo(effect + 1)}>UseMEMO</button>
    </div>
  );
};

export default UseEffectVsUseMemo;

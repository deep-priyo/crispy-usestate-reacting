import React from "react";
import { useState } from "react";

const UseStatehooks = () => {
    const [val, setVal] = useState(false);
    return (
        <div>
            <h1>
                {val ? "Bahar Jao" : "Bahar Mat Jao"}
            </h1>
            <button onClick={() => setVal(()=>!val)} className="px-2 py-1 bg-blue-500 rounded-full">Change</button>
        </div>
    );
};

export default UseStatehooks;

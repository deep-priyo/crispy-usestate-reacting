import React, { useState } from "react";

const UseStateArr2 = () => {
    const [val, setVal] = useState([
        { name: 'deep', age: 24 },
        { name: 'joy', age: 55 },
        { name: 'ram', age: 30 }])
    return (
        <div>
            {val.map((val, i) => (
                <div key={i} className="p-5">
                    <h1 >{val.name}</h1>
                    <h2 >{val.age}</h2>
                </div>
            ))}
            <button onClick={()=>setVal(()=>val.map(item => item.name==='deep' ? ({name:'deep',age:item.age}): item))} className="mt-3 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click</button>

        </div>
    );
};

export default UseStateArr2;

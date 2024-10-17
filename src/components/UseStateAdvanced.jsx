import  { useState } from "react";

const UseStateAdvanced = () => {
    const [val, setval] = useState(12);
    return (
        <div className="p-4">
            <h1>{val}</h1>
            <button onClick={()=>setval((prev)=>prev+1)} className="px-3 py-1 bg-blue-400 rounded-full">Change karo</button>
        </div>
        

    );
};

export default UseStateAdvanced;

import { useState } from "react";


const UseStateArr = () => {
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

    return (
        <div className="p-5">
            {val.map(item => <h1>{item}</h1>)}
            <button onClick={
                () => (setVal(val.filter((item,index)=>item%2==0)))
            } className="px-3 py-1 mt-1 bg-blue-500 text-sm text-white rounded-full">Click</button>
        </div>
    );
};

export default UseStateArr;

import { useState } from "react";

const ArrayAddEle = () => {
    const [val, setVal] = useState([1, 2, 3, 4, 5, 6, 7])
    return (
        <div className="p-5">
            {val.map((item, index) => <h1 key={index}>{item}</h1>)}
            <button onClick={() => setVal( [...val, val[val.length - 1] + 1])} className="mt-3 text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Click</button>

        </div>
    );
};

export default ArrayAddEle;

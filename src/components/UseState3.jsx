import  { useState } from "react";

function UseState3() {
    const [val, setVal] = useState({ name: "Priyadeep", isBanned: false });
    return (
        <div className="p-4">
            <h1>Name: {val.name}</h1>
            <h2>Banned: {val.isBanned.toString()}</h2>
            <button className={`px-3 py-1 ${val.isBanned ? 'bg-blue-500' : 'bg-red-500'} rounded-full  text-white mt-3`}
             onClick={() => setVal({ ...val, isBanned: !val.isBanned })}>Change</button>
        </div>);
}

export default UseState3;

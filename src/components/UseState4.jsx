import { useState } from "react";

const UseState4 = () => {
    const [val, setVal] = useState({ name: "Deep", age: 20 });
    return (
        <div>
            <button onClick={() => {
                (setVal({ ...val, gender: 'male' }))
                console.log(val)
            }}>Click</button>
        </div>
    );
};

export default UseState4;

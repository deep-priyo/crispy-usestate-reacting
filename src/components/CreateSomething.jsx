import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";


const CreateSomething = () => {
    const [val, setVal] = useState(false);
    return (

        <div className="w-full h-screen flex justify-center items-center bg-zinc-300">
            <div className="relative w-60 h-32  rounded-md flex overflow-hidden ">
                <img className={`transition-transform duration-700 shrink-0 w-full h-full object-cover ${val === false ? '-translate-x-[0%]' : '-translate-x-[100%] ease-in-out'}`} src="https://images.unsplash.com/photo-1727946301270-dbc7f3c0946c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <img className={`transition-transform duration-700 shrink-0 w-full h-full object-cover ${val === false ? '-translate-x-[0%] ease-in-out' : '-translate-x-[100%]'}`} src="https://images.unsplash.com/photo-1707250098351-53a79ba57c2f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <span onClick={() => setVal(() => !val)} className="w-8 h-8 flex items-center bg-[#dadada7b] justify-center absolute bottom-10 rounded-full left-1/2 -translate-x-[50%] "><FaArrowRight size={"0.8em"} /></span>

            </div>
        </div>);
};

export default CreateSomething;

import { useState } from "react";

const UserProfile = () => {
    const [user, setUser] = useState({ name: "John Doe", age: 25, location: "New York" })
    return (
        <div>
            <h2>User Profile</h2>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Location: {user.location}</p>

            <button onClick={() => (setUser({ ...user, age: user.age + 1 }))} className="mt-3 px-3 py-1 bg-blue-500 rounded-full text-white" >Increase Age</button>

        </div>
    );
};

export default UserProfile;

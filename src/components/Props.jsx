
const Props = ({ data, color }) => {
    return (
        <button className={`px-3 py-1 ${color} text-zinc-100 text-xs rounded m-2`}>{data}</button>
    );
};

export default Props;

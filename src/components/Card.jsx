const Card = () => {
    const data = [
        { song: "Mocking Bird", description: "This is a song by Eminem, one of my all-time favorites." },
        { song: "Maazak", description: "This is a song by Anuv Jain" }
    ];
    const handleClickDownload = () => { alert("Click"); };
    return (
        <div className="w-full h-screen bg-zinc-300 flex flex-col gap-4 justify-center items-center">
            {data.map((ele, index) => (
                <div key={index} className="song px-3 py-2 w-90 bg-zinc-100 rounded">
                    <h3 className="font-semibold text-xl  w-64">{ele.song}</h3> {/* Set width */}
                    <p className="text-xs mt-2  w-64">{ele.description}</p> {/* Set width */}
                    <button onClick={handleClickDownload} className="px-2 py-1 bg-blue-400 text-sm font-semibold text-zinc-100 rounded-md mt-3">
                        Download Now
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Card;

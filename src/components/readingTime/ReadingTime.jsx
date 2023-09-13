
const ReadingTime = ({time}) => {
    console.log(time)
    return (
        <div>
            <h1 className="text-xl text-purple-950 font-semibold">Total Reading Time: {time} Min</h1>
        </div>
    );
};

export default ReadingTime;
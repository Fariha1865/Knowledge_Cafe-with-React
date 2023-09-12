import { useEffect, useState } from "react";

const ReadingTime = ({sum}) => {

    const [time,setTime] = useState([]);

    useEffect(() => {

        setTime(sum);
    

    }, [sum])
    return (
        <div>
            <h1 className="text-xl font-semibold text-purple-950">Spent time on read : {time} Min</h1>
        </div>
    );
};

export default ReadingTime;
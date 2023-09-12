import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
const Bookmark = () => {

    const [bookmarks, setBookmarks] = useState([]);

    useEffect(() => {

        const newBookMarks = JSON.parse(localStorage.getItem('bookMarks'))
        if (newBookMarks) {
            setBookmarks(newBookMarks);
        }
        console.log(JSON.parse(localStorage.getItem('bookMarks')))

    }, [bookmarks])
    return (
        <div>
            <h1 className="text-xl"><span className="text-xl font-bold underline">Bookmarked Blogs  </span>: {bookmarks.length}</h1>
            {
            
                bookmarks.map((item, index) => 
 
                <div key={index} className="p-5 flex justify-center shadow-xl mt-5 bg-white font-bold">

                    <h1>{item}</h1>

                </div>) 
            }
        </div>
    );
};

Bookmark.propTypes = {
    title: PropTypes.object
}
export default Bookmark;
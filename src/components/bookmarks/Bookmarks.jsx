import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
const Bookmark = ({ bookmarks }) => {

    const [allBookmarks, setBookmarks] = useState([]);

    useEffect(() => {

        const newBookMarks = JSON.parse(localStorage.getItem('bookMarks'))
        if (newBookMarks) {
            setBookmarks(newBookMarks);
        }
        

    }, [bookmarks])
    return (
        <div>
            <h1 className="text-xl"><span className="text-xl font-bold underline">Bookmarked Blogs  </span>: {allBookmarks.length}</h1>
            {

                allBookmarks.map((item, index) =>

                    <div key={index} className="p-5 flex justify-center shadow-xl mt-5 bg-white font-bold">

                        <h1>{item.blog_title}</h1>

                    </div>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    title: PropTypes.object
}
export default Bookmark;
import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl p-5">
            <img src={blog.cover_img} alt="blogPic" className='h-48 rounded-md' />
            <div className="card-body">
                <div className='flex justify-between'>
                    <div className='flex gap-5'>
                        <img src={blog.auth_img} alt="" className='w-10 h-10 rounded-full' />
                        <div>
                            <h1 className='text-base font-bold'>{blog.author_name}</h1>
                            <p className='text-gray-500 text-xs'>{blog.published_date} (4 Days ago)</p>
                        </div>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <h1 className='text-gray-500 text-sm'>{blog.reading_time} min read</h1>
                        <i className="fa-regular fa-bookmark cursor-pointer"></i>
                    </div>
                </div>

                <h1 className='text-xl font-bold mt-5 h-16'>{blog.blog_title}</h1>
               
               <div className='flex w-20 gap-2 mb-5'>
               {blog.hashtags.map((item,index)=><p key={index} >#{item}</p>)}
               </div>

                <a href="#" className='underline text-blue-900 font-bold'>Mark As Read</a>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
};

export default Blog;

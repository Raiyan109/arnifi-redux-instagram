/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

const Post = ({ post }) => {
    // eslint-disable-next-line react/prop-types
    const { userPhoto, userName, time, image, likes, description } = post
    return (
        <div>
            <article className="flex flex-col bg-gray-50 py-2 px-6 space-y-2"
            >
                <div className="flex items-center gap-4">
                    <img src={userPhoto} className="w-10 h-10 rounded-full object-cover" alt="" />
                    <p>{userName}</p>
                    <p className="text-gray-600">{time}</p>
                </div>
                <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                    <img alt="" className="object-cover w-full  bg-gray-500 rounded-sm" src="https://source.unsplash.com/200x200/?fashion?1" />
                </a>
                <p>{likes} likes</p>
                <p><span className="font-bold">{userName}</span> {description}</p>

            </article>
        </div>
    );
};

export default Post;
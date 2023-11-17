import Post from "./Post";

const Posts = () => {
    const posts = [
        {
            id: 1,
            userPhoto: 'https://i.ibb.co/hX27KnC/Woman-with-headlamp-and-biker.jpg',
            userName: 'wild_animals',
            time: '2h',
            image: 'https://i.ibb.co/ypBz9bd/Hiking-Binoculars.jpg',
            likes: '12',
            description: 'What a little cutie'
        },
        {
            id: 2,
            userPhoto: 'https://i.ibb.co/hX27KnC/Woman-with-headlamp-and-biker.jpg',
            userName: 'wild_animals',
            time: '2h',
            image: 'https://i.ibb.co/PhkJv2F/bfshaheen.jpg',
            likes: '12',
            description: 'What a little cutie'
        },
        {
            id: 3,
            userPhoto: 'https://i.ibb.co/hX27KnC/Woman-with-headlamp-and-biker.jpg',
            userName: 'wild_animals',
            time: '2h',
            image: 'https://i.ibb.co/Dz2YHLc/notredem.jpg',
            likes: '12',
            description: 'What a little cutie'
        },
    ]
    return (
        <div className="mx-auto flex flex-col justify-center items-center gap-4">
            {
                posts.map((post) => (
                    <Post key={post.id} post={post} />
                ))
            }
        </div>
    );
};

export default Posts;
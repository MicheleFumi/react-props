import PostCard from './PostCard/PostCard'
import posts from '../data/post.js'


export default function AppMain() {

    const published = posts.filter(post => post.published)
    return (


        <main>
            <div className="container-main">

                {published.map(post => <PostCard key={post.id} data={post} />)}

            </div>





        </main >
    )
}
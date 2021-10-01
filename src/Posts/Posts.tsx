import { useEffect, useState } from 'react'
import { Post } from '../common/types/Post'
import { PostItem } from './Post'

export const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((r) => r.json())
            .then((posts: Post[]) => setPosts(posts))
    }, [])
    return posts.length ? (
        <div className='posts'>
            {posts.map((p) => (
                <>
                    <PostItem>{p}</PostItem>
                    <hr />
                </>
            ))}
        </div>
    ) : (
        <h2>Loading...</h2>
    )
}

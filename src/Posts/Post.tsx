import { Post } from '../common/types/Post'

export const PostItem = ({ children }: { children: Post }) => (
    <div className='post'>
        <div className='header'>
            <h3 className='id'>{children.id}.</h3>
            <h3 className='title'> {children.title}</h3>
        </div>
        <div className='content'>{children.body}</div>
    </div>
)

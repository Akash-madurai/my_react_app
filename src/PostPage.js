import {useContext} from 'react'
import {useParams,Link} from "react-router-dom";
import DataContext from './context/DataContext';

const PostPage = () => {
   const {posts , handleDelete} = useContext(DataContext)
    const {id} = useParams();
    const postId = Number(id);
    const post = posts.find(post => (post).id.toString() === id);
   
  return (
     <main className='PostPage'> 
        <article className='post'>
            {post && 
               <>
                  <h2>{post.title}</h2>
                  <p className='postDate'>{post.datetime}</p>
                  <p className='postBody'>{post.body}</p>
                   <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
                 {/* <Link to = {`/edit/${post.id}`} > <button className='editButton'>Edit Post</button> </Link> */}
                  <button className = "deleteButton" onClick={()=>handleDelete(post.id)}>Delete Post</button>
               </>
            }
            {!post &&
               <>
                  <h2>Deleted!</h2>
                  <p>The post have been Deleted.</p>
                  <p>
                    <Link to = "/" >Visit our Homepage</Link> 
                  </p>
               </>
            }
        </article>
        
     </main>
  )
}

export default PostPage
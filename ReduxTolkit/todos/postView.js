import React, {useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPost } from './postSlice';

const postView = () => {
    const {isLoading, posts, error} = useSelector((state)=> state.postReducer);

    const dispatch= useDispatch();

    useEffect(() => {
        dispatch(fetchPost())
    }, [])
  return (
    <div>
      {isLoading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      <section>
        {posts && posts.map((post)=>{
            return <article>
                <h5>{post.title}</h5>
                <p>{post.body}</p>
            </article>
        })}
      </section>
    </div>
  )
}

export default postView

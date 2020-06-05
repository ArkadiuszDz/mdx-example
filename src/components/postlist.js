import React from 'react';
import PostCard from './postcard';
import styles from '../css/postlist.module.css';

const PostList = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>George JSON</h1>
      <h4>Personal Blog</h4>
      <div className={styles.center}>
        {
          posts &&
          posts.map(({node}, index) => {
            return (
              <PostCard key={index} post={node}/>
            )
          })
        }
      </div>
    </section>
  )
}

export default PostList;
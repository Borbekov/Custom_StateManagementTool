import styles from './Post.module.css'

const Post = ({ post }) => {
  return (
    <div className={styles.post_wrapper} key={post.id}>
      <div className={styles.post}>
        <img src="https://freepikpsd.com/file/2019/10/avatar-icon-png-5-Images-PNG-Transparent.png" alt="" />
        <p>{post.text}</p>
      </div>
    </div>
  )
}

export default Post;
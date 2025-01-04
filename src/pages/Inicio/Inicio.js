import  Banner  from "Component/Banner";
import styles from "./Inicio.module.css";
import  Posts  from "json/posts.json";
import PostCard from "Component/PostCard";

export const Inicio = () => {
    return (

        <ul className={styles.posts}>
            { Posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post}/>
                </li>
            ))}
        </ul>
    );
};

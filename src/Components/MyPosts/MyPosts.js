import style from './MyPosts.module.css';
import dospatImage from '../../Resources/img/travel-image-213.jpg'

import { Link } from 'react-router-dom';

function MyPosts() {

    return (
        <section className={style["my-posts-container"]}>
            <header className={style["title"]}>
                <h2 className={style["my-posts-container-title"]}>My Fishing Trips</h2>
            </header>
            <section className={style["posts"]}>
                <div className={style["my-posts-box"]}>
                    <img
                        src={dospatImage}
                        className={style["my-posts-image"]}
                        alt="Image of the some dam"
                    />
                    <h2 className={style["my-posts-title"]}>
                        <span className={style["my-post-label"]}>Country: </span>Bulgaria
                    </h2>
                    <h4 className={style["my-posts-title"]}>
                        <span className={style["my-post-label"]}>Destination: </span>Dospat Dam
                    </h4>
                    <Link to={`/details/asdasdasdw`}>
                        <button className={style["all-posts-link"]}>Details</button>
                    </Link>
                </div>
            </section>
        </section>

    )
}

export default MyPosts
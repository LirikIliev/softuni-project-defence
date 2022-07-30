import style from './AllPosts.module.css';
import dospat from '../../Resources/img/travel-image-213.jpg';
import metchaPolqna from '../../Resources/img/1517770976569c80450696c40b7c8e1982063892bf.jpg';
import vatcha from '../../Resources/img/maxresdefault.jpg';

function AllPosts() {

    return (
        <section className={style["all-posts-container"]}>
            <header className={style["title"]}>
                <h2 className={style["all-posts-container-title"]}>All Fishing Trips</h2>
            </header>
            <section className={style["posts"]}>
                <div className={style["all-posts-box"]}>
                    <img
                        src={dospat}
                        className={style["all-posts-image"]}
                        alt="Image of the some dam"
                    />
                    <h2 className={style["all-posts-title"]}>
                        <span className="my-post-label">Country: </span>България
                    </h2>
                    <h4 className={style["all-posts-title"]}>
                        <span className={style["my-post-label"]}>Destination: </span>Язовир Доспат
                    </h4>
                    <button className={style["all-posts-link"]}>Details</button>
                </div>
                <div className={style["all-posts-box"]}>
                    <img
                        src={vatcha}
                        className={style["all-posts-image"]}
                        alt="Image of the some dam"
                    />
                    <h2 className={style["all-posts-title"]}>
                        <span className={style["my-post-label"]}>Country: </span>България
                    </h2>
                    <h4 className={style["all-posts-title"]}>
                        <span className={style["my-post-label"]}>Destination: </span>Язовир Вътча
                    </h4>
                    <button className={style["all-posts-link"]}>Details</button>
                </div>
                <div className={style["all-posts-box"]}>
                    <img
                        src={metchaPolqna}
                        className={style["all-posts-image"]}
                        alt="Image of the some dam"
                    />
                    <h2 className={style["all-posts-title"]}>
                        <span className={style["my-post-label"]}>Country: </span>България
                    </h2>
                    <h4 className={style["all-posts-title"]}>
                        <span className={style["my-post-label"]}>Destination: </span>Язовир Меча Поляна
                    </h4>
                    <button className={style["all-posts-link"]}>Details</button>
                </div>
            </section>
        </section>
    );
};

export default AllPosts;
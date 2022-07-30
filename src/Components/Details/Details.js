import style from './Details.module.css';
import detailsImage from '../../Resources/img/1517770976569c80450696c40b7c8e1982063892bf.jpg'

function Details() {

    return (
        <section className={style["details"]}>
            <section className={style["details-container"]}>
                <div className={style["details-image"]}>
                    <img src={detailsImage} alt="vatcha dam" />
                </div>
                <article className={style["details-info"]}>
                    <h1 className={style["detailt-info-title"]}>
                        <span className={style["describe"]}>Destination:</span>
                        Vatcha Dam
                    </h1>
                    <h3 className={style["country"]}>
                        <span className={style["describe"]}>Country:</span>
                        Bulgaria
                    </h3>
                    <p className={style["description"]}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                        perferendis molestias eligendi quisquam molestiae, reprehenderit
                        delectus excepturi, repudiandae doloremque animi ab. Eligendi nam soluta
                        mollitia ipsam unde? Facilis neque blanditiis vitae alias libero ad
                        debitis, mollitia sit fugit dignissimos quasi. Atque doloribus dolores
                        est at facere enim illum impedit recusandae molestiae, vel excepturi
                        dolor nesciunt vero porro dolore dignissimos eius voluptatum fuga sint
                        asperiores eveniet inventore nihil nemo deserunt. Sequi velit nostrum
                        accusamus dolore neque minus magni, laudantium rem temporibus
                        reprehenderit voluptate fuga optio dolores illum autem expedita incidunt
                        itaque quo voluptatum similique dolorem. Impedit distinctio ducimus esse
                        eos, doloremque exercitationem ullam! Quibusdam veniam quo modi!
                        Excepturi, perspiciatis? A blanditiis odio iste. Corrupti neque
                        repellendus ab odit nam dolor sunt reiciendis expedita officia odio
                        exercitationem nisi, earum necessitatibus voluptatibus
                    </p>
                    <h3 className={style["author"]}>
                        <span className={style["describe"]}>Author:</span>
                        Kiril Iliev
                    </h3>
                    <div className={style["likes"]}>
                        Likes:<span id="likes"> </span>
                    </div>
                    <div className={style["buttons"]}>
                        <button id="edit" className={style["edit"]}>
                            Edit - <i className="fa-solid fa-pen" />
                        </button>
                        <button id="delete" className={style["delete"]}>
                            Delete - <i className="fa-solid fa-trash" />
                        </button>
                        <button id="delete" className={style["like"]}>
                            Like - <i className="fa-solid fa-thumbs-up" />
                        </button>
                    </div>
                </article>
            </section>
        </section>

    )
}

export default Details;
import style from './Home.module.css';
import collage from '../../Resources/img/love-fishing.png';
import Dospat from '../../Resources/img/travel-image-213.jpg';
import Vatcha from '../../Resources/img/maxresdefault.jpg';
import MechaPoliana from '../../Resources/img/1517770976569c80450696c40b7c8e1982063892bf.jpg';
function Main() {

    return (
        <section className={style["main-section-box"]}>
            <section className={style["company-info-container"]}>
                <article className={style["company-info-articles"]}>
                    <h3 className={style["second-title"]}>
                        Share some of your best fishing trips with us!
                    </h3>
                    <h1 className={style["main-title"]}>Enjoy nature!</h1>
                </article>
                <img src={collage} className={style["company-image"]} alt="fish collage pictures" />
            </section>
            <section className={style["destination-container"]}>
                <h2 className={style["destination-container-title"]}>
                    The last three destinations
                </h2>
                <div className={style["destination-box"]}>
                    <img src={Dospat} className={style["destination-image"]} alt="Image of the some dam" />
                    <h2 className={style["destination-title"]}>
                        <span className={style["my-post-label"]}>Country:</span>Bulgaria
                    </h2>
                    <h4 className={style["destination-title"]}>
                        <span className={style["my-post-label"]}>Destination:</span>Dospat Dam
                    </h4>
                    <button className={style["destination-link"]}>Details</button>
                </div>
                <div className={style["destination-box"]}>
                    <img src={Vatcha} className={style["destination-image"]} alt="Image of the some dam" />
                    <h2 className={style["destination-title"]}>
                        <span className={style["my-post-label"]}>Country:</span> Bulgaria
                    </h2>
                    <h4 className={style["destination-title"]}>
                        <span className={style["my-post-label"]}>Destination: </span>Vatcha Dam
                    </h4>
                    <button className={style["destination-link"]}>Details</button>
                </div>
                <div className={style["destination-box"]}>
                    <img src={MechaPoliana} className={style["destination-image"]}
                        alt="Image of the some dam" />
                    <h2 className={style["destination-title"]}>
                        <span className={style["my-post-label"]}>Country: </span>Bulgaria
                    </h2>
                    <h4 className={style["destination-title"]}>
                        <span className={style["my-post-label"]}>Destination: </span>Metcha Poliana
                    </h4>
                    <button className={style["destination-link"]}>Details</button>
                </div>
            </section>
        </section>
    )
}

export default Main;
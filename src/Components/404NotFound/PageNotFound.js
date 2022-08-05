import style from './PageNotFound.module.css';
import notFoundPicture from "../../Resources/img/page-not-found.png"

function PageNotFound() {

    return (
        <section className={style["page-not-found-container"]}>
            <header className={style["image"]}>
                <img
                    src={notFoundPicture}
                    className={style["page-not-found-image"]}
                    alt="Image of the some dam"
                />
            </header>
            <section className={style["not-fount-info"]}>
                <h2 className={style["not-found-title-one"]}>404 oops!!!</h2>
                <h2 className={style["not-found-title-one"]}>
                    We couldn't find the page you searched for!
                </h2>
                <h3 className={style["not-found-title-two"]}>Sorry, but we have </h3>
                <button className={style["not-found-button"]}>go to home page</button>
            </section>
        </section>
    );
};

export default PageNotFound;
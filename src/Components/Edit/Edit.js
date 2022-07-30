import style from './Edit.module.css';

function Edit() {

    return (
        <section className={style["edit"]}>
            <h1 className={style["edit-title"]}>Edit your Story!!!</h1>
            <form className={style["edit-form"]}>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="author" className={`${style["edit-label"]} ${style["required"]}`}>
                        Author:
                    </label>
                    <input type="text" name="author" id="author" />
                </div>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="country" className={`${style["edit-label"]} ${style["required"]}`}>
                        Country:
                    </label>
                    <input type="text" name="country" id="country" />
                </div>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="destination" className={`${style["edit-label"]} ${style["required"]}`}>
                        Destination name:
                    </label>
                    <input type="text" name="destination" id="destination" />
                </div>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="imageUrl" className={`${style["edit-label"]} ${style["required"]}`}>
                        Image Url:
                    </label>
                    <input type="url" name="imageUrl" id="imageUrl" />
                </div>
                <div className={style["edit-form-box"]}>
                    <label htmlFor="description" className={`${style["edit-label"]} ${style["required"]}`}>
                        Description:
                    </label>
                    <textarea
                        name="description"
                        id="description"
                        cols={30}
                        rows={3}
                        defaultValue={""}
                    />
                </div>
                <div className={`${style["edit-form-box"]} ${style["submit"]}`}>
                    <input
                        type="submit"
                        defaultValue="Registration"
                        className={style["submit-button"]}
                    />
                </div>
            </form>
        </section>
    )
};

export default Edit;
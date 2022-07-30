import style from "./Create.module.css";
function Create() {

    return (
        <section className={style["create"]}>
            <h1 className={style["create-title"]}>Share your adventure!!!</h1>
            <form className={style["create-form"]}>
                <div className={style["create-form-box"]}>
                    <label htmlFor="author" className={`${style["create-label"]} ${style["required"]}`}>
                        Author:
                    </label>
                    <input type="text" name="author" id="author" />
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="country" className={`${style["create-label"]} ${style["required"]}`}>
                        Country:
                    </label>
                    <input type="text" name="country" id="country" />
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="destination" className={`${style["create-label"]} ${style["required"]}`}>
                        Destination name:
                    </label>
                    <input type="text" name="destination" id="destination" />
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="imageUrl" className={`${style["create-label"]} ${style["required"]}`}>
                        Image Url:
                    </label>
                    <input type="url" name="imageUrl" id="imageUrl" />
                </div>
                <div className={style["create-form-box"]}>
                    <label htmlFor="description" className={`${style["create-label"]} ${style["required"]}`}>
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
                <div className={`${style["create-form-box"]} ${style["submit"]}`}>
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

export default Create;
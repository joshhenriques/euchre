import styles from "./styles.module.css";
import Button from "../../components/Button"

const Play = () => {
    return(
        <>
        
        <div className= {styles.img_container}>
            <img src={process.env.PUBLIC_URL + "/images/euchre.png"}alt="titleImage" className={styles.titleImage}/>
        </div>
        <div className={styles.btn_row}>
            <div className= {styles.btn_container}>
                <Button name="Play with Friends" type = "friends"/>
            </div>
            <div className= {styles.btn_container}>
                <Button name="Play with Strangers" type = "stranger"/>
            </div>
        </div>
        
        </>
    )
};

export default Play;
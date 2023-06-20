import styles from "./styles.module.css";
import Button from "../../components/Button"

const Home = () => {
    return(
        <>
        
        <div className= {styles.img_container}>
            <img
                src={process.env.PUBLIC_URL + "/images/euchre.png"} alt="titleImage" className={styles.titleImage}
            />
        </div>
        <div className={styles.btn_row}>
            <div className= {styles.btn_container}>
                <Button name="Play as Guest" type = "guest"/>
            </div>
            <div className= {styles.btn_container}>
                <Button name="Login" type = "login"/>
            </div>
            <div className= {styles.btn_container}>
                <Button name="Register" type = "register"/>
            </div>
        </div>
        
        </>
    )
};

export default Home;
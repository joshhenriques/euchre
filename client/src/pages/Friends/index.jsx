import styles from "./styles.module.css";
import Button from "../../components/Button"

const Friends = () => {
    return(
        <>
        
        <div className= {styles.img_container}>
            <img
                src={process.env.PUBLIC_URL + "/images/euchre.png"} alt="titleImage" className={styles.titleImage}
            />
        </div>
        <div className={styles.btn_row}>
            <div className= {styles.btn_container}>
                <Button name="Create Lobby" type = "friends"/>
            </div>
            <div className= {styles.btn_container}>
                <Button name="Join Lobby" type = "joinLobby"/>
            </div>
        </div>
        
        </>
    )
};

export default Friends;
import styles from "./styles.module.css";
import Button from "../../components/Button"
import titleImage from "../../images/euchre.png"

const Friends = () => {
    return(
        <>
        
        <div className= {styles.img_container}>
            <img
                src={titleImage } alt="titleImage" className={styles.titleImage}
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
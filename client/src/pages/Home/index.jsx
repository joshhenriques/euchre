import styles from "./styles.module.css";
import Button from "../../components/Button"

const Home = () => {
    return(
        <>
        <div className= {styles.btn_container}>
            <Button name="Play with Friends" />
        </div>
        <div className= {styles.btn_container}>
            <Button name="Join Lobby" />
        </div>
        </>
    )
};

export default Home;
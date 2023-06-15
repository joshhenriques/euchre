import styles from "./styles.module.css";
import Button from "../../components/Button"

const Login = () => {
    return(
        <>
        <div className={styles.container}>
            <div className={styles.loginContainer}>
                <div className={styles.login}>
                    <input 
                        placeholder = "Email" 
                        type="text" 
                        id="user" 
                        name="user">
                    </input>
                </div>
                <div className={styles.password}>
                    <input placeholder = "Password" type="text" id="pwd" name="pwd"></input>
                </div>
                <div className={styles.btn_container}>
                    <Button name="Login" type="confirmLogin" />
                </div>
                
            </div>
        </div>
        
        </>
    )
};

export default Login;
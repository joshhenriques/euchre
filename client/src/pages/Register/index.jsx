import styles from "./styles.module.css";
import Button from "../../components/Button"

const Register= () => {
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
                    <input 
                        placeholder = "Password" 
                        type="text" 
                        id="pwd" 
                        name="pwd">
                    </input>
                </div>
                <div className={styles.confirm_password}>
                    <input 
                        placeholder = "Retype Password" 
                        type="text" 
                        id="pwd" 
                        name="pwd">
                    </input>
                </div>
                <div className={styles.btn_container}>
                    <Button name="Register" type="confirmRegister" />
                </div>
                
            </div>
        </div>
        
        </>
    )
};

export default Register;
import styles from "./styles.module.css"
import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";


const Button = ({name,type}) => {
    
    const {socket, navigate} = useContext(SocketContext);

    const handleChange = (type) => {
        
        //console.log(type)

        if(type === "guest"){
            navigate("/play");
        } else if(type === "login"){
            navigate("/login");
        } else if(type === "register"){ //When u click register from home
            navigate("/register");
        } else if(type === "confirmRegister"){ //When u register an account
            navigate("/login");
        } else if(type === "confirmLogin"){
            navigate("/play");
        }
        
        socket.emit("room:create", { type }, (err, roomId) => {
            navigate(`/room/${roomId}`);
        })
    }

    return(
        <button className={styles.button} onClick={() => handleChange(type)}>
            {name}
            
        </button>
    )
}

export default Button;

import styles from "./styles.module.css"
import { useContext } from "react";
import { SocketContext } from "../../context/SocketContext";


const Button = ({name,type}) => {

    function onEnter(e) {
        e.target.style.width = '275px';
        e.target.style.height = '88px';        
    }

    function onLeave(e) {
        e.target.style.width = '250px';
        e.target.style.height = '80px';
        
    }

    const {socket, navigate} = useContext(SocketContext);

    const handleChange = (type) => {
        socket.emit("room:create", { type }, (err, roomId) => {
            navigate(`/room/${roomId}`);
        })
    }

    return(
        <button className={styles.btn} onMouseOver={onEnter} onMouseLeave={onLeave} onClick={() => handleChange(type)}>
            {name}
            
        </button>
    )
}

export default Button;

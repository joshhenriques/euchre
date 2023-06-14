import styles from "./styles.module.css"


const Button = ({name}) => {

    function onEnter(e) {
        e.target.style.width = '275px';
        e.target.style.height = '88px';        
    }

    function onLeave(e) {
        e.target.style.width = '250px';
        e.target.style.height = '80px';
        
    }

    return(
        <button className={styles.btn} onMouseOver={onEnter} onMouseLeave={onLeave}>
            {name}
            
        </button>
    )
}

export default Button;

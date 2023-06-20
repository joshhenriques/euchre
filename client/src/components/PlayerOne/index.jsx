import styles from "./styles.module.css"
const imagePath = "../../images"


const PlayerOne = ({cards}) => {
    cards = cards.split(",");

    if(cards.length === 5){

        let angles = [-20,-10,0,10,20]
        let xshifts = [170,80,0,-80,-170]
        let yshifts = [90,20,0,20,90]

        return(
            <div className= {styles.container}>
                <div className= {styles.cards}>
                    <img className= {styles.cardImg} 
                    style = {{transform: `rotate(${angles[0]}deg) translate(${xshifts[0]}px , ${yshifts[0]}px)`}}
                    src = {process.env.PUBLIC_URL + '/images/' + cards[0] + '.png'} 
                    alt= {cards[0]}
                    />
                    <img className= {styles.cardImg} 
                    style = {{transform: `rotate(${angles[1]}deg) translate(${xshifts[1]}px , ${yshifts[1]}px)`}} 
                    src = {process.env.PUBLIC_URL + '/images/' + cards[1] + '.png'} 
                    alt= {cards[1]}
                    />
                    <img className= {styles.cardImg} 
                    style = {{transform: `rotate(${angles[2]}deg) translate(${xshifts[2]}px , ${yshifts[2]}px)`}} 
                    src = {process.env.PUBLIC_URL + '/images/' + cards[2] + '.png'} 
                    alt= {cards[2]}
                    />
                    <img className= {styles.cardImg} 
                    style = {{transform: `rotate(${angles[3]}deg) translate(${xshifts[3]}px , ${yshifts[3]}px)`}} 
                    src = {process.env.PUBLIC_URL + '/images/' + cards[3] + '.png'} 
                    alt= {cards[3]}
                    />
                    <img className= {styles.cardImg} 
                    style = {{transform: `rotate(${angles[4]}deg) translate(${xshifts[4]}px , ${yshifts[4]}px)`}} 
                    src = {process.env.PUBLIC_URL + '/images/' + cards[4] + '.png'} 
                    alt= {cards[4]}
                    />
                </div>
                
            </div>
        )
    }

}

export default PlayerOne;

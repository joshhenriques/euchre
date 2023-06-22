import styles from "./styles.module.css";
import Button from "../../components/Button"
import React, { useState } from "react";
import shuffleDeck from"../../gameFunctions/shuffleDeck"
import PlayerOne from "../../components/PlayerOne";

const Room = ({deck}) => {
    var playerOneCards = "";
    var playerTwoCards = "";
    var playerThreeCards = "";

    const [trumpCard, setTrumpCard] = useState(deck[20])
    const [topCard, setTopCard] = useState('cardBack')

    var topVisibility = (topCard == 'cardBack') ? 'hidden' : 'visible';

    playerOneCards = String(deck.slice(0,5));
    playerTwoCards = String(deck.slice(5,10));
    playerThreeCards = String(deck.slice(10,15));
    playerThreeCards = String(deck.slice(15,20));

    

    return(

        <>
        <div className={styles.main}>
            
            <div className={styles.p3Container}>
                <p>p3</p>
            </div>

            <div className={styles.middleRowContainer}>
                <div className={styles.p2Container}>
                    <p>p2</p>
                </div>
                <div className={styles.deckContainer}> 
                    <img className={styles.topCard} 
                        src = {process.env.PUBLIC_URL + '/images/' + topCard + '.png'} 
                        alt= {topCard}
                        style={{visibility: `${topVisibility}`}}/>  
                    <img className ={styles.trumpCard}
                        src = {process.env.PUBLIC_URL + '/images/' + trumpCard + '.png'} 
                        alt= {trumpCard}/>    
                </div>
                <div className={styles.p4Container}>
                    <p>p4</p>
                </div> 
            </div>
            <div className={styles.bottomRowContainer}>
                <div className={styles.scoreContainer}>
                    <p>Score</p>
                </div>
                <div className={styles.p1Container}>
                    <PlayerOne cards = {playerOneCards}/>
                </div>
                <div className={styles.scoreContainer}>
                    <p>Controls</p>
                </div>
            </div>
            

            
            
        </div>
        </>
    )
};

export default Room;
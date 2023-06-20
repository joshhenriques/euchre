import styles from "./styles.module.css";
import Button from "../../components/Button"
import React, { useState } from "react";
import shuffleDeck from"../../gameFunctions/shuffleDeck"
import PlayerOne from "../../components/PlayerOne";

const Room = () => {
    var playerOneCards = "";
    var playerTwoCards = "";
    var playerThreeCards = "";

    var deck = ['9c', '9d', '9h', '9s',
            '10c', '10d', '10h', '10s',
            'jc', 'jd', 'jh', 'js',
            'qc', 'qd', 'qh', 'qs',
            'kc', 'kd', 'kh', 'ks',
            'ac', 'ad', 'ah', 'as',],

    deck = shuffleDeck(deck),

    playerOneCards = String(deck.slice(0,5));
    playerTwoCards = String(deck.slice(5,10));
    playerThreeCards = String(deck.slice(10,15));
    var trumpCard = deck[15];

    return(

        <>
        <div className={styles.main}>
            <PlayerOne cards = {playerOneCards}/>
        </div>
        </>
    )
};

export default Room;
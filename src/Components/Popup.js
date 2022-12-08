import React, { useEffect } from 'react'

const Popup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;

    //get current game status
    let status = 'win';
    selectedWord.split('').forEach(letter => {
        if(!correctLetters.includes(letter)){
            status = '';
        }
    });

    if(wrongLetters.length === 6) status = 'lose'

    //check status for win/lose popup
    if(status === 'win') {
        finalMessage = "Congrats! You have won! 😃";
        playable = false;
    } else if (status === 'lose') {
        finalMessage = 'You lost, try again! 😕';
        finalMessageRevealWord = `... the word was: ${selectedWord}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable));


    return (
        <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
            <div className="popup">
                <h2>{finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button onClick={playAgain}>Play Again</button>
            </div>
        </div>
    )
}

export default Popup



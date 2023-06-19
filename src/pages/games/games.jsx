import React from 'react';
import Board from './tictactoe/tictactoe';

const games =() =>{
    return (
        <div className="entireGames">

            < div className="gamesHeading">
            <h1>
                Games:
            </h1>
            </div>
            <br></br>
            <br></br>
            <div className="tttGame">
                <h3>TicTacToe game:</h3>
                <div id='refresh'><strong>(Refresh to reset)</strong></div>
                <br></br>
                <Board></Board>
            </div>




        </div>
    );
}

export default games;
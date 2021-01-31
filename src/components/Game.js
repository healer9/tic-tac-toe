import React, { useState } from 'react'
import Board from './Board'
import calculateWinner from '../Helper'

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const [count, setCount] = useState(0)

    const winner = calculateWinner(board)

    const handleClick = (i) => {
        const getBoard = [...board]
        if (winner || getBoard[i]) return

        getBoard[i] = xIsNext ? 'X' : 'O'
        setBoard(getBoard)
        setXIsNext(!xIsNext)
        setCount(count + 1)
    }

    const handlePlay = () => {
        setCount(0)
        setBoard(Array(9).fill(null))
    }

    return (
        <>
            <Board squares={board} onClick={handleClick} />
            <div style={{
                textAlign: 'center',
                marginTop: '2%'
            }}>
                <p>{(count === 9) ? `Match Draw !!!` : winner ? `Winner is : ${winner}` : `Next Move : ${xIsNext ? 'X' : '0'}`}</p>
                <button onClick={handlePlay}>
                    Play Again</button>
            </div>
        </>
    )
}

export default Game
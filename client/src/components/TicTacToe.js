import { useState } from 'react'
import { Square }  from './tic-tac-toe/Square'
import { TURNS }  from './tic-tac-toe/constants'
import { checkWinnerFrom, checkEndGame } from './tic-tac-toe/board'
import { WinnerModal } from './tic-tac-toe/WinnerModal'
import { saveGameToStorage, resetGameStorage } from './tic-tac-toe/localStorage'
import {useNavigate} from 'react-router-dom';
import '../styles/tictactoe.css'
import confetti from 'canvas-confetti'


function TicTacToe () {

  const navigate = useNavigate();

  //Miramos si existe board en el localStorage y sino creamos uno nuevo vacío
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    if (boardFromStorage) return JSON.parse(boardFromStorage)
    return Array(9).fill(null)
  })

  //Miramos si existe turno en el localStorage y sino asignamos el turno a X
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })

  // null es que no hay ganador, false es que hay un empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    resetGameStorage()
  }

  function updateBoard (index) {
    // Si la casilla está marcada no hacemos nada
    if (board[index] || winner) return

    // Actualizamos el tablero con la casilla nueva
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // Cambiamos el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    // Guardamos turno y tablero en el localStorage
    saveGameToStorage({
      board: newBoard,
      turn: newTurn
    })

    // Revisamos si existe ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <div id='boarddiv'>
      <main className='board'>
        <h1>Tic tac toe</h1>
        <button onClick={resetGame}>Restart</button>
        <section className='game'>
          {
          board.map((square, index) => {
              return (
              <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
              >
                  {square}
              </Square>
              )
          })
          }
        </section>

        <section className='turn'>
          <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
          </Square>
          <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
          </Square>
        </section>
        <button onClick={() => navigate('/main')}>Exit</button>

        <WinnerModal resetGame={resetGame} winner={winner} />

      </main>
    </div>
  )
}
  
  export default TicTacToe;
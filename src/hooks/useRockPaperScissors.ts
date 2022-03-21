import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getComputerMove } from '../utils/getComputerMove'
import { rockPaperScissorsCheck } from '../utils/rockPaperScissorsCheck'
import {
  setCompPlay,
  userWins,
  compWins,
  draw,
  clearMove,
  setUserPlay,
  setVisible,
  playNewGame,
  toggleHelper,
} from '../store/slices/game.reducer'
import getPlayerMoveIcon from '../utils/imageDictionary'
import { GameMoves, GameResults } from '../lib/constants'

const useRockPaperScissors = () => {
  const dispatch = useAppDispatch()
  const { compPlay, userPlay } = useAppSelector((state) => state.game)

  const onSelectRock = () => dispatch(playNewGame(GameMoves.ROCK))
  const onSelectPaper = () => dispatch(playNewGame(GameMoves.PAPER))
  const onSelectScissors = () => dispatch(playNewGame(GameMoves.SCISSORS))

  const moveOptions = [
    {
      onSwipe: onSelectRock,
      source: getPlayerMoveIcon(GameMoves.ROCK),
      move: GameMoves.ROCK,
    },
    {
      onSwipe: onSelectPaper,
      source: getPlayerMoveIcon(GameMoves.PAPER),
      move: GameMoves.PAPER,
    },
    {
      onSwipe: onSelectScissors,
      source: getPlayerMoveIcon(GameMoves.SCISSORS),
      move: GameMoves.SCISSORS,
    },
  ]

  const onChallenge = async () => {
    await dispatch(toggleHelper(false))

    if (userPlay !== GameMoves.EMPTY && compPlay !== GameMoves.EMPTY) {
      const tempUser = userPlay
      await dispatch(clearMove())
      await dispatch(setUserPlay(tempUser))
    }

    const computerMove = getComputerMove()
    dispatch(setCompPlay(computerMove))

    const result = rockPaperScissorsCheck(userPlay, computerMove)

    dispatch(setVisible(true))

    if (result === GameResults.PLAYER_1_WIN) dispatch(userWins())
    else if (result === GameResults.PLAYER_2_WIN) dispatch(compWins())
    else dispatch(draw())
  }

  return { onChallenge, moveOptions }
}

export default useRockPaperScissors

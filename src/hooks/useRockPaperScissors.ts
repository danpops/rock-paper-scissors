import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getComputerMove } from '../utils/computerMove'
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
} from '../store/slices/game.reducer'
import getPlayerMoveIcon from '../utils/imageDictionary'

const useRockPaperScissors = () => {
  const dispatch = useAppDispatch()
  const { compPlay, userPlay } = useAppSelector((state) => state.game)

  const onSelectRock = () => dispatch(playNewGame('R'))
  const onSelectPaper = () => dispatch(playNewGame('P'))
  const onSelectScissors = () => dispatch(playNewGame('S'))

  const moveOptions = [
    { onSwipe: onSelectRock, source: getPlayerMoveIcon('R'), move: 'R' },
    { onSwipe: onSelectPaper, source: getPlayerMoveIcon('P'), move: 'P' },
    { onSwipe: onSelectScissors, source: getPlayerMoveIcon('S'), move: 'S' },
  ]

  const onChallenge = async () => {
    if (userPlay !== '?' && compPlay !== '?') {
      const tempUser = userPlay
      await dispatch(clearMove())
      await dispatch(setUserPlay(tempUser))
    }

    const computerMove = String(getComputerMove())
    dispatch(setCompPlay(computerMove))

    const result = rockPaperScissorsCheck(userPlay, computerMove)

    dispatch(setVisible(true))

    if (result === 'P1') dispatch(userWins())
    else if (result === 'P2') dispatch(compWins())
    else dispatch(draw())
  }

  return { onChallenge, moveOptions }
}

export default useRockPaperScissors

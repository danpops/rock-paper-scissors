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
} from '../store/slices/game.reducer'

const useRockPaperScissors = () => {
  const dispatch = useAppDispatch()
  const { compPlay, userPlay } = useAppSelector((state) => state.game)

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

  return { onChallenge }
}

export default useRockPaperScissors

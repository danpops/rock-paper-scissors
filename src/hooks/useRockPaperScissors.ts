import { Alert } from 'react-native'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getComputerMove } from '../utils/computerMove'
import { rockPaperScissorsCheck } from '../utils/rockPaperScissorsCheck'
import {
  showReset,
  setCompPlay,
  userWins,
  compWins,
  draw,
} from '../store/slices/game.reducer'

const useRockPaperScissors = () => {
  const dispatch = useAppDispatch()
  const { userPlay } = useAppSelector((state) => state.game)

  const onChallenge = () => {
    if (userPlay === '?') {
      Alert.alert('Please select a move.')
      return
    }

    dispatch(showReset())

    const computerMove = String(getComputerMove())
    dispatch(setCompPlay(computerMove))

    const result = rockPaperScissorsCheck(userPlay, computerMove)

    if (result === 'P1') dispatch(userWins())
    else if (result === 'P2') dispatch(compWins())
    else dispatch(draw())
  }

  return { onChallenge }
}

export default useRockPaperScissors

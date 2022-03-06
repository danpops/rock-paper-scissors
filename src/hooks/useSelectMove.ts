import { useAppDispatch } from '../store/hooks'
import { playNewGame } from '../store/slices/game.reducer'
import getPlayerMoveIcon from '../utils/imageDictionary'

const useSelectMove = () => {
  const dispatch = useAppDispatch()

  const onSelectRock = () => dispatch(playNewGame('R'))
  const onSelectPaper = () => dispatch(playNewGame('P'))
  const onSelectScissors = () => dispatch(playNewGame('S'))

  const moveOptions = [
    { onPress: onSelectRock, source: getPlayerMoveIcon('R'), move: 'R' },
    { onPress: onSelectPaper, source: getPlayerMoveIcon('P'), move: 'P' },
    { onPress: onSelectScissors, source: getPlayerMoveIcon('S'), move: 'S' },
  ]

  return { moveOptions }
}

export default useSelectMove

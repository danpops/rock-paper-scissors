import React from 'react'
import { Button } from 'react-native'
import useDesign from '../../../hooks/useDesign'
import { AppTitles } from '../../../lib/titles'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { clearMove, toggleHelper } from '../../../store/slices/game.reducer'

export const HeaderRight = () => {
  const dispatch = useAppDispatch()
  const { helper, moveVisible } = useAppSelector((state) => state.game)
  const { color, t } = useDesign()

  const closeTitle = t(AppTitles.CLOSE_BUTTON)
  const helpTitle = t(AppTitles.HELP_BUTTON)

  const onPress = () =>
    moveVisible ? dispatch(clearMove()) : dispatch(toggleHelper(!helper))

  return (
    <Button
      onPress={onPress}
      title={moveVisible ? closeTitle : helpTitle}
      color={color}
    />
  )
}

import React from 'react'

const useEasterTitle = (titleStr: string) => {
  const [isTitleCaps, setTitleCaps] = React.useState(false)

  const toggleCaps = () => setTitleCaps(!isTitleCaps)

  const currentTitle = isTitleCaps ? titleStr.toUpperCase() : titleStr

  return {
    isTitleCaps,
    toggleCaps,
    title: currentTitle,
  }
}

export default useEasterTitle

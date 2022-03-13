import { renderHook, act } from '@testing-library/react-hooks'
import useEasterTitle from '../useEasterTitle'

const MOCK_TITLE = 'the title.'

describe('useEasterTitle hook', () => {
  it('should return title', () => {
    const { result } = renderHook(() => useEasterTitle(MOCK_TITLE))
    expect(result.current.title).toBe(MOCK_TITLE)
  })

  it('should return false for isTitleCaps', () => {
    const { result } = renderHook(() => useEasterTitle(MOCK_TITLE))
    expect(result.current.isTitleCaps).toBeFalsy()
  })

  it('should make title capital', () => {
    const { result } = renderHook(() => useEasterTitle(MOCK_TITLE))
    act(() => result.current.toggleCaps())
    const newTitle = result.current.title
    expect(result.current.isTitleCaps).toBeTruthy()
    expect(newTitle).toBe('THE TITLE.')
  })
  it('should make title caps then revert back to lower', () => {
    const { result } = renderHook(() => useEasterTitle(MOCK_TITLE))

    const expectedResult = 'THE TITLE.'
    act(() => result.current.toggleCaps())

    expect(result.current.isTitleCaps).toBeTruthy()
    expect(result.current.title).toBe(expectedResult)

    act(() => result.current.toggleCaps())

    expect(result.current.title).toBe(MOCK_TITLE)
  })
})

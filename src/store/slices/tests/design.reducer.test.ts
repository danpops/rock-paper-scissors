import { colors } from '../../../lib/colors'
import designSlice, {
  setDefault,
  setRed,
  setOrange,
  setYellow,
  setGreen,
  setBlue,
  setPurple,
  DesignState,
  INITIAL_DESIGN_STATE,
} from '../design.reducer'

describe('Design Slice', () => {
  describe('setDefault', () => {
    it('should set default color', () => {
      const currentState: DesignState = {
        backgroundColor: colors.red,
        fontColor: colors.blue,
        button: {
          color: colors.red,
          background: colors.orange,
        },
      }
      const action = setDefault()

      const actualResult = designSlice(currentState, action)

      expect(actualResult).toEqual(INITIAL_DESIGN_STATE)
    })
  })
  describe('setRed', () => {
    it('should set colors red', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.red,
        fontColor: colors.white,
        button: {
          color: colors.red,
          background: colors.white,
        },
      }
      const action = setRed()

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action)

      expect(actualResult).toEqual(expectedResult)
    })
  })
  describe('setOrange', () => {
    it('should set colors orange', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.orange,
        fontColor: colors.white,
        button: {
          color: colors.orange,
          background: colors.white,
        },
      }
      const action = setOrange()

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action)

      expect(actualResult).toEqual(expectedResult)
    })
  })
  describe('setYellow', () => {
    it('should set colors yellow', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.yellow,
        fontColor: colors.black,
        button: {
          color: colors.yellow,
          background: colors.black,
        },
      }
      const action = setYellow()

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action)

      expect(actualResult).toEqual(expectedResult)
    })
  })
  describe('setGreen', () => {
    it('should set colors green', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.green,
        fontColor: colors.white,
        button: {
          color: colors.green,
          background: colors.white,
        },
      }
      const action = setGreen()

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action)

      expect(actualResult).toEqual(expectedResult)
    })
  })
  describe('setBlue', () => {
    it('should set colors blue', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.blue,
        fontColor: colors.black,
        button: {
          color: colors.blue,
          background: colors.black,
        },
      }
      const action = setBlue()

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action)

      expect(actualResult).toEqual(expectedResult)
    })
  })
  describe('setPurple', () => {
    it('should set colors purple', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.purple,
        fontColor: colors.white,
        button: {
          color: colors.purple,
          background: colors.white,
        },
      }
      const action = setPurple()

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action)

      expect(actualResult).toEqual(expectedResult)
    })
  })
})

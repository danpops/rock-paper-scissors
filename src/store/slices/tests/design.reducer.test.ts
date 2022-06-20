import {colors} from '../../../lib/colors';
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
  toggleCaps,
} from '../design.reducer';

describe('Design Slice', () => {
  describe('setDefault', () => {
    it('should set default color', () => {
      const currentState: DesignState = {
        backgroundColor: colors.red,
        color: colors.blue,
        capsActive: false,
        glowColor: colors.white,
      };
      const action = setDefault();

      const actualResult = designSlice(currentState, action);

      expect(actualResult).toEqual(INITIAL_DESIGN_STATE);
    });
  });
  describe('setRed', () => {
    it('should set colors red', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.red,
        color: colors.white,
        capsActive: false,
        glowColor: colors.white,
      };
      const action = setRed();

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action);

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('setOrange', () => {
    it('should set colors orange', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.orange,
        color: colors.black,
        capsActive: false,
        glowColor: colors.black,
      };
      const action = setOrange();

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action);

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('setYellow', () => {
    it('should set colors yellow', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.yellow,
        color: colors.black,
        capsActive: false,
        glowColor: colors.black,
      };
      const action = setYellow();

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action);

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('setGreen', () => {
    it('should set colors green', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.green,
        color: colors.white,
        capsActive: false,
        glowColor: colors.black,
      };
      const action = setGreen();

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action);

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('setBlue', () => {
    it('should set colors blue', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.blue,
        color: colors.black,
        capsActive: false,
        glowColor: colors.black,
      };
      const action = setBlue();

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action);

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('setPurple', () => {
    it('should set colors purple', () => {
      const expectedResult: DesignState = {
        backgroundColor: colors.purple,
        color: colors.white,
        capsActive: false,
        glowColor: colors.white,
      };
      const action = setPurple();

      const actualResult = designSlice(INITIAL_DESIGN_STATE, action);

      expect(actualResult).toEqual(expectedResult);
    });
  });
  describe('toggleCaps', () => {
    it('should toggle caps true', () => {
      const action = toggleCaps();
      const actualResult = designSlice(INITIAL_DESIGN_STATE, action);
      expect(actualResult.capsActive).toBeTruthy();
    });
    it('should toggle caps false', () => {
      const action = toggleCaps();
      const initialResult = designSlice(INITIAL_DESIGN_STATE, action);
      expect(initialResult.capsActive).toBeTruthy();
      const newResult = designSlice(initialResult, action);
      expect(newResult.capsActive).toBeFalsy();
    });
  });
});

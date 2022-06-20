import {getStyle, textStyles} from '../styles';

describe('getStyle function', () => {
  it('should return basic text style', () => {
    const expectedResult = textStyles.basic;
    const actualResult = getStyle(0);
    expect(expectedResult).toEqual(actualResult);
  });

  it('should return h1 text style', () => {
    const expectedResult = textStyles.h1;
    const actualResult = getStyle(1);
    expect(expectedResult).toEqual(actualResult);
  });

  it('should return h2 text style', () => {
    const expectedResult = textStyles.h2;
    const actualResult = getStyle(2);
    expect(expectedResult).toEqual(actualResult);
  });

  it('should return h3 text style', () => {
    const expectedResult = textStyles.h3;
    const actualResult = getStyle(3);
    expect(expectedResult).toEqual(actualResult);
  });

  it('should return h5 text style', () => {
    const expectedResult = textStyles.h5;
    const actualResult = getStyle(5);
    expect(expectedResult).toEqual(actualResult);
  });

  it('should return h6 text style', () => {
    const expectedResult = textStyles.h6;
    const actualResult = getStyle(6);
    expect(expectedResult).toEqual(actualResult);
  });

  it('should return small text style', () => {
    const expectedResult = textStyles.small;
    const actualResult = getStyle(7);
    expect(expectedResult).toEqual(actualResult);
  });

  it('should return default text style', () => {
    const expectedResult = textStyles.basic;
    const actualResult = getStyle();
    expect(expectedResult).toEqual(actualResult);
  });
});

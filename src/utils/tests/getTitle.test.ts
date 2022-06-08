import getTitle from '../getTitle';

describe('getTitle', () => {
  let capsActive = false;
  const MOCK_TITLE = 'mock';

  it('should return title', () => {
    const expectedResult = 'mock';
    const actualResult = getTitle(MOCK_TITLE, capsActive);
    expect(expectedResult).toBe(actualResult);
  });

  it('should return title caps', () => {
    capsActive = true;
    const expectedResult = 'MOCK';
    const actualResult = getTitle(MOCK_TITLE, capsActive);
    expect(expectedResult).toBe(actualResult);
  });
});

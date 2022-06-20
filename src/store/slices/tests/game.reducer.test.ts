import {GameMoves} from '../../../lib/constants';
import {AppTitles} from '../../../lib/titles';
import gameSlice, {
  setCompPlay,
  resetGame,
  userWins,
  compWins,
  draw,
  playNewGame,
  GameState,
  INITIAL_GAME_STATE,
  setUserPlay,
  setUsername,
  toggleHelper,
} from '../game.reducer';

describe('Game Slice', () => {
  describe('setCompPlay', () => {
    it('should update computer play', () => {
      const computerPlay = GameMoves.ROCK;
      const action = setCompPlay(computerPlay);
      const expectedResult: GameState = {
        userPlay: GameMoves.EMPTY,
        compPlay: GameMoves.ROCK,
        username: AppTitles.USER_DEFAULT_NAME,
        score: {
          user: 0,
          comp: 0,
        },
        result: '',
        moveVisible: false,
        resultBg: {
          user: 1,
          comp: 1,
        },
        round: 1,
        helper: false,
      };
      const actualResult = gameSlice(INITIAL_GAME_STATE, action);
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('setUserPlay', () => {
    it('should update user play', () => {
      const userPlay = GameMoves.PAPER;
      const action = setUserPlay(userPlay);
      const expectedResult: GameState = {
        userPlay: GameMoves.PAPER,
        compPlay: GameMoves.EMPTY,
        username: AppTitles.USER_DEFAULT_NAME,
        score: {
          user: 0,
          comp: 0,
        },
        result: '',
        moveVisible: false,
        resultBg: {
          user: 1,
          comp: 1,
        },
        round: 1,
        helper: false,
      };
      const actualResult = gameSlice(INITIAL_GAME_STATE, action);
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('resetGame', () => {
    it('should reset game', () => {
      const currentState: GameState = {
        userPlay: GameMoves.ROCK,
        compPlay: GameMoves.SCISSORS,
        username: AppTitles.USER_DEFAULT_NAME,
        score: {
          user: 1,
          comp: 5,
        },
        result: '',
        moveVisible: false,
        resultBg: {
          user: 1,
          comp: 2,
        },
        round: 5,
        helper: false,
      };
      const action = resetGame();
      const actualResult = gameSlice(currentState, action);
      expect(actualResult).toEqual(INITIAL_GAME_STATE);
    });
  });

  describe('userWins', () => {
    it('should set user as round winner', () => {
      const currentState: GameState = {
        userPlay: GameMoves.ROCK,
        compPlay: GameMoves.SCISSORS,
        username: AppTitles.USER_DEFAULT_NAME,
        score: {
          user: 2,
          comp: 4,
        },
        result: AppTitles.RESULT_WIN,
        moveVisible: true,
        resultBg: {
          user: 0,
          comp: 2,
        },
        round: 3,
        helper: false,
      };

      const action = userWins();
      const expectedResult = {
        ...currentState,

        score: {user: 3, comp: 4},
        round: 4,
      };
      const actualResult = gameSlice(currentState, action);
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('compWins', () => {
    it('should set computer as round winner', () => {
      const currentState: GameState = {
        userPlay: GameMoves.PAPER,
        compPlay: GameMoves.SCISSORS,
        username: AppTitles.USER_DEFAULT_NAME,
        score: {
          user: 3,
          comp: 4,
        },
        result: AppTitles.RESULT_LOSE,
        moveVisible: true,
        resultBg: {
          user: 2,
          comp: 0,
        },
        round: 5,
        helper: false,
      };

      const action = compWins();
      const expectedResult = {
        ...currentState,
        score: {user: 3, comp: 5},
        round: 6,
      };
      const actualResult = gameSlice(currentState, action);
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('draw', () => {
    it('should set round as draw', () => {
      const currentState: GameState = {
        userPlay: GameMoves.ROCK,
        compPlay: GameMoves.ROCK,
        username: AppTitles.USER_DEFAULT_NAME,
        score: {
          user: 2,
          comp: 2,
        },
        result: AppTitles.RESULT_DRAW,
        moveVisible: false,
        resultBg: {
          user: 1,
          comp: 1,
        },
        round: 2,
        helper: false,
      };

      const action = draw();
      const expectedResult = {
        ...currentState,
        score: {user: 2, comp: 2},
        round: 3,
      };
      const actualResult = gameSlice(currentState, action);
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('playNewGame', () => {
    it('should set new game', () => {
      const currentState: GameState = {
        userPlay: GameMoves.PAPER,
        compPlay: GameMoves.SCISSORS,
        username: AppTitles.USER_DEFAULT_NAME,
        score: {
          user: 2,
          comp: 4,
        },
        result: '',
        moveVisible: false,
        resultBg: {
          user: 1,
          comp: 1,
        },
        round: 3,
        helper: false,
      };
      const userPlay = GameMoves.PAPER;
      const action = playNewGame(userPlay);
      const expectedResult = {
        ...currentState,
        userPlay,
        compPlay: GameMoves.EMPTY,
      };
      const actualResult = gameSlice(currentState, action);
      expect(actualResult).toEqual(expectedResult);
    });
  });

  describe('setUsername', () => {
    it('should update username', () => {
      const testUsername = 'testing';
      const action = setUsername(testUsername);
      const actualResult = gameSlice(INITIAL_GAME_STATE, action);
      const expectedResult: GameState = {
        userPlay: GameMoves.EMPTY,
        compPlay: GameMoves.EMPTY,
        username: testUsername,
        score: {
          user: 0,
          comp: 0,
        },
        result: '',
        moveVisible: false,
        resultBg: {
          user: 1,
          comp: 1,
        },
        round: 1,
        helper: false,
      };
      expect(expectedResult).toStrictEqual(actualResult);
    });
  });
  describe('toggleHelper', () => {
    it('should set helper true', () => {
      const action = toggleHelper(true);
      const actualResult = gameSlice(INITIAL_GAME_STATE, action);
      const expectedResult: GameState = {
        userPlay: GameMoves.EMPTY,
        compPlay: GameMoves.EMPTY,
        username: 'you',
        score: {
          user: 0,
          comp: 0,
        },
        result: '',
        moveVisible: false,
        resultBg: {
          user: 1,
          comp: 1,
        },
        round: 1,
        helper: true,
      };
      expect(expectedResult).toStrictEqual(actualResult);
    });
    it('should set helper false', () => {
      const action = toggleHelper(false);
      const actualResult = gameSlice(INITIAL_GAME_STATE, action);
      const expectedResult: GameState = {
        userPlay: GameMoves.EMPTY,
        compPlay: GameMoves.EMPTY,
        username: 'you',
        score: {
          user: 0,
          comp: 0,
        },
        result: '',
        moveVisible: false,
        resultBg: {
          user: 1,
          comp: 1,
        },
        round: 1,
        helper: false,
      };
      expect(expectedResult).toStrictEqual(actualResult);
    });
  });
});

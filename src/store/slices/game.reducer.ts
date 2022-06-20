import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {DefaultGameValues, GameMoves} from '../../lib/constants';
import {AppTitles} from '../../lib/titles';

type PlayerType = {
  user: number;
  comp: number;
};

export type GameState = {
  userPlay: GameMoves;
  compPlay: string;
  result: string;
  score: PlayerType;
  resultBg: PlayerType;
  round: number;
  moveVisible: boolean;
  username: string;
  helper: boolean;
};

export const INITIAL_GAME_STATE: GameState = {
  userPlay: GameMoves.EMPTY,
  compPlay: GameMoves.EMPTY,
  result: '',
  username: AppTitles.DEFAULT_USER_TITLE,
  resultBg: {
    user: DefaultGameValues.WHITE_BG,
    comp: DefaultGameValues.WHITE_BG,
  },
  round: DefaultGameValues.ROUND,
  score: {
    user: DefaultGameValues.SCORE,
    comp: DefaultGameValues.SCORE,
  },
  moveVisible: false,
  helper: false,
};

const gameSlice = createSlice({
  name: 'game',
  initialState: INITIAL_GAME_STATE,
  reducers: {
    toggleHelper: (state, action: PayloadAction<boolean>) => {
      state.helper = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setCompPlay: (state, action: PayloadAction<string>) => {
      state.compPlay = action.payload;
    },
    setUserPlay: (state, action: PayloadAction<GameMoves>) => {
      state.userPlay = action.payload;
    },
    setVisible: (state, action: PayloadAction<boolean>) => {
      state.moveVisible = action.payload;
    },
    clearMove: state => {
      state.compPlay = GameMoves.EMPTY;
      state.userPlay = GameMoves.EMPTY;
      state.resultBg = {
        user: DefaultGameValues.WHITE_BG,
        comp: DefaultGameValues.WHITE_BG,
      };
      state.moveVisible = false;
    },
    resetGame: state => {
      state.userPlay = GameMoves.EMPTY;
      state.compPlay = GameMoves.EMPTY;
      state.score = {
        user: DefaultGameValues.SCORE,
        comp: DefaultGameValues.SCORE,
      };
      state.resultBg = {
        user: DefaultGameValues.WHITE_BG,
        comp: DefaultGameValues.WHITE_BG,
      };
      state.round = DefaultGameValues.ROUND;
      state.moveVisible = false;
    },
    userWins: state => {
      state.round += DefaultGameValues.ROUND;
      state.score.user += DefaultGameValues.ROUND;
      state.result = AppTitles.RESULT_WIN;
      state.resultBg = {
        user: DefaultGameValues.GREEN_BG,
        comp: DefaultGameValues.RED_BG,
      };
    },
    compWins: state => {
      state.round += DefaultGameValues.ROUND;
      state.score.comp += DefaultGameValues.ROUND;
      state.result = AppTitles.RESULT_LOSE;
      state.resultBg = {
        user: DefaultGameValues.RED_BG,
        comp: DefaultGameValues.GREEN_BG,
      };
    },
    draw: state => {
      state.round += DefaultGameValues.ROUND;
      state.result = AppTitles.RESULT_DRAW;
      state.resultBg = {
        user: DefaultGameValues.WHITE_BG,
        comp: DefaultGameValues.WHITE_BG,
      };
    },
    playNewGame: (state, action: PayloadAction<GameMoves>) => {
      state.compPlay = GameMoves.EMPTY;
      state.resultBg = {
        user: DefaultGameValues.WHITE_BG,
        comp: DefaultGameValues.WHITE_BG,
      };
      state.userPlay = action.payload;
      state.moveVisible = false;
    },
  },
});

export const {
  userWins,
  compWins,
  clearMove,
  toggleHelper,
  setUsername,
  draw,
  setCompPlay,
  playNewGame,
  setUserPlay,
  setVisible,
  resetGame,
} = gameSlice.actions;
export default gameSlice.reducer;

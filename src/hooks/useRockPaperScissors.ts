import React from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {getComputerMove} from '../utils/getComputerMove';
import {rockPaperScissorsCheck} from '../utils/rockPaperScissorsCheck';
import {
  setCompPlay,
  userWins,
  compWins,
  draw,
  clearMove,
  setUserPlay,
  setVisible,
  playNewGame,
  toggleHelper,
} from '../store/slices/game.reducer';
import getPlayerMoveIcon from '../utils/imageDictionary';
import {GameMoves, GameResults} from '../lib/constants';

const FOUR_SECOND_TIMEOUT = 4000;

const useRockPaperScissors = () => {
  const dispatch = useAppDispatch();
  const {compPlay, userPlay, moveVisible} = useAppSelector(state => state.game);

  const OnSwipe = {
    ROCK: () => dispatch(playNewGame(GameMoves.ROCK)),
    PAPER: () => dispatch(playNewGame(GameMoves.PAPER)),
    SCISSORS: () => dispatch(playNewGame(GameMoves.SCISSORS)),
  };

  const moveOptions = [
    {
      onSwipe: OnSwipe.ROCK,
      source: getPlayerMoveIcon(GameMoves.ROCK),
      move: GameMoves.ROCK,
    },
    {
      onSwipe: OnSwipe.PAPER,
      source: getPlayerMoveIcon(GameMoves.PAPER),
      move: GameMoves.PAPER,
    },
    {
      onSwipe: OnSwipe.SCISSORS,
      source: getPlayerMoveIcon(GameMoves.SCISSORS),
      move: GameMoves.SCISSORS,
    },
  ];

  const onChallenge = async () => {
    await dispatch(toggleHelper(false));

    if (userPlay !== GameMoves.EMPTY && compPlay !== GameMoves.EMPTY) {
      const tempUser = userPlay;
      await dispatch(clearMove());
      await dispatch(setUserPlay(tempUser));
    }

    const computerMove = getComputerMove();
    dispatch(setCompPlay(computerMove));

    const result = rockPaperScissorsCheck(userPlay, computerMove);

    dispatch(setVisible(true));

    switch (result) {
      case GameResults.PLAYER_1_WIN:
        dispatch(userWins());
        return;
      case GameResults.PLAYER_2_WIN:
        dispatch(compWins());
        return;
      default:
        dispatch(draw());
        return;
    }
  };

  React.useEffect(() => {
    if (moveVisible) {
      const timeout = setTimeout(() => {
        dispatch(clearMove());
      }, FOUR_SECOND_TIMEOUT);

      return () => clearTimeout(timeout);
    }
  }, [dispatch, moveVisible]);

  return {onChallenge, moveOptions};
};

export default useRockPaperScissors;

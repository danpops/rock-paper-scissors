const getPlayerMoveIcon = (play: string) => {
  return {
    R: require('../assets/rock.png'),
    P: require('../assets/paper.png'),
    S: require('../assets/scissors.png'),
    '?': null,
  }[play || '?'];
};

export default getPlayerMoveIcon;

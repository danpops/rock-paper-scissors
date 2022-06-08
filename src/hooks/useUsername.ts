import React from 'react';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {setUsername} from '../store/slices/game.reducer';

const useUsername = () => {
  const {username} = useAppSelector(state => state.game);
  const dispatch = useAppDispatch();
  const [user, setUser] = React.useState(username);

  const onChangeUser = (text: string) => setUser(text);
  const onSubmitUser = () => dispatch(setUsername(user.toLowerCase()));

  return {
    onChangeUser,
    onSubmitUser,
    user,
  };
};

export default useUsername;

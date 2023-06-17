import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {UserContext} from './contexts/UserContext';
import TabNavigation from './navigation/TabNavigation';
import UserAuthStack from './navigation/UserAuthStack';

const Auth = () => {
  const {isUserLoggedIn} = useContext(UserContext);

  return <>{isUserLoggedIn ? <TabNavigation /> : <UserAuthStack />}</>;
};

export default Auth;

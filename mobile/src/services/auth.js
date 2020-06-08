import { AsyncStorage } from 'react-native';

export const TOKEN_KEY = '@meetapp:token';
export const USER_KEY = '@meetapp:user';

export const isAuthenticated = async () =>
  (await AsyncStorage.getItem(TOKEN_KEY)) !== null;

export const getToken = async () => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
};

export const getUserData = async () => {
  const data = await AsyncStorage.getItem(USER_KEY);
  return JSON.parse(data);
};

export const login = async (token, user) => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const logout = async () => {
  await AsyncStorage.removeItem(TOKEN_KEY);
  await AsyncStorage.removeItem(USER_KEY);
};

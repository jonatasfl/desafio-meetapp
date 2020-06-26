import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';

export default reducers => {
  const persistedReducer = persistReducer({
    key: 'meetapp',
    storage: AsyncStorage,
    whitelist: ['user']
  }, reducers);

  return persistedReducer;
}

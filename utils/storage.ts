import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'alreadyLaunched';

export const getFirstLaunchFlag = async () => {
  const value = await AsyncStorage.getItem(KEY);
  return value;
};

export const setFirstLaunchFlag = async () => {
  await AsyncStorage.setItem(KEY, 'true');
};
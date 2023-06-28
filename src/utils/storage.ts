import {MMKVLoader} from 'react-native-mmkv-storage';

export const storage = new MMKVLoader().initialize();

export const getitemStore = (key: string) => storage.getItem(key);

export const setArrayStore = (key: string, item: any[]) =>
  storage.setArray(key, item);

export const setStringStore = (key: string, item: string) =>
  storage.setString(key, item);

export const getStringStore = (key: string) => storage.getArray(key);
export const clearStore = () => storage.clearStore();

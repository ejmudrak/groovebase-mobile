import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '@src/types';

const USER_LOCAL_STORAGE_KEY = 'user';

export async function saveLocalStorageUser(user: User): Promise<void> {
  await AsyncStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
}

export async function getLocalStorageUser(): Promise<User | undefined> {
  const data = await AsyncStorage.getItem(USER_LOCAL_STORAGE_KEY);
  return data ? JSON.parse(data) : null;
}

export async function removeLocalStorageUser(): Promise<void> {
  await AsyncStorage.removeItem(USER_LOCAL_STORAGE_KEY);
}

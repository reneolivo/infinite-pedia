import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeData(key: string, storageValue: StorageValue): Promise<void> {
  const value = JSON.stringify(storageValue);

  await AsyncStorage.setItem(key, value);
}

export async function getData<ReturnValue extends StorageValue = StorageValue>(key: string): Promise<ReturnValue | null> {
  const value = await AsyncStorage.getItem(key);

  if (value === null) {
    return null;
  }

  return JSON.parse(value);
}

export async function deleteData(key: string): Promise<void> {
  await AsyncStorage.removeItem(key);
}

export type StorageValue = string | number | boolean | object | StorageValue[];

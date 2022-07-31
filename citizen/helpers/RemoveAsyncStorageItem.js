import AsyncStorage from "@react-native-async-storage/async-storage";

export const RemoveAsyncStorageItem = async (key) => {
  return await AsyncStorage.removeItem(key);
}

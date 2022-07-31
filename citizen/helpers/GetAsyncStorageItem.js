import AsyncStorage from "@react-native-async-storage/async-storage";

export const GetAsyncStorageItem = async (key) => {
  return await AsyncStorage.getItem(key);
}

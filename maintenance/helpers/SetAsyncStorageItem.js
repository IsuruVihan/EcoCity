import AsyncStorage from "@react-native-async-storage/async-storage";

export const SetAsyncStorageItem = async (key, value) => {
  await AsyncStorage.setItem(key, value);
}

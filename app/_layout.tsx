import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

export default function Layout() {
return(
  <SafeAreaProvider>
    <Provider store={store}>
      <View style={{ flex: 1 }}>
      <Stack/>
      </View>
    </Provider>
  </SafeAreaProvider>
);
}
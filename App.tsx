import Hexavista from "./app/components/hexavista";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider } from "react-redux";
import { store } from "./app/redux/configureStore";

export default function App() {
  return (
    <SafeAreaProvider>      
      <Provider store={store}>
      <View style={styles.container}>
        <Hexavista />
        <StatusBar style="auto" />
      </View>
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

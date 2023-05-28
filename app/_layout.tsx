import { Stack, useRouter } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { View, Button } from "react-native";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";

export default function Layout() {
  const router = useRouter();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Stack
            screenOptions={{
              headerRight: () => (
                <Button
                  onPress={() => {router.push("/settings")}}
                  title="⚙"
                />
              ),
            }}
          />
        </View>
      </Provider>
    </SafeAreaProvider>
  );
}

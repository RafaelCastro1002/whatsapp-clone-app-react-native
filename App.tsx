import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { TabController, View, Text } from "react-native-ui-lib";
import TabNavigator from "./src/components/TabNavigator";
import Header from "./src/components/Header";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar translucent={false} backgroundColor="#075E54" />
          <Header />
          <TabNavigator />
        </GestureHandlerRootView>
      </View>
    </SafeAreaView>
  );
}

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { enableScreens } from "react-native-screens";

import MealsNavigator from "./navigation/MealsNavigator";

enableScreens();

const fetchFonts = () => {
  return Font.loadAsync({
    bellfort: require("./assets/fonts/bellfort.otf"),
    billy: require("./assets/fonts/billy.ttf"),
    script: require("./assets/fonts/script.ttf"),
  });
};

export default function App() {
  const [FontLoaded, setFontLoaded] = useState(false);

  if (!FontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(Err) => Alert.alert(Err)}
      />
    );
  }

  return (
    <>
      <MealsNavigator />
      <StatusBar backgroundColor="#0004" style='light' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

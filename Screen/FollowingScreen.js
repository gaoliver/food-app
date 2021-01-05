import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FollowingScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Following</Text>
    </View>
  );
};

export default FollowingScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

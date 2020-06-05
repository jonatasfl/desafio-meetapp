import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Routes from "./routes";

export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

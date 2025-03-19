import React from "react";
import { Stack } from "expo-router";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import "../src/i18n/i18n.config";
import { ThemeProvider } from "../src/theme/ThemeContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <Slot />
    </ThemeProvider>
  );
}

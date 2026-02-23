import { useColorScheme } from "@/hooks/use-color-scheme";

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import AppBar from "@/components/AppBar";
import { createContext, useState } from "react";
import { View } from "react-native";
import { PaperProvider } from "react-native-paper";

interface DrawerContextType {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}

export const DrawerContext = createContext<DrawerContextType | undefined>(
  undefined,
);

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <PaperProvider>
      <DrawerContext.Provider value={{ drawerOpen, setDrawerOpen }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <AppBar />
          <View style={{ flex: 1 }}>
            <ThemeProvider
              value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
            >
              <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                  name="modal"
                  options={{ presentation: "modal", title: "Modal" }}
                />
              </Stack>
              <StatusBar style="auto" />
            </ThemeProvider>
          </View>
        </View>
      </DrawerContext.Provider>
    </PaperProvider>
  );
}

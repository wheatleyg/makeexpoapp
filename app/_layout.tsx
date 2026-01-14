// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export default function RootLayout() {
  return (
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="about" options={{ title: "About Me" }} />
          </Stack>
        </Layout>
      </ApplicationProvider>
  );
}

// app/_layout.tsx
import React from "react";
import { Stack } from "expo-router";
import {ApplicationProvider, Layout, BottomNavigation, BottomNavigationTab} from "@ui-kitten/components";
import * as eva from "@eva-design/eva";


export default function RootLayout() {
    const [tabIndex, setTabIndex] = React.useState(0);
  return (
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Layout style={{ flex: 1 }}>
          <Stack>
            <Stack.Screen name="index" options={{ title: "Home" }} />
            <Stack.Screen name="about" options={{ title: "About Me" }} />
          </Stack>
            <BottomNavigation
                appearance = 'noIndicator'
                selectedIndex={tabIndex}
                onSelect={index => setTabIndex(index)}>
                <BottomNavigationTab title='USERS' />
                <BottomNavigationTab title='ORDERS' />
                <BottomNavigationTab title='TRANSACTIONS' />

            </BottomNavigation>
        </Layout>
      </ApplicationProvider>
  );
}

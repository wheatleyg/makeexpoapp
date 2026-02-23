import { DrawerContext } from "@/app/_layout";
import * as React from "react";
import { useContext } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { IconButton, Drawer as PaperDrawer } from "react-native-paper";
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

const AppBar = () => {
  const context = useContext(DrawerContext);
  const { width } = useWindowDimensions();

  if (!context) return null;

  const { drawerOpen, setDrawerOpen } = context;
  const isSmallScreen = width < 768;
  const shouldShowDrawer = isSmallScreen ? drawerOpen : true;

  const drawerWidth = useSharedValue(shouldShowDrawer ? 250 : 0);
  const toggleButtonTranslate = useSharedValue(shouldShowDrawer ? 250 : 0);

  React.useEffect(() => {
    drawerWidth.value = withTiming(shouldShowDrawer ? 250 : 0, {
      duration: 300,
    });
    toggleButtonTranslate.value = withTiming(shouldShowDrawer ? 250 : 0, {
      duration: 300,
    });
  }, [shouldShowDrawer, drawerWidth, toggleButtonTranslate]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: drawerWidth.value,
  }));

  const toggleButtonAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: toggleButtonTranslate.value }],
  }));

  return (
    <>
      {isSmallScreen && (
        <Animated.View style={[styles.toggleButton, toggleButtonAnimatedStyle]}>
          <IconButton
            icon="close"
            size={24}
            onPress={() => setDrawerOpen(!drawerOpen)}
          />
        </Animated.View>
      )}
      <Animated.View style={[styles.parent, animatedStyle]}>
        <View style={styles.drawerContent}>
          <PaperDrawer.Section title="MyTitle">
            <PaperDrawer.CollapsedItem
              focusedIcon="inbox"
              unfocusedIcon="inbox-outline"
              label="inbox"
            />
            <PaperDrawer.CollapsedItem
              focusedIcon="inbox"
              unfocusedIcon="inbox-outline"
              label="hello"
            />
            <PaperDrawer.Item icon="star" label="Item 1" />
          </PaperDrawer.Section>
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  parent: {
    height: "100%",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
  drawerContent: {
    width: 250,
    height: "100%",
  },
  toggleButton: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
  },
});

export default AppBar;

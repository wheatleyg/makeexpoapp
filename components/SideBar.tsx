import React from "react";
import { Drawer, DrawerItem, IndexPath, Layout, Text } from "@ui-kitten/components";
import { SafeAreaView } from "react-native-safe-area-context";

const SideBarContent = () => {
	const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));

	return (
		<SafeAreaView style={{ flex: 1 }}>
			{/* Header */}
			<Layout
				level="2"
				style={{
					padding: 24,
					paddingTop: 48, // a bit more space at top
					borderBottomWidth: 1,
					borderBottomColor: "#e4e9f2",
				}}
			>
				<Text category="h6">My App</Text>
				<Text category="s1" appearance="hint">
					Welcome back
				</Text>
			</Layout>

			{/* Menu – just visual selection, no navigation */}
			<Drawer
				selectedIndex={selectedIndex}
				onSelect={index => {
					setSelectedIndex(index); // only highlight the tapped item
					// No navigation.navigate() here for now
				}}
			>
				<DrawerItem title="Home" />
				<DrawerItem title="Profile" />
				<DrawerItem title="Dashboard" />
				<DrawerItem title="Messages" />
				<DrawerItem title="Settings" />
				<DrawerItem title="Help" />
				<DrawerItem title="About" />
			</Drawer>

			{/* Footer pushed to bottom */}
			<Layout
				style={{
					padding: 16,
					borderTopWidth: 1,
					borderTopColor: "#e4e9f2",
					marginTop: "auto",
				}}
			>
				<Text appearance="hint" category="c2">
					Version 1.0.0 • Graceson
				</Text>
			</Layout>
		</SafeAreaView>
	);
};

export default SideBarContent;

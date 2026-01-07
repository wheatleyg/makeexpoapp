import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello, Worldaaa</Text>
      <ThemedText type="defaultSemiItalic"> Italic text! </ThemedText>
      <Link href="/about" style={{color: "blue", textDecorationLine: "underline"}}> About </Link>
      
    </View>
  );
}

import { Text, View, ScrollView } from "react-native";
import Card from "../../components/UI/Card";

export default function Request() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ScrollView>
        <Card />
        <Card />
        <Card />
      </ScrollView>
      
    </View>
  );
}

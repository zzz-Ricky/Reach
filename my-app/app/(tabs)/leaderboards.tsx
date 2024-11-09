import { ScrollView, Text, View } from "react-native";
import LBentry from '../../components/leaderboard/LBentry'
import { StyleSheet } from 'react-native';

export default function Leaderboards() {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <Text style={styles.location}>Placeholder location</Text>
      </View>
      <ScrollView>
        <LBentry rank={"1"} name={"Test Name"} score={"9218"} />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
        <LBentry />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  location: {
    fontSize: 30,
    margin: 20,
  },
});
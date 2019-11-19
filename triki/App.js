import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  // testing react hooks with native
  // si vas a usar hooks, recuerda importar useState && useEffects según corresponda
  // const [initState, prevState] = useState(0);

  return (
    <View style={styles.container}>
      <Text>TRIKI</Text>
      

      <View style={styles.board}>

        <View style={styles.line}>
        <Button onPress={() => alert("Peek a boo")} title="Peek"></Button>
        </View>

        <View style={styles.line}>
        <Button onPress={() => alert("Peek a boo")} title="A"></Button>
        </View>

        <View style={styles.line}>
        <Button onPress={() => alert("Peek a boo")} title="Boo"></Button>
        </View>


      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center", 
    
  },
  board: {
    
    borderWidth: 1,
    width: 300,
    height: 300,
    flexDirection: 'row'
  },
  line: {
    flex: 1,
    backgroundColor: "pink",

    borderWidth: 1, 
    
  }
});

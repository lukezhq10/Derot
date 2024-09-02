import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

export default function App() {
  const [timeLimit, setTimeLimit] = useState("");

  const startMonitoring = () => {
    // Call native module to start monitoring Instagram
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instagram Monitor</Text>
      <TextInput
        style={styles.input}
        placeholder="Set time limit in minutes"
        keyboardType="numeric"
        value={timeLimit}
        onChangeText={setTimeLimit}
      />
      <Button title="Start Monitoring" onPress={startMonitoring} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    width: "80%",
    marginBottom: 16,
  },
});

import { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function App() {
  const [count, hitcount] = useState(0)

  return (
    <View style={{ ...styles.container }}>
      <Text>You hit me: {count} time(s)</Text>
      <Button
        title='Hit me'
        onPress={() => hitcount(count + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 400,
    marginTop: 10,
    alignItems: 'center'
  }
});

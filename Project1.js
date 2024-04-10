import { StyleSheet, View, Text } from 'react-native';

export default function App() {

  return (
    <View style={{ ...styles.container }}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    backgroundColor: 'cyan',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

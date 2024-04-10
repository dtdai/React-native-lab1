import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function App() {
  return (
    <View style={{ ...styles.container }}>
      <Button
        title='First Button'
        onPress={() => alert('Hello world')}
      />
      <TouchableOpacity style={{ ...styles.button }} onPress={() => alert('Hello Again')}>
        <Text style={{ ...styles.text }}>
          Second Button
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  button: {
    backgroundColor: 'blue',
    marginTop: 10,
    alignItems: 'center',
    padding: 10
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
})
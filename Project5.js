import { StyleSheet, Text, View } from 'react-native'

export default function App() {
  return (
    <View style={{ ...styles.container }}>
      <Square text="Square 1" />
      <Square text="Square 2" bgcolor='#4dc2c2' />
      <Square text="Square 3" bgcolor='#ff637c' />
    </View>
  )
}

const Square = ({ text, bgcolor = '#7ce0f9' }) => (
  <View style={[styles.box, { backgroundColor: bgcolor }]}>
    <Text>{text}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
import { Text, View, StyleSheet } from 'react-native';
import { addition, multiply } from 'react-native-awesome-module-rn-demo';

const result = multiply(3, 8);
const resultAdd = addition(3, 8);

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.testStyle}>Result: {result}</Text>
      <Text style={styles.testStyle}>Result of Addition: {resultAdd}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  testStyle: {
    fontSize: 18,
    color: '#fff',
    textDecorationLine: 'underline',
    // textDecorationColor: 'red', // Line color
  },
});

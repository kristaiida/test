
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';
import * as Linking from 'expo-linking';

const prefix = Linking.createURL('/');

export default function App() {

  const linking = {
    prefixes: [prefix],
  };

  return (
    <SafeAreaView>

    
    <View >
      <TodoScreen linking={linking} fallback={<Text>Loading...</Text>} />
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

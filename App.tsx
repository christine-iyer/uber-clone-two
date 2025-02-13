import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx" />
      <StatusBar style="auto" />
      <View className="mx-3 flex flex-1 flex-col items-start justify-center">
        <Text className="text-xl font-bold text-red-500">Hello from NativeWind!</Text>
        <Text className="mt-2 text-gray-600">
          This is a test to check if Tailwind (NativeWind) is working correctly.
        </Text>
      </View>
    </>
  );
}

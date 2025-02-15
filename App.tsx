import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Animated, Easing } from 'react-native';
import { Container } from 'components/Container';
import pic from './assets/theIcon.png';
import './global.css';
import { useEffect,useRef } from 'react';

export default function App() {
  const spinValue = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <>
      <StatusBar style="auto" />
      <View className="mx-3 flex flex-1 flex-col items-start justify-center">
        <Text className="text-xl font-bold text-yellow-500">Hello from NativeWind!</Text>
        <Text className="mt-2 text-green-600 p-1">
          This is a test to check if Tailwind (NativeWind) is working correctly.
        </Text>
        <Container>
          <View className="w-16 h-16">
           <Animated.Image 
           source={pic}
           className={"w-full h-full"}
           style={{transform: [{rotate:spin}]}}
           />
      </View>
       </Container>
       </View>
    </>
  );
}

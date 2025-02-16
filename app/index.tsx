import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, Animated, Easing } from 'react-native';
import { Container } from 'app/components/Container';
// import {pic} from '../app/assets/images/splash'
import './global.css';
import { useEffect,useRef } from 'react';

export default function Home() {
  
  return (
    <>
      <StatusBar style="auto" />
      <View className="mx-2 flex flex-1 flex-col items-start justify-center">
        <Text className="text-xl font-bold text-blue-500">Hello from NativeWind!</Text>
        <Text className="mt-2 text-green-600 p-1">
          This is a test to check if Tailwind (NativeWind) is working correctly.
        </Text>
        <Container>
          <View className="w-16 h-16">
           {/* <Image 
           source={pic}
           className={"w-full h-full"}

           /> */}
      </View>
       </Container>
       </View>
    </>
  );
}

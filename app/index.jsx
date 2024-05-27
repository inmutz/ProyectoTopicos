import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustonButton from "../components/CustonButton";
import {Redirect, router} from 'expo-router'

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle = {{height: "100%"}}>
      <View className="w-full justify-center items-center h-[95vh] px-4 ">
        <Image
          source={images.fondo}
          className="w-[800px] h-[900px]"
          resizeMode="contain"
          style={{ position: "absolute" }}
        />

        <View>
          <Text
            className="text-5xl text-white font-bold text-center"
            style={{
              position: "absolute",
              top: "60%",
              right: "-30%",
              transform: [{ translateY: 90 }],
            }}
          >
            Trainmate
          </Text>
        </View>
        <CustonButton
          title="Continue wiht Email"
          handlPress={() => router.push("/sign-in")}
          containerStyle="w-full mt-7"
        />
      </View>
      </ScrollView>
      
      <StatusBar backgroundColor="#001432" 
      style="light" />
    </SafeAreaView>
  );
}

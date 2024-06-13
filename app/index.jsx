import { Text, View, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustonButton from "../components/CustonButton";
import { Redirect, router } from "expo-router";
import { useGlobalContext } from "../context/GlobalProvider";

export default function App() {
  const {isLoading, isLoggedIn} = useGlobalContext(); 

  if(!isLoading && isLoading ) return <Redirect href={"/home"}/>
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center h-[95vh] px-4 ">
          <Image
            source={images.fondo}
            className="w-[800px] h-[900px]"
            resizeMode="contain"
            style={{ position: "absolute" }}
          />

          <View>
            <Text
              className="text-5xl text-white font-bold text-center mb-4"
              style={{
                top: "450%",
                transform: [{ translateY: 90 }],
              }}
            >
              Trainmate
            </Text>
          </View>
          <CustonButton
            title="Continue with Email"
            handlPress={() => router.push("/sign-in")}
            containerStyle="w-full mt-96"            
          />
           <CustonButton
            title="Register"
            handlPress={() => router.push("/sign-up")}
            containerStyle="w-full mt-8"            
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

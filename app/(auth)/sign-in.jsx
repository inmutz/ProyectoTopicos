import { View, Text, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { Link, Stack, router, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "../../components/FormField";
import CustomButton from "../../components/CustonButton";
import { StatusBar } from "expo-status-bar";
import { signIn } from "../../lib/appwrite";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in all the filds");
    }
    setIsSubmitting(true);
    try {
      signIn(form.email, form.password);
      // set it global state...
      router.replace("/app/tabs/home.jsx");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4">
          <View className="justify-center items-center">
            <Text className="text-4xl  text-primary text-semibold mt-10 font-psemibold">
              Trainmate
            </Text>
          </View>

          <Text className="text-2xl text-primary text-semibold mt-10 font-psemibold">
            Log In to App
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign In"
            handlPress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-800 font-pregular">
              Don't have account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-primary"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;

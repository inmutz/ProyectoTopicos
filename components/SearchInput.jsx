import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { useState } from "react";
import { icons } from "../constants";

const SearchInput = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View className="w-full border-2 border-search h-16 px-4 bg-primary rounded-2xl focus:border-searchFocus items-center flex-row  space-x-4">
      <TextInput  
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder="Search for any"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === "Password" && !showPassword}
      />
      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5 " resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

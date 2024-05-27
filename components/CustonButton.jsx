import { TouchableOpacity, Text } from "react-native";
import React from "react";

const CustonButton = (
  {title,
  handlPress,
  containerStyle,
  textStyles,
  isLoading}
) => {
  return (
    <TouchableOpacity
      onPress={handlPress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[65px] justify-center items-center ${containerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
      style={{
        position: "absolute",
        top: "60%",
        transform: [{ translateY: 90 }],
      }}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustonButton;

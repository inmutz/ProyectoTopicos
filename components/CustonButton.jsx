import { TouchableOpacity, Text } from "react-native";

const CustomButton = (
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
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

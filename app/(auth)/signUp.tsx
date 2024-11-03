import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useState } from "react";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useRouter } from "expo-router";
import PrimaryButton from "@/components/Button";

const AddUser = require("../../assets/images/add-user.png");
const Google = require("../../assets/images/google-1.png");

export default function SignUpScreen() {
  const router = useRouter();

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleTermsPress = () => {
    Linking.openURL("https://www.your-terms-url.com");
  };

  // const handleGoogleSignUp = async () => {
  //   try {
  //     // Initialize Google Sign-In
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log("Google Sign-In successful!", userInfo);
  //     // Handle user info (e.g., send to your backend)
  //   } catch (error) {
  //     console.error("Google Sign-In failed", error);
  //   }
  // };

  const handleSignInPress = () => {
    router.push("/(auth)/signIn");
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-6 font-sans">
      <View className="my-4 flex-row">
        <Image source={AddUser} className="w-12 h-12" />
        <Text className="font-bold text-3xl justify-center self-center p-2">
          Sign Up
        </Text>
      </View>

      <View className="mb-4">
        <Text className="font-semibold text-lg mb-2">Name</Text>
        <View className="flex flex-row items-center border border-gray-300 rounded-xl p-3">
          <FontAwesome name="user" size={20} color="gray" className="m-4" />
          <TextInput
            placeholder="Enter your name"
            className="flex-1 text-xl"
            style={{ paddingVertical: 0, paddingHorizontal: 8 }}
          />
        </View>
      </View>

      <View className="mb-4">
        <Text className="font-semibold text-lg mb-2">Email</Text>
        <View className="flex flex-row items-center border border-gray-300 rounded-xl p-3">
          <FontAwesome name="envelope" size={20} color="gray" className="m-4" />
          <TextInput
            placeholder="Enter your email"
            className="flex-1 text-xl"
            style={{ paddingVertical: 0, paddingHorizontal: 8 }}
          />
        </View>
      </View>

      <View className="mb-4">
        <Text className="font-semibold text-lg mb-2">Password</Text>
        <View className="flex flex-row items-center border border-gray-300 rounded-xl p-3">
          <FontAwesome name="lock" size={20} color="gray" className="m-1" />
          <TextInput
            placeholder="Enter your password"
            secureTextEntry={!isPasswordVisible}
            className="flex-1 text-xl"
            style={{ paddingVertical: 0, paddingHorizontal: 8 }}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} className="m-1">
            <FontAwesome
              name={isPasswordVisible ? "eye-slash" : "eye"}
              size={20}
              color="gray"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View className="flex-row items-center mb-4">
        <TouchableOpacity onPress={handleCheckboxPress} className="mr-2">
          <View
            className={`w-5 h-5 border border-gray-300 rounded ${
              isChecked ? "bg-blue-500" : "bg-white"
            }`}
          >
            {isChecked && <Text className="text-white text-center">✔</Text>}
          </View>
        </TouchableOpacity>
        <Text className="text-lg">
          I agree to{" "}
          <TouchableOpacity onPress={handleTermsPress}>
            <Text className="text-blue-500 underline">Terms & Conditions</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <PrimaryButton title="Sign Up" onPress={handleSignInPress} />

      <View>
        <Text className="text-center text-lg mt-4">
          Already have an account?{" "}
          <TouchableOpacity onPress={handleSignInPress}>
            <Text className="text-blue-500 text-lg">Sign In</Text>
          </TouchableOpacity>
        </Text>
      </View>

      <View className="flex-row items-center my-4">
        <View className="flex-1 border-t border-gray-300 opacity-50" />
        <Text className="mx-2 text-lg text-center">OR</Text>
        <View className="flex-1 border-t border-gray-300 opacity-50" />
      </View>

      {/* Sign Up with Google Button */}
      <TouchableOpacity
        // onPress={handleGoogleSignUp}
        className="w-full flex-row items-center justify-center bg-[#E8EEFF] rounded-xl p-3"
      >
        <Image
          source={Google} // Google logo
          style={{ width: 24, height: 24, marginRight: 10 }}
        />
        <Text className="text-gray-700 text-lg">Sign Up with Google</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="signUp" options={{ headerShown: false }} />
    </Stack>
  );
}

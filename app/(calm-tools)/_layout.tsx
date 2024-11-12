import { Stack } from "expo-router";

export default function CalmToolsLayout() {
  return (
    <Stack>
      <Stack.Screen name="calm-tools" options={{ headerShown: false }} />
    </Stack>
  );
}

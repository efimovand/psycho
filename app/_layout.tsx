import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="home" options={{ title: 'Home' }} />
      <Stack.Screen name="sos_start" options={{ title: 'SOS Start' }} />
    </Stack>
  )
}

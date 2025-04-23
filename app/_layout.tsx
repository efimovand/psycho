import { Tabs } from 'expo-router';
import CustomTabBar from '../components/tab_bar';


export default function AppLayout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="info" />
      <Tabs.Screen name="practice" />
      <Tabs.Screen name="home" />
      <Tabs.Screen name="audio" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

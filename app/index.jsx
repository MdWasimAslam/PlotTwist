import { Redirect } from 'expo-router';

export default function Index() {
  const hasCompletedOnboarding = false; // Replace with your logic
  return hasCompletedOnboarding ? <Redirect href="/home" /> : <Redirect href="/StartScreens/AuthScreens/Onboarding" />;
}
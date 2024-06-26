
import { View, Text } from "react-native";
import { } from 'react'
// import OnBoarding1 from "./src/screens/onboardingscreen1/OnBoardingScreen1";
import LoginScreen from "./src/screens/login/LoginScreen";
import SignUp from "./src/screens/signup/SignUpScreen";
import ForgotPassword from "./src/screens/forgotpassword/ForgotPassword";
import ResetPassword from "./src/screens/resetpassword/ResetPassword";
import Otp from "./src/screens/otp/OtpScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import OnboardingScreen from "./src/screens/onboardingscreen1/OnboardingScreen";
const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoginScreen">
           <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="SignUp" component={SignUp} />
           <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
       
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
       
        <Stack.Screen name="Otp" component={Otp} />
       
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
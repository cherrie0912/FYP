import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from './view_screens/MainScreen';
import SettingScreen from './view_screens/SettingScreen';
import LessonSectionScreen from './view_screens/LessonSectionScreen';
import QuizScreen from './view_screens/QuizScreen';
import AllForumScreen from './view_screens/AllForumScreen';
import ForumScreen from './view_screens/ForumScreen';
import LoginScreen from './view_screens/LoginScreen';
import SignUpTypeScreen from './view_screens/SignUpTypeScreen';
import MemberSignUpScreen from './view_screens/MemberSignUpScreen';
import EmploymentSignUpScreen from './view_screens/EmploymentSignUpScreen';
import CreateForumScreen from './view_screens/CreateForumScreen';
import EditForumScreen from './view_screens/EditForumScreen';
import ChooseChatScreen from './view_screens/ChooseChatScreen';
import ChatScreen from './view_screens/ChatScreen';
import UserScreen from './view_screens/UserScreen';
import JobList from './view_screens/JobList';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={screenOptions}>
          <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Home' }} />
          <Stack.Screen name="SettingScreen" component={SettingScreen} options={{ title: 'Setting' }} />
          <Stack.Screen name="LessonSectionScreen" component={LessonSectionScreen} options={{ title: 'Section' }} />
          <Stack.Screen name="QuizScreen" component={QuizScreen} options={{ title: 'Quiz' }} />
          <Stack.Screen name="AllForumScreen" component={AllForumScreen} options={{ title: 'Forum' }} />
          <Stack.Screen name="SignUpTypeScreen" component={SignUpTypeScreen} options={{ title: 'Sign up type' }} />
          <Stack.Screen name="MemberSignUpScreen" component={MemberSignUpScreen} options={{ title: 'Member Sign up' }} />
          <Stack.Screen name="EmploymentSignUpScreen" component={EmploymentSignUpScreen} options={{ title: 'Employer Sign up' }} />
            <Stack.Screen name="ForumScreen" component={ForumScreen} options={{ title: 'Forum' }} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: 'Login' }} />
            <Stack.Screen name="CreateForumScreen" component={CreateForumScreen} options={{ title: 'Create Post' }} />
            <Stack.Screen name="EditForumScreen" component={EditForumScreen} options={{ title: 'Edit Post' }} />
            <Stack.Screen name="ChooseChatScreen" component={ChooseChatScreen} options={{ title: 'Chat' }} />
            <Stack.Screen name="ChatScreen" component={ChatScreen} options={{ title: 'Message' }} />
            <Stack.Screen name="JobList" component={JobList} options={{ title: 'Job' }} />
            <Stack.Screen name="JobDetail" component={JobDetail} options={{ title: 'Detail' }} />
            <Stack.Screen name="UserScreen" component={UserScreen} options={{ title: 'User Information' }} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    };


export default App;
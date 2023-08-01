import React from 'react';
import { View, ScrollView, SafeAreaView, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { COLORS, icons, images, SIZES } from '../constants';
import { useRouter} from 'expo-router';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components';

const Stack = createStackNavigator();

const HomeScreen = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, padding: SIZES.medium }}>
        <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} handleClick={()=>{
          if(searchTerm){
            router.push(`/search/${searchTerm}`)
          }
        }}/>
        <Popularjobs />
        <Nearbyjobs />
      </View>
    </ScrollView>
  );
};

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />,
          headerRight: () => <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />,
        }}
      >
        <Stack.Screen name="homeScreen"  options={{
            headerTitle: "",
          }}component={HomeScreen} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Home;
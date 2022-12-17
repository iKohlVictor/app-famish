import React from 'react';
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs'
import {Entypo, Feather} from '@expo/vector-icons';
import { Users } from 'phosphor-react-native';
import { FinalizeOrder } from '@screens/FinalizeOrder';
import { TrackOrder } from '@screens/TrackOrder';
import { Menu } from '@screens/Menu';
import { useNavigation } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

export function HomeStack(){
    const navigation = useNavigation();
    return(
        <Tab.Navigator initialRouteName='MENU' screenOptions={{headerShown:false,tabBarStyle:{
            backgroundColor: '#FC5217',
            borderTopColor: 'transparent'
        },
        tabBarActiveTintColor:'#FFF',
        tabBarInactiveBackgroundColor: '#21130d',
        }}>
            <Tab.Screen
            name = "users"
            component={Users}
            options={
                {
                    tabBarIcon:({size,color})=>(
                        <Entypo name = "user" size = {size} color = {color}/>
                    ), 
                    tabBarLabel:"PERFIL"
                }
            }
            />
            <Tab.Screen 
            name = "MENU"
            component={Menu}
            options={
                {
                    tabBarIcon:({size,color})=>(
                        <Entypo name = "shopping-cart" size = {size} color = {color}/>
                    ),
                    tabBarLabel:"MENU"
                }
            }
            />
            <Tab.Screen 
            name = "finalizeOrder"
            component={FinalizeOrder}
            options={
                {
                    tabBarIcon:({size,color})=>(
                        <Entypo name = "shopping-cart" size = {size} color = {color}/>
                    ),
                    tabBarLabel:"CARRINHO"
                }
            }
            />
            <Tab.Screen 
            name = "MEUS PEDIDOS"
            component={TrackOrder}
            options={
                {
                    tabBarIcon:({size,color})=>(
                        <Entypo name = "shopping-cart" size = {size} color = {color}/>
                    )
                }
            }
            />
        </Tab.Navigator>
    );
}
export default HomeStack;
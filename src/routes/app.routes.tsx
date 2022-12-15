import React from 'react';
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs'
import {Entypo, Feather} from '@expo/vector-icons';
import { Menu } from '@screens/Menu';
import { FinalizeOrder } from '@screens/FinalizeOrder';
import { Login } from '@screens/Login';
import { NewProduct } from '@screens/NewProduct';
import { NewUser } from '@screens/NewUser';
import { Request } from '@screens/Request';
import { Users } from '@screens/Users';

const Tab = createBottomTabNavigator();

export function AppRoutes(){
    return(
        <Tab.Navigator initialRouteName='Menu' screenOptions={{headerShown:false,tabBarStyle:{
            backgroundColor: '#FC5217',
            borderTopColor: 'transparent'
        },
        tabBarActiveTintColor:'#FFF',
        tabBarInactiveBackgroundColor: '#21130d',
        tabBarItemStyle:{
            paddingBottom:3,
            paddingTop:3,
        }
        }}>
            <Tab.Screen
            name = "PERFIL"
            component={Users}
            options={
                {
                    tabBarIcon:({size,color})=>(
                        <Entypo name = "user" size = {size} color = {color}/>
                    )
                }
            }
            />
            <Tab.Screen
            name = "MENU"
            component={Menu}
            options={
                {
                    tabBarIcon:({size,color})=>(
                        <Entypo name = "menu" size = {size} color = {color}/>
                    )
                }
            }
            />
            <Tab.Screen
            name = "PEDIDOS"
            component={Users}
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
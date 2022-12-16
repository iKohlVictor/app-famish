import React from 'react';
import { createBottomTabNavigator }from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator }from '@react-navigation/native-stack'
import {Entypo, Feather} from '@expo/vector-icons';
import { Menu } from '@screens/Menu';
import { FinalizeOrder } from '@screens/FinalizeOrder';
import { Login } from '@screens/Login';
import { NewProduct } from '@screens/NewProduct';
import { NewUser } from '@screens/NewUser';
import { Request } from '@screens/Request';
import { Users } from '@screens/Users';

const Tab = createBottomTabNavigator();

export function HomeStack(){
    return(
        <Tab.Navigator initialRouteName='Login' screenOptions={{headerShown:false,tabBarStyle:{
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
                    ), 
                }
            }
            />
            <Tab.Screen 
            name = "CARRINHO"
            component={FinalizeOrder}
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


const {Navigator,Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator initialRouteName='login' screenOptions={{headerShown:false}}>
            <Screen
            name = "menu"
            component={Menu}
            />
            <Screen
            name = "finalizeOrder"
            component={FinalizeOrder}
            />
            <Screen
            name = "login"
            component={Login}
            />
            <Screen
            name = "newProduct"
            component={NewProduct}
            />
            <Screen
            name = "newUser"
            component={NewUser}
            />
            <Screen
            name = "request"
            component={Request}
            />
            <Screen
            name = "users"
            component={Users}
            />
        </Navigator>
    );
}
export default AppRoutes;

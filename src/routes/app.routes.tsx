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
import { TrackOrder } from '@screens/TrackOrder'
import { MyProfile } from '@screens/MyProfile';

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
            <Screen
            name="trackOrder"
            component={TrackOrder}
            />
            <Screen
            name="myProfile"
            component={MyProfile}
            />
        </Navigator>
    );
}
export default AppRoutes;

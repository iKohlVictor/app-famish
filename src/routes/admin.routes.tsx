import { createBottomTabNavigator }from '@react-navigation/bottom-tabs'

import { Menu } from '@screens/Menu';
import { FinalizeOrder } from '@screens/FinalizeOrder';
import { Login } from '@screens/Login';
import { NewProduct } from '@screens/NewProduct';
import { NewUser } from '@screens/NewUser';
import { Request } from '@screens/Request';
import { Users } from '@screens/Users';

const Tab = createBottomTabNavigator();

export function AdminAppRoutes(){
    return(
        <Tab.Navigator initialRouteName='login' screenOptions={{headerShown:false}}>
            <Tab.Screen
            name = "newProduct"
            component={NewProduct}
            />
            <Tab.Screen
            name = "menuAdmin"
            component={Menu}
            />
            <Tab.Screen
            name = "users"
            component={Users}
            />
        </Tab.Navigator>
    );
}
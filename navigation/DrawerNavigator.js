import {createDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator";
import Profile from "../screens/Profile";
import { TabBarIOSItem } from "react-native";
const Drawer  = createDrawerNavigator();
const DrawerNavigator = () => {
    return(
    <Drawer.Navigator>
    <Drawer.Screen name = "TelaInicial" component = {TabNavigator}/>
    <Drawer.Screen name = "Perfil" component = {Profile}/>
    </Drawer.Navigator>
    )
}
export default DrawerNavigator 
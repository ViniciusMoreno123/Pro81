import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Feed from "../screens/Feed"
import CreatPost from "../screens/CreatPost"
import { TabBarIOSItem } from "react-native"
const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
    <Tab.Navigator
    screenOptions={({route})=>({
    tabBarIcon:({focused,color,size}) => {
        let iconName;
        if(route.name ==="Feed"){
        iconName = focused
        ? "book"
        : "book-outline";
        } else if (route.name === "CreatPost") {
        iconName = focused ? "create":"create-outline";
    
        }
        return <Ionicons name={iconName}size = {size} color = {color}/>

    
    }
    })}
    tabBarOptions = {{
    activeTintColor:"tomato",
    inactiveTintColor:"grey"
    }}>
    <Tab.Screen name = "Feed" component = {Feed}/>
    <Tab.Screen name = "CreatPost" component = {CreatPost}/>
    </Tab.Navigator>
    )
}
export default BottomTabNavigator 
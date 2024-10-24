import { useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import Courses from './courses';
import Events from './events';
const TabsLayout = () => {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const routes = [
        { key: 'first', title: "Courses", icon: "home" },
        { key: 'second', title: "Events ", icon: "info-with-circle" },

    ];
    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={SceneMap({
                first: Courses,
                second: Events
            })}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            tabBarPosition="bottom"
            renderTabBar={props => (
                <TabBar
                    {...props}
                    renderIcon={({ route }) => (
                        <Entypo
                            name={route.icon}
                            size={24}
                            color={index === routes.findIndex(r => r.key === route.key) ? 'green' : 'gray'}
                        />
                    )}
                    indicatorStyle={{ backgroundColor: 'green' }}
                    style={{
                        backgroundColor: 'white',
                        borderTopWidth: 1,
                        borderTopColor: '#ccc',
                    }}
                    labelStyle={{ color: 'black', fontSize: 12 }}
                />
            )}
        />
    )

}
export default TabsLayout;
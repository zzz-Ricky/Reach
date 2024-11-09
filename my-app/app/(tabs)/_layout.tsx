import { MaterialIcons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="ask"
                options={{
                    title: 'Ask',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="handshake-o" color={color} />,
                }}
            />
            <Tabs.Screen
                name="request"
                options={{
                    title: 'Request',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="group" color={color} />,
                }}
            />
            <Tabs.Screen
                name="leaderboards"
                options={{
                    title: 'Leaderboards',
                    tabBarIcon: ({ color }) => <MaterialIcons name="leaderboard" size={24} color="black" />,
                }}
            />
            <Tabs.Screen
                name="settings"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />
        </Tabs>
    );
}

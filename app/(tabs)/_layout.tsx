import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index" // This is the home screen
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="ask" // This is the ask screen
        options={{
          title: 'ask',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'question' : 'question'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="request" // This is the request screen
        options={{
          title: 'Requests',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'document-text' : 'document-text-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboards" // This is the community screen
        options={{
          title: 'Leaderboards',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'trophy-outline' : 'trophy-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings" // This is the settings screen
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'settings' : 'settings-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

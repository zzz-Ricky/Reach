/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/` | `/(tabs)/ask` | `/(tabs)/community` | `/(tabs)/request` | `/(tabs)/settings` | `/(tabs)\community` | `/_sitemap` | `/ask` | `/community` | `/request` | `/settings`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}

import "@expo/metro-runtime";

import { ExpoRoot } from "expo-router";
import Head from "expo-router/head";
import { RecoilRoot } from "recoil";

import { renderRootComponent } from "./src/renderRootComponent";

// We add this elsewhere for rendering
const HeadProvider =
  typeof window === "undefined" ? React.Fragment : Head.Provider;

const ctx = require.context(process.env.EXPO_ROUTER_APP_ROOT);

// Must be exported or Fast Refresh won't update the context
export function App() {
  return (
    <HeadProvider>
      <RecoilRoot>
        <ExpoRoot context={ctx} />
      </RecoilRoot>
    </HeadProvider>
  );
}

renderRootComponent(App);

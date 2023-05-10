import { Stack } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { GluestackUIProvider } from "../gluestack-ui-comp";
import { config } from "../gluestack-ui.config";
const queryClient = new QueryClient();
export default function Layout() {
  return (
    <QueryClientProvider client={queryClient}>
      <GluestackUIProvider config={config.theme}>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </GluestackUIProvider>
    </QueryClientProvider>
  );
}

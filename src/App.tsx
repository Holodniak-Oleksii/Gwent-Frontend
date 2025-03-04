import { InitLayout } from "@/layouts/InitLayout";
import { ThemeProvider } from "@/theme";
import NiceModal from "@ebay/nice-modal-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query";
import "./modals/index";
import AppRouter from "./router";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <InitLayout>
        <NiceModal.Provider>
          <AppRouter />
        </NiceModal.Provider>
      </InitLayout>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

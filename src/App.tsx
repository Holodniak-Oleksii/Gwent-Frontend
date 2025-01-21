import { InitLayout } from "@/layouts/InitLayout";
import NiceModal from "@ebay/nice-modal-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query";
import "./modals/index";
import AppRouter from "./router";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <InitLayout>
      <NiceModal.Provider>
        <AppRouter />
      </NiceModal.Provider>
    </InitLayout>
  </QueryClientProvider>
);

export default App;

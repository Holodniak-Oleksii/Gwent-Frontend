import { InitLayout } from "@/layouts/InitLayout";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query";
import AppRouter from "./router";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <InitLayout>
      <AppRouter />
    </InitLayout>
  </QueryClientProvider>
);

export default App;

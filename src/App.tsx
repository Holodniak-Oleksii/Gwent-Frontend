import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./api/query";
import AppRouter from "./router";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AppRouter />
  </QueryClientProvider>
);

export default App;

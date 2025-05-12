import { InitLayout } from "@/layouts/InitLayout";
import { ThemeProvider } from "@/theme";
import NiceModal from "@ebay/nice-modal-react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryClient } from "./api/query";
import "./modals/index";
import AppRouter from "./router";

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <InitLayout>
        <NiceModal.Provider>
          <AppRouter />
        </NiceModal.Provider>
      </InitLayout>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;

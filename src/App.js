import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Body from "./Body";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./modules/errorBoundary";

const queryClient = new QueryClient();
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ErrorBoundary>
          <BrowserRouter>
            <Body />
          </BrowserRouter>
        </ErrorBoundary>
      </QueryClientProvider>
    </>
  );
};

export default App;

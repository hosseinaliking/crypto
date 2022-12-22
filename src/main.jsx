import { createRoot } from "react-dom/client";

//* Components *//
import App from "./App";

//* Router *//
import { BrowserRouter as Router } from "react-router-dom";

//* React Query *//
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

//* Code Out *//
const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Router>
);

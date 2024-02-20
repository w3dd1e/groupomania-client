import Navbar from "../components/Navbar/Navbar";
import {
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet } from "react-router-dom";
import "./app.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className='content'>
          <Outlet />
        </div>
        <Navbar />
      </>
      <ReactQueryDevtools initialISOpen={true} />
    </QueryClientProvider>
  );
}

export default App;

import Stories from "@/modules/stories";
import { QueryClient, QueryClientProvider } from "react-query";
import { IconContext } from "@phosphor-icons/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <IconContext.Provider
          value={{
            size: 24,
            mirrored: false,
          }}
        >
          <main>
            <Stories />
          </main>
        </IconContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;

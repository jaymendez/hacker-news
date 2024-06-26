import Stories from "@/modules/stories";
import { QueryClient, QueryClientProvider } from "react-query";
import { IconContext } from "@phosphor-icons/react";
import { SkeletonTheme } from "react-loading-skeleton";

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
          <SkeletonTheme baseColor="#334155" highlightColor="#444">
            <main>
              <Stories />
            </main>
          </SkeletonTheme>
        </IconContext.Provider>
      </QueryClientProvider>
    </>
  );
}

export default App;

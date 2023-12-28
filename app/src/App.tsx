import { trpc } from "./lib/trpc";

function App() {
  const result = trpc.hello.useQuery({
    text: "New app",
  });

  if (result.error) {
    return <div>Error: {result.error.message}</div>;
  }

  if (result.isLoading) {
    return <div>Loading...</div>;
  }

  return <div>Result: {result.data.greeting}</div>;
}

export default App;

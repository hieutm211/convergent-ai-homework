import { AppQueryClientProvider } from "./initializers/AppQueryClientProvider";
import { AppRouter } from "./initializers/AppRouter";
import { ThemeProvider } from "./initializers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <AppQueryClientProvider>
        <AppRouter />
      </AppQueryClientProvider>
    </ThemeProvider>
  );
}

export default App;

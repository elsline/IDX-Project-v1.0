import { AnimatePresence } from "framer-motion";
import { RouterFile } from "./router/RouterFile";

function App() {
  return (
    <div className="App">
      <AnimatePresence mode="wait">
        <RouterFile />
      </AnimatePresence>
    </div>
  );
}

export default App;

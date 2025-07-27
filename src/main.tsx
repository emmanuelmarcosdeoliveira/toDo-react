import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Intro from "./components/intro.tsx";
import "./index.css";

   
// biome-ignore lint/style/noNonNullAssertion: <necessário>
function Root() {
  const [visible, setVisible] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (visible) {
    return (
      
      <Intro />

    )
  }
  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<Root />);

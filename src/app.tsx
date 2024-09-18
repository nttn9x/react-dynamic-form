import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./app.scss";

import { GsapProvider, ThemeProvider } from "./contexts";

import Layout from "./layout/layout.component";

import { RouterProvider } from "react-router-dom";
import { router } from "./routers";

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <ThemeProvider>
      <GsapProvider>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </GsapProvider>
    </ThemeProvider>
  );
}

export default App;

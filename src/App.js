import Layout from "./components/Layout/Index";
import GlobalStyles from "./styles/GlobalStyles";

import { VideoContextProvider } from "./components/contexts/VideoContext";

function App() {
  return (
    <> 
      <VideoContextProvider>
        <Layout />
      </VideoContextProvider>
      <GlobalStyles />
    </>
  );
}

export default App;

import { HelmetProvider } from "react-helmet-async"
import { RouteLib } from "./route" 

function App() { 

  return (
  <>
  <HelmetProvider>
  <RouteLib />
  </HelmetProvider>
  </>
  )
}

export default App
// rgba(41, 77, 88, 0.5)
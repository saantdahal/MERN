import { BrowserRouter, Router } from "react-router-dom";
import Navbar from "./Navbar";
import MyRoutes from "./routes/MyRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <MyRoutes />
    </BrowserRouter>
  );
}

export default App;

import "../global.css";
import First from "./components/First";

function App() {
  // Here we write javascript code
  return (
    <>
      {/* React Fragment */}
      <h1 style={{ color: "indigo" }}>
        This is my first REACT app with Vite and MERN stack
      </h1>
      <h2 className="firstcss">This is my h2</h2>
      <First />
    </>
  );
}

export default App;

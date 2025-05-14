import "../global.css";
import SubmitButton from "./components/Button";
import Button from "./components/Button";
import LearnForm from "./components/LearnForm";
import NavLink from "./routes/navLink";
import Router from "./routes/Router";

function App() {
  // Here we write javascript code
  return (
    <>
      {/* React Fragment */}

      {/*  <NavLink />
      <Router /> */}
      <LearnForm />
      <SubmitButton />
    </>
  );
}

export default App;

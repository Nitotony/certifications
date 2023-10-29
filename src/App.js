import "./App.css";
import "./footer";
import "./title";
import "./file";
import Footer from "./footer";
import Title from "./title";
import File from "./file";

function App() {
  return (
    <div className="App">
      <Title />
      <div className="kappa">
        <h1 style={{ color: "black", textAlign: "left" }}>
          Do you have certifications?
        </h1>
        <h2 style={{ color: "black", textAlign: "left" }}>
          Adding certifications to your profile is a geat way to show clients
          what you can do.
        </h2>
      </div>

      <File />
      <Footer />
    </div>
  );
}

export default App;

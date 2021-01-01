import "./App.css";
import "./Sidebar.js";
import Sidebar from "./Sidebar.js";
import Feed from "./Feed.js";

function App() {
  return (
    <div className="App">
      <h1>Hello from twitter-clone app!</h1>

      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Widgets */}
    </div>
  );
}

export default App;

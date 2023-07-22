import Celebrity from "./components/celebrity";
import Inspiration from "./components/insipiration";
import WriteInspiration from "./components/write-insipiration";
import GOD from "./components/god";
import SocialMedia from "./components/social-media";
import History from "./components/history";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Music from "./components/music";
import Sports from "./components/sports";
import CommonPeople from "./components/common_people";

function App() {
  return (
    <div>
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Inspiration />}></Route>
            <Route path="/celebrity" element={<Celebrity />}></Route>
            <Route path="/god" element={<GOD />}></Route>
            <Route path="/history" element={<History />}></Route>
            <Route path="/music" element={<Music />}></Route>
            <Route path="/socialMedia" element={<SocialMedia />}></Route>
            <Route path="/sports" element={<Sports />}></Route>
            <Route path="/common_people" element={<CommonPeople/>}></Route>
            <Route
              path="/writeInsipiration"
              element={<WriteInspiration />}
            ></Route>
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;

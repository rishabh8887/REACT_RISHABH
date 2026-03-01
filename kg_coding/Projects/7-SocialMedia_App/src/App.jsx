import "./App.css";
import CreatePost from "./components/Createost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
function App() {
  return (
    <>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Header />
          <CreatePost />
          <PostList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

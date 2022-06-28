import Navbar from './Navbar';
import Home from './Home';
function App() {
  const title = "Welcome to Pie's blog"
  const likes = 69;

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App; // We have this so we can use it in different files

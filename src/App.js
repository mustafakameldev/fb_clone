import './App.css';
import Header from './header';
import Sidebar from './sidebar';
import Feed from './feed';
function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Feed />
      </div>

      {/* widgets */}
    </div>
  );
}

export default App;

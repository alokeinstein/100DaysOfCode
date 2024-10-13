import SidebarExample from './components/Sidebar/Sidebar';
import './App.css';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Table  from './components/Table/Table';
import LineChart from './components/BarChart/LineChart';

function App() {
 
  return (
    <div className="App">
      <SidebarExample />
      <div className="content">
      <Header/>
      <Home/>
      <Table/>
      <LineChart/>
      </div>
    </div>
  )
}

export default App;

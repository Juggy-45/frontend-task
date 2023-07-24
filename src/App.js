import Sidebar from "./Components/sidebar";
import Header from "./Components/header";
import Dashboard from "./Components/dashboard";
import TQM from "./Components/TQM/index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
    <div className="bg-[#F7F7F7]">
      <Header />
    <div  className='flex gap-10'>
      <Sidebar /> 
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/tqm" element={<TQM />}></Route>
    </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;

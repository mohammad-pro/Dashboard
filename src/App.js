import { Route, Routes, useRoutes } from "react-router-dom";
import routes from "./routes";
import TopBar from "./Components/TopBar";
import Sidebar from "./Components/Sidebar";
import WidgetSmLeft from "./Components/WidgetSmLeft";






function App() {

  let router = useRoutes(routes)


  return ( 
    <div className='container mx-auto '>
      <TopBar/>
      <div className="flex mt-3 ">
        <Sidebar/>
        {router}
      </div>

    </div>
  );
}

export default App;

import {Link ,Routes,Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Nav from "./Nav";
import Missing from "./Missing";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import EditPost from "./EditPost";
import { DataProvider } from "./context/DataContext";


function App() {
  return(
    <div className = "App">
      <DataProvider>
          <Header title="Daily Posts"/>
          <Nav />
          <Routes>
              <Route path = "/" element = {<Home/>} />
              <Route path = "post"> 
                  <Route index element = {<NewPost/>} /> 
                  <Route path = "/post:id" element ={<PostPage/>}/>
              </Route>
              <Route path ='/edit/:id' element ={<EditPost/>} />
              <Route path = "about" element ={<About/>}/>
              <Route path = "*" element = {<Missing/>} />
          </Routes>
          <Footer/>
      </DataProvider>
    </div>
  );
}
export default App;

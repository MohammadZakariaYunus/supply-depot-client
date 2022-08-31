import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './Page/Share/Navbar/Navbar';
import Footer from './Page/Share/Footer/Footer';
import Home from './Page/Home/Home/Home';
import Login from './Page/Login/Login';
import SignIn from './Page/Login/SignIn';
import Review from './Page/Review/Review';
import Services from './Page/Services/Services';
import Item from './Page/Item/Item';
import Manage from './Page/Manage/Manage';
import Add from './Page/Add Item/Add';
import MyItem from './Page/My Item/MyItem';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/review" element={<Review></Review>} />
        <Route path="/services" element={<Services></Services>} />
        <Route path="/item" element={<Item></Item>} />
        <Route path="/add" element={<Add></Add>} />
        <Route path="/myItem" element={<MyItem></MyItem>} />
        <Route path="/manage" element={<Manage></Manage>} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/signup" element={<SignIn></SignIn>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

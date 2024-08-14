import {Routes , Route } from 'react-router-dom';
import Menu from "./factors/Menu";
import About from "./factors/About";
import Footer from "./factors/Footer";
import Items from "./factors/Items";
import AddItem from "./factors/AddItem";
import Contact from "./factors/Contact";
import Home from "./factors/Home";
import UpdateItem from './factors/UpdateItem';


function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/items" element={<Items />} />
        <Route path="/add-items" element={<AddItem/>}/>
        <Route path="/update-item/:id" element={<UpdateItem/>}/>
        <Route path="*" element={<div>Page not found</div>} />
        
      </Routes>
      <Footer />
    </>
  );
}

export default App;

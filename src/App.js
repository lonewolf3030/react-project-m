import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  console.log("filtered products : ", filteredProducts)

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
     if(searchText.trim() === ""){
      setFilteredProducts(products)
     }else{
      const filteredData = filteredProducts.filter((item, idx) => item.title.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredProducts(filteredData);
     }
  }, [searchText, filteredProducts])


  console.log("search text : ", searchText)

  const handleSearchTextChange = (e) => {
      setSearchText(e.target.value)
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
      setFilteredProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <>
     <Router>
          <Navbar handleSearchInput = {handleSearchTextChange}/>
       <Routes>
          <Route path='/' element = {<Products products = {filteredProducts}/>}/>
          <Route path = "/about" element = {<About />}/>
          <Route path = "/contact" element= {<Contact />}/>
       </Routes>
     </Router>
      {/* <h1>Hello World</h1>
     <ComponentA />
     <UserList /> */}

     
    </>
  );
}

export default App;

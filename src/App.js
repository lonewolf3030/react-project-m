import './App.css';
import Navbar from './components/navbar/Navbar';
import Products from './components/products/Products';
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
     <BrowserRouter>
       <Routes>
          <Route />
       </Routes>
     </BrowserRouter>
      {/* <h1>Hello World</h1>
     <ComponentA />
     <UserList /> */}
     <Navbar handleSearchInput = {handleSearchTextChange}/>
     <Products products = {filteredProducts}/>
    </>
  );
}

export default App;

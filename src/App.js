import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Products from "./components/Products";
import Contact from './components/Contact'
import Register from "./components/Register";
import Login from './components/Login'
import { useState, useEffect } from "react";
import webService from './services/WebService'
import urls from './services/WebUrls';
import { useDispatch } from "react-redux";
import { loadCategory,loadBrand,loadProduct } from "./reduxdata/DataSlice";

export default function App()
{
   const [catgories,setCategories] = useState([])
   const [brands,setBrands] = useState([])
   const [products,setProducts] = useState([])

   useEffect(()=>{
      loadData()  
    },[])
 
   var loadData = async()=>{
     var response = await webService.getRequest(urls.API_CATEGORY_LIST)
     var cateData = await response.json()
     console.log(cateData)
     setCategories(cateData)
 
     response = await webService.getRequest(urls.API_BRAND_LIST)
     var brandData = await response.json()
     setBrands(brandData) 
 
     response = await webService.getRequest(urls.API_PRODUCT_LIST)
     var productData = await response.json()
     setProducts(productData) 
   }

  return <>
      <Menu/>
      <section class="banner_main">
         <div id="banner1" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
               <li data-target="#banner1" data-slide-to="0" class="active"></li>
               <li data-target="#banner1" data-slide-to="1"></li>
               <li data-target="#banner1" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
               <div class="carousel-item active">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu">Welcome <br/></span>To Our Sunglasses</h1>
                           <figure><img src="images/banner_img.png" alt="#"/></figure>
                           <a class="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu">Welcome <br/></span>To Our Sunglasses</h1>
                           <figure><img src="images/banner_img.png" alt="#"/></figure>
                           <a class="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="carousel-item">
                  <div class="container">
                     <div class="carousel-caption">
                        <div class="text-bg">
                           <h1> <span class="blu">Welcome <br/></span>To Our Sunglasses</h1>
                           <figure><img src="images/banner_img.png" alt="#"/></figure>
                           <a class="read_more" href="#">Shop Now</a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <a class="carousel-control-prev" href="#banner1" role="button" data-slide="prev">
            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            </a>
            <a class="carousel-control-next" href="#banner1" role="button" data-slide="next">
            <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
         </div>
      </section>
     
     <Routes>
      <Route path="/" element={<Products catgories={catgories} brands={brands} products={products}/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
     </Routes>
    
  </>
}
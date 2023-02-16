import './App.css';

import axios from "axios"
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Product from './Product';
import Product2 from './Product2';
import NotFound from './NotFound';


function App() {

    const baseUrl = "http://localhost:8080"
    //useEffcet(()=>{
    //, { useEffcet }
    //  getTodos();
    //}, [])

    async function getTodos(){
        await axios
            .get(baseUrl + "/test")
            .then((response) => {
                console.log(response.data)
            })
            .catch((error)=> {
                console.error(error)
            })
    }
    return (
        <div className='App'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/product/1" element={<Product />}></Route>
                    <Route path="/product/2" element={<Product2 />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </div>


    );
}

export default App;
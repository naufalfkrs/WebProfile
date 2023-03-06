import React from "react"
import Navbar from "./component/navbar/navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Beranda from "./page/beranda/beranda"
import TentangSaya from "./page/tentang_saya/tentang_saya"
import Karya from "./page/karya/karya"
import Kontak from "./page/kontak/kontak"

const App = () =>{
    return(
        <>
            <Router>
              <Navbar/>
              <Routes>
                <Route path='/' element={<Beranda/>}/>
                <Route path='/tentangsaya' element={<TentangSaya/>}/>
                <Route path='/karya' element={<Karya/>}/>
                <Route path='/kontak' element={<Kontak/>}/>
              </Routes>
            </Router>
        </>
    )
}

export default App

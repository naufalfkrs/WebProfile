import React from "react"
import "./beranda.css"
import foto from '../../Asset/naufal.jpg'
import { BsGithub } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import { FaLinkedin } from "react-icons/fa"
import TentangSaya from "../tentang_saya/tentang_saya"
import Karya from "../karya/karya"
import Kontak from "../kontak/kontak"

const Beranda = () =>{
    return(
        <>
        
        <div className="container-beranda">
            <div className="home-beranda">
                <div className="text-beranda">
                    <h3>Hi, my name is</h3>
                    <h1>Naufal Fakhri Risnawa</h1>
                    <p>I Am Junior Developer</p>
                    <div className="medsos">
                        <a className="icon" href="https://github.com/naufalfkrs" target="_blank" rel="noopener noreferrer"><BsGithub color="#10f5cc" size={30} /></a>
                        <a className="icon" href="https://www.instagram.com/naufalfkrs_" target="_blank" rel="noopener noreferrer"><BsInstagram color="#10f5cc" size={30} /></a>
                        <a className="icon" href="https://www.linkedin.com/in/naufal-fakhri-risnawa-650905204/" target="_blank" rel="noopener noreferrer"><FaLinkedin color="#10f5cc" size={30} /></a>
                    </div>
                </div>
                <div className="gambar-beranda">
                    <img  src={foto} alt="foto"/>
                </div>
            </div>
        </div>

        <TentangSaya />
        <Karya />
        <Kontak />
        </>
    )
}

export default Beranda
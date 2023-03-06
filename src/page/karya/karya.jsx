import React from "react"
import "./karya.css"
import mobil from '../../Asset/mobilll.png'
import mobil1 from '../../Asset/mobil2.png'
import unity from '../../Asset/unity.jpeg'
import jam from '../../Asset/jam_digital.png'

const Karya = () =>{
    return(
        <div className="container-k">
            <div className="judul-k">
                <h3>Karya</h3>
            </div>
            <div className="home-k">
                <div className="gambar-atas">
                    <div className="card">
                        <div className="gambar-card">
                            <img  src={mobil} alt="foto"/>
                        </div>
                        <div className="keterangan">
                            <h3>Membuat Mobil menggunakan Blender</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gambar-card">
                            <img  src={mobil1} alt="foto"/>
                        </div>
                        <div className="keterangan">
                            <h3>Membuat 2 Mobil di Jalan Raya menggunakan Blender</h3>
                        </div>
                    </div>
                </div>
                <div className="gambar-bawah">
                    <div className="card">
                        <div className="gambar-card">
                            <img  src={unity} alt="foto"/>
                        </div>
                        <div className="keterangan">
                            <h3>Membuat AR 3D Denah Rumah menggunakan Blender dan Unity</h3>
                        </div>
                    </div>
                    <div className="card">
                        <div className="gambar-card">
                            <img  src={jam} alt="foto"/>
                        </div>
                        <div className="keterangan">
                            <h3>Membuat Jam Digital menggunakan Javascript</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Karya
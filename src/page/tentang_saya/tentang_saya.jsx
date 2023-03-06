import React from "react"
import "./tentang_saya.css"
import foto from '../../Asset/batik.jpg'
import SkillBar from 'react-skillbars';

const skills = [
  { type: "HTML", level: 50 },
  { type: "CSS", level: 50 },
  { type: "Node.js", level: 70 },
  { type: "React.js", level: 60 },
  { type: "", level: 80 }
];

const colors = {
    bar: "#10f5cb",
    title: {
      text: "#FFF",
      background: "#10f5cb"
    }
  };
  
const sizes = {
    height: 100,
    fontSize: 40
};

const TentangSaya = () =>{
    return(
        <div className="container-ts">
            <div className="judul-ts">
                <h3>Tentang Saya</h3>
            </div>
            <div className="home-ts">
                <div className="gambar-ts">
                    <img  src={foto} alt="foto"/>
                </div>
                <div className="text-ts">
                    <table>
                        <tr>
                            <th>Nama</th>
                            <td>:  Naufal Fakhri Risnawa</td>
                        </tr>
                        <tr>
                            <th>Umur</th>
                            <td>:  16 tahun</td>
                        </tr>
                        <tr>
                            <th>Tempat Tanggal Lahir</th>
                            <td>:  Surabaya, 26 Maret 2006</td>
                        </tr>
                        <tr>
                            <th>Agama</th>
                            <td>:  Islam</td>
                        </tr>
                        <tr>
                            <th>Hobi</th>
                            <td>:  Suka Berenang</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="judul-skill">
                <h3>Skill</h3>
            </div>
            <div className="skill">
                <SkillBar skills={skills} colors={colors} sizes={sizes}/>          
            </div>
        </div>
    )
}

export default TentangSaya
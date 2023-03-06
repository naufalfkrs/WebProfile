import React, { useState }from "react"
import "./kontak.css"
import foto from "../../Asset/contact.png"

const Kontak = () =>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ name, email });
    };
    return(
        <div className="container-c">
            <div className="judul-c bg-white">
                <h3>Contact Me</h3>
            </div>
            <div className="contact">
                <div className="gambar-c">
                    <img  src={foto} alt="foto"/>
                </div>
                <div className="input">
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sky-50 text-lg font-bold mb-1">Name</label>
                            <input
                            id="name"
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block font-medium text-gray-700 mb-1 ">Email</label>
                            <input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-full px-4 py-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
                            />
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Kontak
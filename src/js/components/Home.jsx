import React from "react";
// Importacion del componente 
import Card from "./Card/Card.jsx"
import Footer from "./Footer/Footer.jsx"
import Jumbotron from "./Jumbotron/Jumbotron.jsx"

import Navbar from "./Navbar/Navbar.jsx"
//create your first component
const Home = () => {

	// Aqui va toda la logica del componente, ejemplo Variables, funciones, datos. todo lo relacionado al funcionamiento de mi componente. 

	const data = [
		{
			image: "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&w=600",
			titulo: "Harry Potter",
			descripcion: "Esto es una descripcion",
			boton: "Hola",
			id: 1
		},
		{
			image: "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&w=600",
			titulo: "Harry Potter y sofa",
			descripcion: "Esto es una descripcion dos",
			boton: "Hola",
			id: 2
		},
		{
			image: "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&w=600",
			titulo: "Harry Potter pocion",
			descripcion: "Esto es una descripcion tres",
			boton: "Hola",
			id: 3
		},
		{
			image: "https://images.pexels.com/photos/4488194/pexels-photo-4488194.jpeg?auto=compress&cs=tinysrgb&w=600",
			titulo: "Harry Potter lo que sea",
			descripcion: "Esto es una descripcion cuatro",
			boton: "Hola",
			id: 4
		}

	]

	const img = "https://images.pexels.com/photos/7979070/pexels-photo-7979070.jpeg?auto=compress&cs=tinysrgb&w=600"


	// El return me va a devolver el codigo que se me va a ver en el front. 
	return (
		<>
			<Navbar />
			<div className="container">
			<Jumbotron />
				<div className="row">
					{data.map((item) => {
						return (

							<Card
								key={item.id}
								imagen={item.image}
								descripcion={item.descripcion}
								titulo={item.titulo}
								boton={item.boton}
							/>
						)
					})}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Home;
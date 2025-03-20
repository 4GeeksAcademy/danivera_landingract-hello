import React from "react";


const Card = ({imagen, titulo, descripcion, boton}) => {


    return (
        <div className="col-sm-12 col-md-6 col-lg-3 d-flex justify-content-sm-center">
            <div class="card m-2" style={
                {
                    width: '19rem'
                 }
                }>
                <img src={imagen} class="card-img-top" alt="..."/> 
                    <div class="card-body">
                        <h5 class="card-title">{titulo}</h5>
                        <p class="card-text">{descripcion}</p>
                        <a href="#" class="btn btn-primary">{boton}</a>
                    </div>
            </div>
        </div>
    )
}

export default Card
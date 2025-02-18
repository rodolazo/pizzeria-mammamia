import React from "react";

const CardPizza = (props) => {
  const precioFormateado = props.price
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  console.log(precioFormateado);
  return (
    <div className="cardpizza">
      <img src={props.img} alt={props.name} className="cardpizza__img" />
      <h2 className="cardpizza__title">{`Pizza ${props.name}`}</h2>
      <p className="cardpizza__texto">Ingredientes: </p>
      <p className="cardpizza__ingredientes">{props.ingredients.join()}</p>
      <p className="cardpizza__precio">Precio: {`$ ${precioFormateado}`}</p>
      <div className="cardpizza__botones">
        <button className="cardpizza__boton">Ver más</button>
        <button className="cardpizza__boton cardpizza__boton_comprar">
          Añadir
        </button>
      </div>
    </div>
  );
};

export default CardPizza;

import React from "react";
import Header from "./Header";
import CardPizza from "./CardPizza";

const Home = () => {
  return (
    <div className="home">
      <Header></Header>
      <div className="cards">
        <CardPizza
          name="Pepperoni"
          price={6950}
          ingredients={["mozzarella", "pepperoni", "orégano"]}
          img="https://www.cobsbread.com/us/wp-content//uploads/2022/09/Pepperoni-pizza-850x630-1.png"
        />
        <CardPizza
          name="Española"
          price={6500}
          ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
          img="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-y-verduras-1080x671.jpg"
        />
        <CardPizza
          name="Napolitana"
          price={5950}
          ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
          img="https://br.giallozafferano.com/images/5-564/Pizza-napolitana_1200x800.jpg"
        />
      </div>
    </div>
  );
};

export default Home;

import { BasketCustom } from "..";

const BasketCustoms = (): JSX.Element => {
  return (
    <ul className="basket-customs">
      <BasketCustom
        imagePath={"/img/pizza/pepperoni.png"}
        name={"Пепероні"}
        price={250}
        count={3}
        ingredients={
          "Пепероні, сир моцарела, гриби, томатний соус, цибуля, перець халапеньо, часник, маринований огірок"
        }
      />
      <BasketCustom
        imagePath={"/img/pizza/pepperoni.png"}
        name={"Пепероні"}
        price={250}
        count={3}
        ingredients={
          "Пепероні, сир моцарела, гриби, томатний соус, цибуля, перець халапеньо, часник, маринований огірок"
        }
      />
      <BasketCustom
        imagePath={"/img/pizza/pepperoni.png"}
        name={"Пепероні"}
        price={250}
        count={3}
        ingredients={
          "Пепероні, сир моцарела, гриби, томатний соус, цибуля, перець халапеньо, часник, маринований огірок"
        }
      />
    </ul>
  );
};

export default BasketCustoms;

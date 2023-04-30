import { useState } from "react";

import BreadCrumbs from "../../components/BreadCrumbs";
import OrderingButtons from "../../components/OrderingButtons";
import OrderingSteps from "../../components/OrderingSteps";
import { OrderingComposition, OrderingForm } from "../../partials/Ordering";
import { useAppSelector } from "../../hooks";
import { Custom } from "../../store/customSlice";

import "./Ordering.scss";

const Ordering = (): JSX.Element => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [surrName, setSurrName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [delivery, setDelivery] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [deliveryTime, setDeliveryTime] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);

  const customsList: Custom[] = useAppSelector((state) => state.customs.list);

  const handleSubmitOrder = (): void => {
    const newOrder = {
      firstName,
      lastName,
      surrName,
      phone,
      delivery,
      address,
      paymentMethod,
      deliveryTime,
    };
    console.log("new Order", newOrder);
  };

  return (
    <main className="main">
      <BreadCrumbs />
      <section className="basket">
        <div className="container">
          <div className="basket-inner">
            <OrderingSteps />
            <div className="basket-ordering">
              <OrderingForm
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                surrName={surrName}
                setSurrName={setSurrName}
                phone={phone}
                setPhone={setPhone}
                delivery={delivery}
                setDelivery={setDelivery}
                address={address}
                setAddress={setAddress}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                deliveryTime={deliveryTime}
                setDeliveryTime={setDeliveryTime}
              />
              <OrderingComposition customsList={customsList} />
            </div>
            <OrderingButtons
              handleSubmitOrder={handleSubmitOrder}
              nextBtnType={"submitOrdering"}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Ordering;

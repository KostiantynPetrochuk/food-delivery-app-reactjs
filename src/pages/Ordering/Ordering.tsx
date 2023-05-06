import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import OrderingButtons from "../../components/OrderingButtons";
import OrderingSteps from "../../components/OrderingSteps";
import Spinner from "../../components/Spinner/Spinner";
import { OrderingComposition, OrderingForm } from "../../partials/Ordering";
import { useAppSelector } from "../../hooks";
import { Custom, clearBasket } from "../../store/customSlice";
import { API_PORT, API_URL } from "../../env";
import { useAppDispatch } from "../../hooks";

import "./Ordering.scss";

const Ordering = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [surrName, setSurrName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [delivery, setDelivery] = useState<boolean>(false);
  const [address, setAddress] = useState<string>("");
  const [deliveryTime, setDeliveryTime] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);
  const [orderId, setOrderId] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);

  const customsList: Custom[] = useAppSelector((state) => state.customs.list);

  const handleSubmitOrder = async (): Promise<void> => {
    setLoading(true);
    const dto = {
      firstName,
      lastName,
      surrName,
      phone: Number(phone),
      delivery,
      address,
      paymentMethod,
      deliveryTime,
      status: false,
    };

    const apiUrl: string = `${API_URL}:${API_PORT}`;

    const queryString: string = `${apiUrl}/api/order/create`;

    const res: Response = await fetch(queryString, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dto),
    });

    const createdOrder = await res.json();

    setOrderId(createdOrder._id);
  };

  useEffect(() => {
    const saveCustoms = async () => {
      const apiUrl: string = `${API_URL}:${API_PORT}`;

      const dtos = customsList.map((custom) => ({
        dish: custom._id,
        order: orderId,
        count: custom.count,
      }));

      const queryString: string = `${apiUrl}/api/custom/createMany`;

      const res: Response = await fetch(queryString, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dtos),
      });

      const result = await res.json();
      if (result) {
        navigate("/confirmed");
      }

      dispatch(clearBasket());
    };

    if (orderId) {
      saveCustoms();
    }
  }, [orderId, customsList, dispatch, navigate]);

  return loading ? (
    <Spinner />
  ) : (
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

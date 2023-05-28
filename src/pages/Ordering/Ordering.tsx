import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import BreadCrumbs from "../../components/BreadCrumbs";
import OrderingButtons from "../../components/OrderingButtons";
import OrderingSteps from "../../components/OrderingSteps";
import Spinner from "../../components/Spinner";
import Notification from "../../components/Notification";
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
  const [isValidFirstName, setIsValidFirstName] = useState<boolean>(true);
  const [lastName, setLastName] = useState<string>("");
  const [isValidLastName, setIsValidLastName] = useState<boolean>(true);
  const [surrName, setSurrName] = useState<string>("");
  const [isValidSurrName, setIsValidSurrName] = useState<boolean>(true);
  const [phone, setPhone] = useState<string>("");
  const [isValidPhone, setIsValidPhone] = useState<boolean>(true);
  const [delivery, setDelivery] = useState<boolean>(false);

  const [address, setAddress] = useState<string>("");
  const [isValidAddress, setIsValidAddress] = useState<boolean>(true);
  const [deliveryTime, setDeliveryTime] = useState<string>("");
  const [isValidDeliveryTime, setIsValidDeliveryTime] = useState<boolean>(true);
  const [paymentMethod, setPaymentMethod] = useState<boolean>(false);

  const [orderId, setOrderId] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [showNotification, setShowNotification] = useState(false);

  const customsList: Custom[] = useAppSelector((state) => state.customs.list);

  const handleSubmitOrder = async (): Promise<void> => {
    setLoading(true);

    let isValid = true;

    switch (true) {
      case delivery && deliveryTime.length < 4 && address.length < 10:
        setLoading(false);
        setShowNotification(true);
        //--- repeated ---//
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 3000);
        //---
        setIsValidAddress(false);
        setIsValidDeliveryTime(false);
        isValid = false;
        break;

      case delivery && address.length < 10:
        setLoading(false);
        setShowNotification(true);
        //--- repeated ---//
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 3000);
        //---
        setIsValidAddress(false);
        isValid = false;
        break;

      case delivery && deliveryTime.length < 4:
        setLoading(false);
        setShowNotification(true);
        //--- repeated ---//
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }, 3000);
        //---
        setIsValidDeliveryTime(false);
        isValid = false;
        break;
    }

    if (firstName.length < 3) {
      setIsValidFirstName(false);
      isValid = false;
    }

    if (lastName.length < 3) {
      setIsValidLastName(false);
      isValid = false;
    }

    if (surrName.length < 3) {
      setIsValidSurrName(false);
      isValid = false;
    }

    if (phone.length < 10) {
      setIsValidPhone(false);
      isValid = false;
    }

    if (!isValid) {
      setLoading(false);
      setShowNotification(true);
      //--- repeated ---//
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 2000);
      //---
      return;
    }

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

  useEffect(() => {
    setLoading(false);
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <main className="main">
      <Notification
        message="Заповніть будь ласка, всі поля форми замовлення"
        visible={showNotification}
        setVisible={setShowNotification}
      />

      <BreadCrumbs
        pathes={[
          { path: "/", name: "Головна" },
          { path: "/", name: "Оформлення замовлення" },
        ]}
      />
      <section className="basket">
        <div className="container">
          <div className="basket-inner">
            <OrderingSteps index={2} />
            <div className="basket-ordering">
              <OrderingForm
                firstName={firstName}
                setFirstName={setFirstName}
                isValidFirstName={isValidFirstName}
                setIsValidFirstName={setIsValidFirstName}
                lastName={lastName}
                setLastName={setLastName}
                isValidLastName={isValidLastName}
                setIsValidLastName={setIsValidLastName}
                surrName={surrName}
                setSurrName={setSurrName}
                isValidSurrName={isValidSurrName}
                setIsValidSurrName={setIsValidSurrName}
                phone={phone}
                setPhone={setPhone}
                isValidPhone={isValidPhone}
                setIsValidPhone={setIsValidPhone}
                delivery={delivery}
                setDelivery={setDelivery}
                address={address}
                setAddress={setAddress}
                isValidAddress={isValidAddress}
                setIsValidAddress={setIsValidAddress}
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
                deliveryTime={deliveryTime}
                setDeliveryTime={setDeliveryTime}
                isValidDeliveryTime={isValidDeliveryTime}
                setIsValidDeliveryTime={setIsValidDeliveryTime}
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

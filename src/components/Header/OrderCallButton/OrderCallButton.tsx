import "./OrderCallButton.scss";

interface OrderCallButtonPropsType {
  addClassName?: string;
}

const OrderCallButton = (props: OrderCallButtonPropsType): JSX.Element => {
  const { addClassName } = props;
  const baseClassName = "order-call-button";
  const buttonClassName = addClassName
    ? `${baseClassName} ${addClassName}`
    : baseClassName;
  return <button className={buttonClassName}>Замовити дзвінок</button>;
};

export default OrderCallButton;

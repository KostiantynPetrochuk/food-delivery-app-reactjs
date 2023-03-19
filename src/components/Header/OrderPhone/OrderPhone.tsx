import "./OrderPhone.scss";

interface OrderPhonePropsType {
  addClassName?: string;
  phone: string;
}

const OrderPhone = (props: OrderPhonePropsType): JSX.Element => {
  const { addClassName, phone } = props;
  const baseClassName = "order-phone";
  const phoneClassName = addClassName
    ? `${baseClassName} ${addClassName}`
    : baseClassName;
  return <span className={phoneClassName}>{phone}</span>;
};

export default OrderPhone;

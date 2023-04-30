export type OrderingFormPropsT = {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  surrName: string;
  setSurrName: React.Dispatch<React.SetStateAction<string>>;
  phone: string;
  setPhone: React.Dispatch<React.SetStateAction<string>>;
  delivery: boolean;
  setDelivery: React.Dispatch<React.SetStateAction<boolean>>;
  address: string;
  setAddress: React.Dispatch<React.SetStateAction<string>>;
  deliveryTime: string;
  setDeliveryTime: React.Dispatch<React.SetStateAction<string>>;
  paymentMethod: boolean;
  setPaymentMethod: React.Dispatch<React.SetStateAction<boolean>>;
};

import { Link } from "react-router-dom";

import FooterSocials from "./FooterSocials";
import OrderPhone from "../Header/OrderPhone";
import OrderCallButton from "../Header/OrderCallButton";

import "./Footer.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-top-left">
              <Link to={"/"}>
                <img className="footer__logo" src={"/img/logo.jpg"} alt={""} />
              </Link>

              <OrderPhone
                addClassName={"footer__phone"}
                phone={"044 65 98 658"}
              />
              <OrderCallButton addClassName={"footer__button"} />
            </div>
            <div className="footer-top-right">
              <h4 className="footer-title">
                ЗАЛИШИЛИСЬ ПИТАННЯ? МИ ЗАВЖДИ НА ЗВ’ЯЗКУ:
              </h4>
              <FooterSocials />
            </div>
          </div>
          <div className="footer-bot">
            <span className="footer-bot__left">Всі права захищено © 2023</span>
            <div className="footer-bot-logos">
              <img src={"/img/visa.svg"} alt={""} />
              <img src={"/img/master.svg"} alt={""} />
            </div>
            <span className="footer-bot__right">
              м. Хмельницький, вул. Степана Бандери 136
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

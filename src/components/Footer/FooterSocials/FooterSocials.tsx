import FooterSocialsItem from "../FooterSocialsItem";
import "./FooterSocials.scss";

const FooterSocials = (): JSX.Element => {
  return (
    <div className="footer-socials">
      <FooterSocialsItem imagePath="/img/social_01.svg" />
      <FooterSocialsItem imagePath="/img/social_02.svg" />
      <FooterSocialsItem imagePath="/img/social_03.svg" />
      <FooterSocialsItem imagePath="/img/social_04.svg" />
    </div>
  );
};

export default FooterSocials;

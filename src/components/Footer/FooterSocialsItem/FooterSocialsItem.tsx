import "./FooterSocialsItem.scss";

interface FooterSocialsItempropsType {
  imagePath: string;
}

const FooterSocialsItem = (props: FooterSocialsItempropsType): JSX.Element => {
  const { imagePath } = props;

  return (
    <a href="#" className="footer-socials-item">
      <img className="footer-socials__logo" src={imagePath} alt={""} />
    </a>
  );
};

export default FooterSocialsItem;

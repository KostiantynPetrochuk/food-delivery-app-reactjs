import "./BreadCrumbs.scss";

const BreadCrumbs = (): JSX.Element => {
  return (
    <section className="bread-crumbs">
      <div className="container">
        <div className="bread-crumbs-inner">
          <a href="#" className="bread-crumbs__title">
            Головна
          </a>
          <span className="bread-crumbs__item"></span>
          <a href="#" className="bread-crumbs__title">
            Піца
          </a>
          <span className="bread-crumbs__item"></span>
          <span className="bread-crumbs__last">Пепероні</span>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumbs;

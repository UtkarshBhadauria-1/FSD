const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <h2>
          our <span>services</span>
        </h2>
      </div>

      <div className="section-center services-center">
        <article className="service">
          <span className="service-icon">
            <i className="fas fa-wallet"></i>
          </span>
          <div>
            <h4>saving money</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-tree"></i>
          </span>
          <div>
            <h4>endless hiking</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </article>

        <article className="service">
          <span className="service-icon">
            <i className="fas fa-socks"></i>
          </span>
          <div>
            <h4>amazing comfort</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Services;

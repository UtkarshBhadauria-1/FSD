import img1 from "../assets/images/tour-1.jpeg";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <div className="section-title">
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className="section-center featured-center">
        <article className="tour-card">
          <img src={img1} className="tour-img" alt="tour" />
          <div className="tour-info">
            <h4>Tibet Adventure</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Tours;

export default function Bappa({ BappaName, location, information }) {
  return (
    <div className="first-container">
      <header className="mainheading">
        <section className="cardbody">
          <h2>
            {BappaName}
            <div>
              <h3>{location}</h3>
            </div>
          </h2>
          <h4>{information}</h4>
        </section>
      </header>
    </div>
  );
}
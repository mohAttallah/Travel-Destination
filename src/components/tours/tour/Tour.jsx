import "../tour/Tour.css";

export default function Tour({ tour }) {
  return (
    <div>
      <hr />
      <h3>{tour.name}</h3>
      <img src={tour.image} alt={tour.name} />
    </div>
  );
}

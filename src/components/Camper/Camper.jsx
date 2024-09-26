export default function Camper({ camper }) {
  const {
    id,
    name,
    price,
    rating,
    location,
    description,
    form,
    length,
    width,
    height,
    tank,
    consumption,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    TV,
    radio,
    refrigerator,
    microwave,
    gas,
    water,
    gallery,
    reviews,
  } = camper;

  const reversedLocation = location.split(", ").reverse().join(", ");
  const firstImage = gallery[0].thumb;

  return (
    <div>
      <img src={firstImage} alt="Camper's photo" />
      <p>{name}</p>
      <p>{price}.00</p>
      {rating}
      <p>({reviews.length} Reviews)</p>
      <p>{reversedLocation}</p>
      <p>{description}</p>
      <button type="button">Show more</button>
    </div>
  );
}

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

  return (
    <div>
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}

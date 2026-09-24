
function Info() {
  const info = {
    title: "About Us",
    description:
      "We provide quality products and services to make your life easier.",
    email: "example@gmail.com",
    phone: "+880 1234-567890",
    address: "Dhaka, Bangladesh",
  };

  return (
    <section className="info">
      <h2>{info.title}</h2>

      <p>{info.description}</p>

      <div>
        <strong>Email:</strong> {info.email}
      </div>

      <div>
        <strong>Phone:</strong> {info.phone}
      </div>

      <div>
        <strong>Address:</strong> {info.address}
      </div>
    </section>
  );
}

export default Info;



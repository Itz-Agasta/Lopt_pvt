const Card = ({ image }) => {
  return (
    <>
      <div>
        <img
          src={image}
          height={150}
          width={150}
          style={{ objectFit: "cover" }}
        ></img>
      </div>
    </>
  );
};

export default Card;

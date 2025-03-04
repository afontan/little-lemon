import "./styles/SpecialsCard.css";

function SpecialsCard({ image, title, description, price }) {
    return (
      <div className="food-card">
        <img src={image} alt={title} className="food-card-img" />
        <div className="food-card-content">
          <div className="food-card-header">
            <h3>{title}</h3>
            <span className="food-card-price">${price}</span>
          </div>
          <p className="food-card-description">{description}</p>
          <p className="food-card-delivery">
            <strong>Order for delivery</strong> <span className="delivery-icon">🛒</span>
          </p>
        </div>
      </div>
    );
  };

  export default SpecialsCard;
import SpecialsCard from "./SpecialsCard";
import GreekSaladImg  from "../assets/greek-salad.jpg";
import BruschettaImg from "../assets/bruschetta.jpg";
import LemonDessertImg from "../assets/lemon-dessert.jpg";
import "./styles/Specials.css";
import { NavLink } from "react-router-dom";

function Specials() {
    return (
        <div className="specials-section-container">
            <div className="specials-section-title">
                    <h1>This Week's Specials</h1>
                    <div className="btn-container">
                        <button className="btn btn-menu"><NavLink to="/menu">Check our Menu!</NavLink></button>
                    </div>
            </div>
            <div className="specials-cards-container">
                <SpecialsCard
                    image={GreekSaladImg}
                    title="Greek Salad"
                    description="The famous greek salad of crispy lettuce, peppers, olives and our chicago style feta cheese. Garnished with crunchy garlic and rosemary croutons."
                    price="12.99"
                />
                <SpecialsCard
                    image={BruschettaImg}
                    title="Bruschetta"
                    description="Au Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                    price="5.99"
                />
                <SpecialsCard
                    image={LemonDessertImg}
                    title="Lemon Dessert"
                    description="This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                    price="5.00"
                />
            </div>
        </div>
    );
}

export default Specials;
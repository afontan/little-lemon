import Footer from "../components/Footer";
import Header from "../components/Header";
import ReservationForm from "../components/ReservationForm";
import "../components/styles/Reservation.css";

function ReservationPage() {
    return (
        <>
            <Header />
            <div className="reservation-body">
                <ReservationForm/>
            </div>
            <Footer />
        </>
    );
}

export default ReservationPage;
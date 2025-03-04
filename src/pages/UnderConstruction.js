import Footer from "../components/Footer";
import Header from "../components/Header";
import "../components/styles/UnderConstruction.css";

function UnderConstructionPage({title}) {
    return (
        <>
            <Header/>
            <div className="under-construction-container">
                <h1>{title}</h1>
                <p>This page is under construction</p>
            </div>
            <Footer/>
        </>
    );
}

export default UnderConstructionPage;
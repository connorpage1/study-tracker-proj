import { useRouteError } from "react-router-dom"
import Header from "../main/Header";
import Footer from "../main/Footer";
import NavBar from "../main/NavBar";

const ErrorPage = () => {
    const {error} = useRouteError();

    return (
        <>
            <Header />
            <NavBar />
                <div>
                    <h2>Uh oh, you've encountered an error</h2>
                    <p>{error.message}.</p>
                </div>
            <Footer />
        
        </>
    )
}

export default ErrorPage;
import {Container} from "react-bootstrap";
import Header from "../components/layouts/header.tsx";
import Footer from "../components/layouts/footer.tsx";
import {Outlet} from "react-router-dom";
import ShowMessage from "../components/layouts/showMessage.tsx";

const Root = () => {
    return (
        <>
            <Header />
            <Container>
                <ShowMessage />
                <Outlet />
            </Container>
            <Footer />
        </>
    )
}

export default Root;
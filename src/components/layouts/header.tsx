import {Container, Nav, Navbar} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";

const Header = () => {
    return (
        <Navbar expand={"lg"} className={"bg-body-tertiary"}>
            <Container>
                <Navbar.Brand href={"/"}>Sport app</Navbar.Brand>
                <Navbar.Toggle aria-controls={"navbar-nav"} />
                <Navbar.Collapse id={"navbar-nav"}>
                    <Nav className={"me-auto"}>
                        <LinkContainer to={"/"}>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/"}>
                            <Nav.Link href={"/"}>Profile</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to={"/reports"}>
                            <Nav.Link href={"/reports"}>Reports</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <Nav className={"ms-auto"}>
                        <LinkContainer to={"/logout"}>
                            <Nav.Link href={"/logout"}>Logout</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header;
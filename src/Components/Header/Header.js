import {
    Container,
} from "./styledHeader";

export const Header = ({ setToggleSidebar }) => {
    return (
        <Container>
            <p onClick={() => setToggleSidebar(true)}>Click Me</p>
        </Container>
    );
};

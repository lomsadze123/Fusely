import { styled } from "styled-components";
import { Button } from "../components/header.jsx";

const Suggestion = () => {
    return (
        <Flex>
            <H2>Interested in <br /> getting fusely?</H2>
            <Button about="true">Let's talk</Button>
        </Flex>
    );
}

export default Suggestion

const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #2F2E41;
    padding: 8.4rem;
    width: 90rem;
    margin: 0 auto 9.1rem auto;
`

const H2 = styled.h2`
    color: #FFF;
    font-size: 5rem;
`
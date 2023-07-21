import { styled } from "styled-components";
import { Button } from "../components/header.jsx";


const Section = ( { heading, paragraph, button , imgUrl , index} ) => {
    return (
        <FirstSection>
            <FlexOrder order={index === 0 ? "1" : "0"}>
                <H2>{heading}</H2>
                <P>{paragraph}</P>
                <Button about="true">{button}</Button>
            </FlexOrder>
            <img src={imgUrl} alt="fusely Girl" />
        </FirstSection>
    );
}

export default Section;

const FirstSection = styled.section`
    display: flex;
    justify-content: space-between;
    margin-top: 11.6rem;
`
const H2 = styled.h2`
color: #2F2E41;
    font-size: 8.6rem;
    line-height: 8.8rem;
    letter-spacing: -.1rem;
    max-width: 48.9rem;
`
const P = styled.p`
    color: #9893A3;
    font-size: 2rem;
    line-height: 3.4rem;
    max-width: 48.9rem;
    margin: 3rem 0;
`
const FlexOrder = styled.div`
    order: ${props => props.order};
`
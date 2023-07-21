import { styled } from "styled-components";
import { Button } from "../components/header.jsx";

const Store = () => {
    return(
        <section>
            <H2>Choose your plan</H2>
            <Flex>
                <Boxes starter="Starter" price="Free" dashboard="Premium" limit="Limited Support" service="Forever free" />
                <Boxes color="true" starter="Premium" price="$29/month" dashboard="Dashboard & Analysis" limit="Premium Support Support" service="Tracking Service" />
                <Boxes starter="Enterprise" price="$49/month" dashboard="All features in Premium" limit="Realtime overviewt" service="Mobile app" />
            </Flex>
        </section>
    );
}

const Boxes = ({ starter, price, dashboard, limit, service , color}) => {
    return (
        <FlexClone color={color}>
            <P color={color}>{starter}</P>
            <H4 color={color}>{price}</H4>
            <P color={color}>{dashboard}</P>
            <P color={color}>{limit}</P>
            <P color={color}>{service}</P>
            <Button>Get Started</Button>
        </FlexClone>
    );
}

export default Store;

const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4.5rem;
    margin: 9rem 0 17.78rem 0;
`
const H4 = styled.h4`
    color:${props => props.color ?  "white" :"#2F2E41"};
    font-size: 4rem;
    line-height: 5.6rem;
`
const P = styled.p`
    color: ${props => props.color ? "#FFF" : "#717082"};
    font-size: 1.8rem;
`
const FlexClone = styled(Flex)`
    flex-direction: column;
    text-align: center;
    gap: 1.4rem;
    background-color: ${props => props.color ? "#6C63FF" : "rgba(236, 235, 255, 0.30)"};
    padding: ${props => props.color ? "7rem 8.8rem;" : "4.6rem 8.8rem"};
    margin: 0;
`
const H2 = styled.h2`
    color: #2F2E41;
    font-size: 6rem;
    letter-spacing: -.1rem;
    text-align: center;
    margin-top: 22rem;
`
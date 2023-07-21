import styled from "styled-components";
import logo from "../assets/logo.svg";

const headerObject = ["Home","Features","Pricing","Blog","Contact"]

export default function Header( { login, started } ) {
    return (
        <Flex>
            <img src={logo} alt="fusely logo" />
            <Ul as="ul">
                {headerObject.map((item,index) => {
                    return <Li key={index} about={index === 0 ? "black" : "#9893A3"}>{item}</Li>})}
            </Ul>
            <div>
                <Button>{login}</Button>
                <Button about="true">{started}</Button>
            </div>
        </Flex>
    );
}

const Li = styled.li`
    font-size: 1.6rem;
    cursor: pointer;
    color: ${props => props.about};
`
const Flex = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.6rem;
`
const Ul = styled(Flex)`
    list-style: none;
    padding: 0;
`
export const Button = styled.button`
    background-color: ${props => props.about ? "#6C63FF" : "white"};
    color: ${props => props.about ? "white" : "#6C63FF"};
    border: .1rem solid #6C63FF;
    padding: 1.6rem 3rem;
    margin-right: 1rem;
    cursor: pointer;
    font-size: 1.4rem;
`
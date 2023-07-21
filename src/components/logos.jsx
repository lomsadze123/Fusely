import binator from "../assets/binator.svg"
import buyme from "../assets/buyme.svg"
import loogipsum from "../assets/loogipsum.svg"
import umbrella from "../assets/umbrella.svg"
import square from "../assets/square.svg"
import { styled } from "styled-components"

const logoList = [binator, buyme , loogipsum , umbrella , square ]



const Logos = () => {
    return (
        <Div>
            {logoList.map((logo,index) => <Img key={index} src={logo} alt="logos" />)}
        </Div>
    );
}

export default Logos


const Div = styled.div`
    display: flex;
    justify-content: center;
    gap: 10.27rem;
    padding: 5.1rem 0 10.4rem 0;
`
const Img = styled.img`
    width: 9.5rem;
`
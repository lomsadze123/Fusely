import { styled } from "styled-components";
import facebook from "../assets/facebook.svg"
import twitter from "../assets/twitter.svg"
import linkedin from "../assets/linkedin.svg"
import logo from "../assets/logo.svg";

const array = [
    {
        title: "Product",
        work: "How it works",
        feature: "Features",
        price: "Pricing",
        faq: "FAQ",
        download: "Download"
    },
    {
        title: "Company",
        work: "About",
        feature: "Blog",
        price: "Partnership",
        faq: "Terms of use",
        download: "Privacy policy"
    }
]

const Footer = () => {
    return (
        <Color>
            <FooterList>
                <Lists />
                <div>
                    <H4>Support</H4>
                    <Padding>
                        <Li>Help center</Li>
                        <Li>Contact us</Li>
                    </Padding>
                </div>
                <div>
                    <H4>Get in touch</H4>
                    <Flex>
                        <img src={facebook} alt="facebook" />
                        <Img src={twitter} alt="twitter" />
                        <Img src={linkedin} alt="linkedin" />
                    </Flex>
                </div>
            </FooterList>
            <CopyRight>
                <img src={logo} alt="fusely logo" />
                <Samll>&copy; Fusely 2021. All rights reserved.</Samll>
            </CopyRight>
        </Color>
    );
}

const Lists = () => {
    return (
        array.map((arr,index) => {
            return (
                <div key={index}>
                    <H4>{arr.title}</H4>
                    <Padding>
                        <Li>{arr.work}</Li>
                        <Li>{arr.feature}</Li>
                        <Li>{arr.price}</Li>
                        <Li>{arr.faq}</Li>
                        <Li>{arr.download}</Li>
                    </Padding>
                </div>
            );
        })
    );
}

export default Footer;

const Li = styled.li`
    list-style: none;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: #717082;
    padding: 0 0 .8rem;
    cursor: pointer;
`
const H4 = styled.h4`
    color: #2F2E41;
    font-size: 1.8rem;
    line-height: 2.4rem;
    font-weight: 700;
`
const CopyRight = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 8rem 4.01rem 8rem;
`
const FooterList = styled(CopyRight)`
    padding: 24.45rem 27rem 14.09rem 27rem;
`
const Img = styled.img`
    padding: 1rem;
    background-color: white;
`
const Padding = styled.ul`
    padding: 2rem 0 0;
`
const Flex = styled(Padding)`
    display: flex;
    gap: 1.2rem;
`
const Color = styled.footer`
    background-color: rgba(236, 235, 255, 0.60);
`
const Samll = styled.small`
    color: #9893A3;
    font-size: 1.2rem;
`
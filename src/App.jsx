import { styled } from "styled-components";
import Header from "./components/header.jsx";
import Section from "./components/section.jsx";
import whiteGirl from "./assets/witeGirl.png"
import blackGirl from "./assets/blackGirl.png"
import Logos from "./components/logos.jsx";
import Store from "./components/store.jsx";
import Suggestion from "./components/suggestion.jsx";
import Footer from "./components/footer.jsx";

export default function App() {
  return (
    <>
      <Body>
        <Header login="Log In" started="Get Started"/>
        <Section heading="Let's get fusely together"
        paragraph="Outcome-centered product that reduce churn, optimize pricing, and grow your subscription business end-to-end."
        button="Get Started"
        imgUrl={whiteGirl}
        />
        <Logos />
        <Section heading="Detailed Examination"
        paragraph="A daily dataset to keep you up to date on subscription market trends and what's happening in your vertical."
        button="Learn more"
        imgUrl={blackGirl}
        index={0}
        />
        <Store />
        <Suggestion />
      </Body>
      <Footer />
    </>
  )
}

const Body = styled.div`
  padding: 0 13rem;
`
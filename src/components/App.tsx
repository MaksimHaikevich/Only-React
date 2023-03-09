import * as React from "react";
import {Container, MainWrapper, Title, TitleWrapper} from "./App.styles";
import TimeCircle from "./TimeCircle/TimeCircle";
import GlobalStyle from "../../globalStyles";
import Slider from "./Slider/Slider";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import EventProvider from "./Provider";

const App = () => {
        return (
            <MainWrapper>
                <GlobalStyle/>
                <Container>
                    <TitleWrapper>
                        <Title>Исторические даты</Title>
                    </TitleWrapper>
                    <EventProvider>
                        <TimeCircle/>
                        <Slider/>
                    </EventProvider>
                </Container>
            </MainWrapper>
        )
    }
;
export default App;

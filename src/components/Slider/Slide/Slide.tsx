import {Description, Title, Wrapper} from "./Slide.styles";

const Slide = ({title, description}) => {
    return (
        <Wrapper>
            <Title>{title}</Title>
            <Description>
                {description}
            </Description>
        </Wrapper>
    );
};

export default Slide;
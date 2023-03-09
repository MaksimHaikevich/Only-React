import styled from "styled-components";
import {Swiper} from "swiper/react";


export const Wrapper = styled.div`
  padding: 0 80px;
  margin-bottom: 104px;
`

export const NumberOfSlider = styled.span`
  display: inline-block;
  font-family: 'PT Sans', sans-serif;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 20px;
`

export const ChangeSliderWrapper = styled.div`
  margin-bottom: 56px;
  display: flex;

  & button:first-child {
    margin-right: 20px;
  }

`


export const LeftButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 1px solid rgba(66, 86, 122, 0.5);
  background: #FFFFFF;
  transition: 0.3s;
  opacity: ${props => props.disabled ? 0.2 : 1};

  &::after {
    content: "";
    width: 13px;
    height: 13px;
    border: solid #42567A;
    border-width: 3px 0 0 3px;
    transform: translate(-50%, -50%) rotate(-45deg);
    position: absolute;
    left: 50%;
    top: 50%;
  }

  &:hover {
    cursor: ${props => props.disabled ? `default` : `pointer`};
    background: ${props => props.disabled ? `#FFFFF` : `aliceblue`};
  }
`
export const RightButton = styled(LeftButton)`
  &::after {
    transform: translate(-50%, -50%) rotate(135deg);
  }

`


export const SliderStyled = styled(Swiper)`
  & .swiper-wrapper {
    //padding-left: 80px;
  }

  & .swiper-button-prev, .swiper-button-next {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #FFFFFF;
    box-shadow: 0 0 15px rgba(56, 119, 238, 0.1);
    top: 45%;
    transition: 0.3s;

    &:hover {
      box-shadow: 0 0 15px rgb(56 119 238 / 70%);
    }

    &::after {
      content: "";
      width: 10px;
      height: 10px;
      border: solid #3877EE;
      border-width: 3px 0 0 3px;
      transform: translate(-50%, -50%) rotate(135deg);
      position: absolute;
      left: 50%;
      top: 50%;
    }
  }

  & .swiper-button-prev::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  & .swiper-button-disabled {
    display: none;
  }
`
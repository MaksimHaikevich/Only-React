import styled from 'styled-components'
import {Swiper} from "swiper/react";


export const MainWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;

  //&:before {
  //  content: "";
  //  width: 1px;
  //  background: rgb(66 86 122 / 10%);
  //}
  //
  //&:after {
  //  content: "";
  //  width: 1px;
  //  background: rgb(66 86 122 / 10%);
  //}
`
export const Container = styled.div`
  position: relative;
  max-width: 1440px;
  height: 100vh; //TODO
  margin: 0 160px 0 320px; //TODO
  border-left: 1px solid rgb(66 86 122 / 10%);
  border-right: 1px solid rgb(66 86 122 / 10%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:before {
    content: "";
    width: 1px;
    background: rgb(66 86 122 / 10%);
    position: absolute;
    top: 0;
    bottom: 0;
    left: calc(50% - 0.5px)
  }

  &:after {
    content: "";
    height: 1px;

    background: rgb(66 86 122 / 10%);
    position: absolute;
    left: 0;
    right: 0;
    top: calc(50% - 0.5px);
  }

}

@media only screen and (max-width: 1700px) {
  //TODO
  margin: 0 80px 0 160px;
}

`
export const TitleWrapper = styled.div`
  //border-left: 5px solid;
  margin-left: 75px;
  padding-top: 170px;

  @media only screen and (max-width: 1700px) {
    //TODO
    padding-top: 90px;
  }

`

export const Title = styled.h1`
  position: relative;
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
  color: #42567A;
  width: 353px;

  @media only screen and (max-width: 1700px) {
    //TODO
    font-size: 48px;
  }

  &::after {
    content: "";
    width: 5px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -75px;
    background: linear-gradient(#3877EE, #EF5DA8);
  }

`
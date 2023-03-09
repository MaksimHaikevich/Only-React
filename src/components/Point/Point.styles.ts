import styled from "styled-components";

interface Props {
    X: number
    Y: number
}


export const PointStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6px;
  height: 6px;
  background: #42567A;
  font-size: 0;
  //position: absolute;
  border-radius: 50%;
  transition: 0.3s;

  //cursor: pointer;
`
export const Wrapper = styled.div<Props>`
  position: absolute;
  width: 56px;
  height: 56px;
  left: ${props => props.X}px;
  top: ${props => props.Y}px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover > ${PointStyled} {
    background: #F4F5F9;
    border: 1px solid rgba(48, 62, 88, 0.5);
    width: 56px;
    height: 56px;
    text-align: center;

    font-size: 20px;
    line-height: 30px;
    color: #42567A;
  }

`

export const ActivePoint = styled(PointStyled)`
  background: #F4F5F9;
  border: 1px solid rgba(48, 62, 88, 0.5);
  width: 56px;
  height: 56px;
  text-align: center;

  font-size: 20px;
  line-height: 30px;
  color: #42567A;
`


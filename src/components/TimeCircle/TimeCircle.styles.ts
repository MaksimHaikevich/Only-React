import styled, {StyledComponent} from 'styled-components'


export const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: calc(50% - 265px);
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`
type Props1 = {
    children?: any;
}

export const YearsPeriod = styled.div<Props1>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 975px;
  display: flex;
  justify-content: space-between;
  //z-index: 1;
`

export const From = styled.span`
  font-weight: 700;
  font-size: 200px;
  line-height: 160px;
  text-align: center;
  letter-spacing: -0.02em;
  color: #5D5FEF;
`

export const To = styled(From)`
  color: rgb(239 93 168);
`

export const Circle = styled.div`
  //opacity: 0;
  width: 530px;
  height: 530px;
  border: 1px solid rgb(66 86 122 / 30%);
  border-radius: 50%;
  //opacity: 0.2;
  position: relative;
`

interface Props {
    X: number
    Y: number
}

export const PointStyled = styled.div<Props>`
  left: ${props => props.X}px;
  top: ${props => props.Y}px;
  width: 6px;
  height: 6px;
  background: #42567A;
  position: absolute;
  border-radius: 50%;
  cursor: pointer;


  //&:hover {
  //  background: #F4F5F9;
  //  border: 1px solid rgba(48, 62, 88, 0.5);
  //  width: 56px;
  //  height: 56px;
  //  transition: 0.25s;
  //}
`


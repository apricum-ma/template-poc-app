import React, { PureComponent } from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
  position: relative;
  min-height: 450px;
  width: 300px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid #ededed;
  background-color: #fff;
  box-shadow: 1px 2px 10px rgba(0,0,0,.1);
  transition: all .2s ease-in-out;
  cursor: pointer;
  &:hover{
    transform: scale(1.05);
  }
`

const CardHeader = styled.header`
  background: #445c95 url(https://www.webankcdn.net/s/hj/www/img/dk03-1d9f1a8ea4.png) no-repeat;
  min-height: 150px;
  padding: 20px;
  font-size: 24px;
  color: #fff;
  font-family: "helvetica neue,hiragino sans gb,microsoft yahei,sans-serif";
`
const CardBody = styled.div`
  padding: 20px;
`

const CardContent = styled.div`
  font-family: "helvetica neue,hiragino sans gb,microsoft yahei,sans-serif";
`
const CTA = styled.button`
  padding: 15px;
  margin-top: 30px;
  background: #3399eb;
  color: #fff;
  min-width: 150px;
  border-radius: 30px;
`

class Card extends PureComponent {
  render() {
    const { onClick, cardDetails } = this.props;
    return (
      <CardContainer>
        <CardHeader>
          Lorem Ipsum
        </CardHeader>
        <CardBody>
          <CardContent>
            { cardDetails || 'Click on CTA' }
          </CardContent>
          <CTA onClick={onClick}>Click Here</CTA>
        </CardBody>
      </CardContainer>
    )
  }
}

export default Card;
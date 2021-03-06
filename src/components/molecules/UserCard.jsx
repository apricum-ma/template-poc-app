import React, { PureComponent } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

// const CardContainer = styled.div`
//   position: relative;
//   min-height: 450px;
//   width: 300px;
//   border-bottom-left-radius: 5px;
//   border-bottom-right-radius: 5px;
//   border: 1px solid #ededed;
//   background-color: #fff;
//   box-shadow: 1px 2px 10px rgba(0,0,0,.1);
//   transition: all .2s ease-in-out;
//   cursor: pointer;
//   &:hover{
//     transform: scale(1.05);
//   }
// `

// const CardHeader = styled.header`
//   background: #445c95 url(https://www.webankcdn.net/s/hj/www/img/dk03-1d9f1a8ea4.png) no-repeat;
//   min-height: 150px;
//   padding: 20px;
//   font-size: 24px;
//   color: #fff;
//   font-family: "helvetica neue,hiragino sans gb,microsoft yahei,sans-serif";
// `
// const CardBody = styled.div`
//   padding: 20px;
// `

// const CardContent = styled.div`
//   font-family: "helvetica neue,hiragino sans gb,microsoft yahei,sans-serif";
// `
// const CTA = styled.button`
//   padding: 15px;
//   margin-top: 30px;
//   background: #3399eb;
//   color: #fff;
//   min-width: 150px;
//   border-radius: 30px;
// `

class UserCard extends PureComponent {
  render() {
    const { onClick } = this.props;
    return (
      <div className="user-card col col-sm-12 col-md-6 col-lg-3">
        <div className="user-card__number">
          <Input type='text' maxLength="4" className="user-card__input"/>
          <Input type='text' maxLength="4" className="user-card__input"/>
          <Input type='text' maxLength="4" className="user-card__input"/>
          <Input type='text' maxLength="3" className="user-card__input"/>  
        </div>
        <Button onClick={onClick}>Save</Button>
      </div>
    )
  }
}

export default UserCard;
import React from "react";
import Footer from "./footer";
import styled from "styled-components";

const Mainimg = styled.div`
    width:100%;
    height:150px;
    background:skyblue;
    img{
        width: 100%; height: 150px;
    }
`;
const Contents = styled.div`
width : 100%;
height: 2000px;
background: #d1cdcd;
`;

const Event = styled.div`
display: flex;
justify-content: center;
    width: 100%;
    height: 70px;
    background:#000;
    
    p{
    color: white;
    line-height: 70px;
    margin-right: 50px;
    font-size: 15px;
}
`

const Login = styled.div`
    width: 100%;
    height: 180px;
    background:white ;
    h3{
        display: flex;
        justify-content: center;
        width: 100%;
        height: 80px;
        line-height: 80px;
        padding-top: 15px;
    }
    .login_in{
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        width: 350px;
        height: 60px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #00b2fe;
        border: 0;
        cursor: pointer;
        color: white;
        font-size: 18px;
        font-weight: 700;
    }
`  


const ContentsIn = styled.div`
    margin: 0 auto;
    width: 1130px;
    height: 2000px;

    p{
        font-size: 23px;
        font-weight: bolder;
        padding-top:70px;
        padding-left:30px
    }
`;

const Box = styled.div`
    margin-left:50px;
    float: left;
    margin: 25px;
    width: 500px;
    height: 200px;
    background: #fff;
    p{
        padding-top: 0px;
        font-size: 15px;
        font-weight: 500;
    }
    span{

    }
`
const Contents_bottom =styled.div`
    width: 100%; height: 300px;
    background: red;
`
function Coupon(){
    return(
        <div>
            <Mainimg >
                <img src="https://www.amoremall.com/kr/ko/pc/ko/images/banner/coupon.png" alt="" />
            </Mainimg>
            <Event>
                <p>쿠폰존</p>
                <p>출석체크</p>
            </Event>
            <Login>
                <h3>아모레퍼시픽 공식몰 로그인하고 할인 쿠폰 및 다양한 혜택을 확인하세요!</h3>
                <div className="login_in">
                <button>로그인</button>
                </div>
            </Login>
            <Contents>
                <ContentsIn>
                    <div className="coupon1">
                        <p>WELCOME 고객 혜택</p>
                    <Box>
                        <p>할인쿠폰</p>
                        <span>5,000원</span>
                        <p>20,000원 이상 결제시</p>
                    </Box>
                    <Box/>
                    </div>
                    <div className="coupon2">
                        <p>VIP 고객 혜택</p>
                    <Box/>
                    <Box/>
                    </div>
                    <div className="coupon3">
                        <p>VVIP 고객 혜택</p>
                    <Box/>
                    <Box/>
                    </div>
              
                </ContentsIn>
                
            </Contents>
            
            <Footer/>
        </div>
    )
}

export default Coupon;
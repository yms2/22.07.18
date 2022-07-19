import React from 'react'
import styles from './brand.module.css'



function Item({user}){
    return(
        <div className={styles.item}>
            <img className={styles.img} src = {user.src}/>
            <h4>{user.ttl}</h4>
            <p>{user.period}</p>
        </div>
    )
}

function BrandItems(){
    //선언형 함수.
    //const 함수명 = () => {}

    //각각의 item에 들어갈 내용을 배열로 선언
    const items = [
        {
            id:1,
            src : 'https://images-kr.amoremall.com/fileupload/brand/10/2022/04/15/1)%20%E9%87%89%EB%9A%AE%EC%98%96_%EC%92%93_%20%EF%A7%8E%EB%B6%BF%EC%94%A4%20_%EB%8C%80_%EF%A7%9E%C2%80.jpg?shrink=387:341s',
            ttl : '아몰랜드에 찾아온 유미의세포들',
            period : '2022-07-20 - 2022-07-25'
        },
        {
            id:2,
            src : 'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
            ttl : '헤라 나의 여름 SUN택! ~37% SALE',
            period : '2022-07-11 - 2022-07-24'
        },
        {
            id:3,
            src : 'https://images-kr.amoremall.com/fileupload/brand/186/2021/08/12/ONHOPE.jpg?shrink=387:341',
            ttl : '감각적인 향으로 완성하는 릴렉싱 리추얼',
            period : '2022-07-20 - 2022-07-25'
        },
        {
            id:4,
            src : 'https://images-kr.amoremall.com/fileupload/brand/25/2021/08/12/img_HANYUL.png?shrink=387:341',
            ttl : '아몰랜드에 찾아온 유미의세포들',
            period : '2022-07-11 - 2022-07-24'
        },
        {
            id:5,
            src : 'https://images-kr.amoremall.com/fileupload/brand/19/2021/08/12/img_illiyoon.png?shrink=387:341',
            ttl : '아몰랜드에 찾아온 유미의세포들',
            period : '2022-07-11 - 2022-07-24'
        },
        {
            id:6,
            src : 'https://images-kr.amoremall.com/fileupload/brand/12/2022/05/09/01_0485_F(2).jpg?shrink=387:341',
            ttl : '[바이탈뷰티] 슈퍼 콜라겐 에센스 비오틴 프로모션',
            period : '2022-07-18-2022-07-24'
        }

    ]

  return (
        <div className={styles.items}>
            {/* <Item user={items[0]}/>
            <Item user={items[1]}/>
            <Item user={items[2]}/>
            <Item user={items[3]}/>
            <Item user={items[4]}/>
            <Item user={items[5]}/> */}
            {items.map((user, index)=>(//화면 출력 실행함수()
                <Item user={user} key={index}/>
            ))}
        </div>
  )
  
}

export default BrandItems;

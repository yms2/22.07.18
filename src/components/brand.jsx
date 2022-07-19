import React from "react";
import styles from './brand.module.css';
import Footer from "./footer";
import Branditem from "./branditem";


function Brand(){
    return(
        <div>
            <div className={styles.mainimg}>
                <h2>BRAND</h2>
                <p>아모레퍼시픽의 공식 자사몰인 아모레몰은 자사 브랜드뿐 아니라<br />
타 브랜드 상품들도 입점되어 다양한 뷰티 상품을 비교하고 구매할 수 있도록 노력하고 있습니다.</p>
            </div>
                <div className={styles.contents}>
                    <div className={styles.contents_in}>
                        <div className={styles.ttl}>
                            <h3>BEST BRAND</h3>
                            <img src="https://images-kr.amoremall.com/fileupload/brand/18/2019/10/18/sulwhasoo.png" alt="" />
                            <img src="https://images-kr.amoremall.com/fileupload/brand/15/2019/10/18/hera.png" alt="" />
                            <img src="https://images-kr.amoremall.com/fileupload/brand/10/2019/10/18/primera.png" alt="" />
                            <img src="https://images-kr.amoremall.com/fileupload/brand/22/2020/08/24/brandtab_logo_ap_1.png.png" alt="" />
                            <img src="https://images-kr.amoremall.com/fileupload/brand/11/2020/10/06/mamonde.jpg" alt="" />
                            <img src="https://images-kr.amoremall.com/fileupload/brand/17/2019/10/18/iope.png" alt="" />
                        </div>
                        <Branditem/>
                    </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Brand;
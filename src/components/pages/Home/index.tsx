import { APPSTORE_URL, PLAYSTORE_URL } from '../../../constants/values'
import { IoLogoApple, IoLogoGooglePlaystore } from 'react-icons/io5';

import styles from './styles.module.css'

const Home = () => {
    return <>

        <div className={styles.container} >
            <div className={styles.infoContainer} >
                <img
                    src="/home_banner.png"
                    alt='mockup'
                    className={styles.backgroundImage}

                />
                {/* <div className={styles.right} >
                    <h1 className={styles.title}>38°</h1>
                    <h2 className={styles.subTitle}>댕댕이와 친구만들자</h2>
                </div> */}
                <div className={styles.left} >

                    <a href={APPSTORE_URL} ><div className={styles.downloadBtn} >
                        <IoLogoApple size={24} fill={'#888'} />
                        <div className={styles.downloadText} >App Store</div>
                    </div></a>
                    <a href={PLAYSTORE_URL} ><div className={styles.downloadBtn} >
                        <IoLogoGooglePlaystore size={24} fill={'#888'} />
                        <div className={styles.downloadText} >Google Play</div>
                    </div></a>
                </div>
            </div>
            <div className={styles.bottom} >
                <div>
                    <h3>문의</h3>
                    <a rel="noreferrer" target='_blank' href="mailto:alkatel@naver.com">이메일</a>
                    {/* <a rel="noreferrer" target='_blank' href="http://pf.kakao.com/_ILHqs/chat" >카카오톡</a> */}
                    <a rel="noreferrer" target='_blank' href="mailto:alkatel@naver.com">광고 / 제휴</a>
                </div>
                <div>
                    <h3>딥스펀지 주식회사</h3>
                    <span>대표자 홍성욱 | 사업자 등록번호 286-86-01500</span>
                    <span>대표자번호 010-6613-0703</span>
                    <span>사업장주소 서울특별시 강남구 봉은사로 129-1, 7층 702-MS17호(논현동)</span>
                    {/* <span>통신판매업</span> */}
                    <span>
                        <a rel="noreferrer" target='_blank' href="https://38do.kr/privacy-policy">개인정보 처리방침</a>
                        <span style={{ color: '#888' }} > | </span>
                        <a rel="noreferrer" target='_blank' href="https://38do.kr/agreement">서비스 이용약관</a>
                        <span style={{ color: '#888' }} > | </span>
                        <a rel="noreferrer" target='_blank' href="https://38do.kr/agreement-location">위치기반서비스 이용약관</a>
                    </span>
                    <span>@ 2021 DeepSponge All rights reserved</span>
                </div>
            </div>
        </div>
    </>
}


export default Home
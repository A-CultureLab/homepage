import { APPSTORE_URL, PLAYSTORE_URL } from '../../../constants/values';

import { useEffect } from 'react'

const Download = () => {

    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
        console.log(userAgent)
        if (userAgent.indexOf('android') > -1) {
            //안드로이드
            console.log(PLAYSTORE_URL)
            window.location.href = PLAYSTORE_URL
        } else if (userAgent.indexOf("iphone") > -1 || userAgent.indexOf("ipad") > -1 || userAgent.indexOf("ipod") > -1) {
            //IOS
            console.log(APPSTORE_URL)
            window.location.href = APPSTORE_URL
        } else {
            //아이폰, 안드로이드 외
            window.location.href = 'https://38do.kr'
        }
    }, [])

    return null
}

export default Download

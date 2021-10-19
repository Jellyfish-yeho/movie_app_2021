import React from "react";
import './About.css'
import myImg from '../image/흐물.jpg'

//Route 컴포넌트가 그려줄 컴포넌트에는 항상 props값이 전달되고, 이 props에 마음대로 데이터를 담아 보낼 수 있다. 
function About(props){
    console.log(props);
    return (
        <div>
            <div className="about__container">
                <span>
                "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds. And that's what you've given me. That's what I'd hoped to give you forever."
                </span>
                <span>- Nicholas, The Notebook.</span>
            </div>
            <div className="about__introduction">
                <img src={myImg} alt="myImage"/>
                <span>
                    니꼬쌤의 영화 앱 클론코딩 페이지입니다. 아직 미숙하지만 도전해 봤습니다. CSS가 제일 어려워요 😇
                </span>
            </div>
        </div>
    )
}

export default About;
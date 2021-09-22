import react from "react";
import './About.css'

//Route 컴포넌트가 그려줄 컴포넌트에는 항상 props값이 전달되고, 이 props에 마음대로 데이터를 담아 보낼 수 있다. 
function About(props){
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "Freedom is the freedom to say that two plus make four. If that is granted, all else follows."
            </span>
            <span>- George Orwell, 1984</span>
        </div>
    )
}

export default About;
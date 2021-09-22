import React from "react";

//props의 history 에서 url 변경 함수를 사용할 수 있다. 
//직접 주소창에 detail을 입력해서 들어가서 location의 state값이 비어 있는 경우, history를 사용해서 url을 / (home)로 강제 수정한다. 즉, redirect이동.

//render -> componentDidMount 순서대로 함수를 실행하므로 render에도 redirect 코드를 추가해야 한다. 
class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push('/');
        }
    }

    render(){
        const { location } = this.props;
        if(location.state){
           return <span>{location.state.title}</span>;
        }else{
            return null;
        }
    }
}



export default Detail;
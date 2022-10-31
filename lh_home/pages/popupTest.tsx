import {useEffect} from "react";

const handlePopup = () => {
    const newWindow = window.open("http://localhost:3100", "test", "top=10, left=10, width=400, height=500, status=no, toolbar=no, resizable=no");

    if(newWindow){
        const pollTimer = window.setInterval(function() {
            // @ts-ignore
            if (newWindow.closed) {
                window.clearInterval(pollTimer);
                console.log("팝업 닫기...")
            }
        }, 200);
    }
}

const test = () => {
    useEffect(() => {
        handlePopup();
    },[])

    return(
        <button onClick={() => handlePopup()}>버튼 클릭</button>
    )
}

export default test;
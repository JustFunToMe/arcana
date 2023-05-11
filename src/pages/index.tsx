import styled from "styled-components";
import { useState } from "react";
import Card from "@/components/card";

    export default function Home() {

    const [randomNum, setRandomNum] = useState(0);
    const [randomNum2, setRandomNum2] = useState(0);

    /*
    1. 배열을 만든다.
    2. 배열의 길이중에서 랜덤한 숫자를 뽑는다.
    3. 뽑은 숫자들을 setState로 저장한다.
    4. 
    */

    const onRandom = () => {
        const r1 = Math.floor(Math.random() * (15 - 1) + 1);
        let r2 = Math.floor(Math.random() * (15 - 1) + 1);

        while (r1 === r2) {
            r2 = Math.floor(Math.random() * (15 - 1) + 1);

        }

        console.log("r1", randomNum);
        console.log("r2", randomNum2);
        console.log("--------------------");

        setRandomNum(r1);
        setRandomNum2(r2);

    };

    return (
        <Total>
            <div>
                <h1>황후 알카의 도?심 뽑!기</h1>
            </div>
            <CardWrap>
                <Card randomNum={randomNum} />
                <Card randomNum={randomNum2} />
            </CardWrap>
            <CardOpen>
                <CardBtn onClick={onRandom}>도전!</CardBtn>
            </CardOpen>
        </Total>
    );
}
const Total = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`;

const CardWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;

    gap: 10vw;

    background-color: gray;

    width: 55vw;
    height: 60vh;
`;

const CardView = styled.div`
    position: relative;
    display: flex;
    width: 15vw;
    height: 50vh;

    background-color: white;
`;

const CardOpen = styled.div`
    display: flex;
`;

const CardBtn = styled.button`
    width: 10vw;
    height: 5vh;

    margin-top: 5vh;
`;

import styled from "styled-components";
import { useState } from "react";
import Image from "next/image";
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
                <Image
                    src={"/background_modi.png"}
                    alt={"배경이미지"}
                    fill
                    sizes="10vw"
                ></Image>
                <Card randomNum={randomNum} />
                <Card randomNum={randomNum2} />
            </CardWrap>
            <CardOpen>
                <CardBtn onClick={onRandom}>
                    <Image
                        src={"/arousal_potion.png"}
                        alt={"각성물약"}
                        fill
                        sizes="10vw"
                    ></Image>
                    <div>각성물약먹기</div>
                </CardBtn>
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

    background-color: #1b1918;
    h1 {
        color: white;
    }
`;

const CardWrap = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 5vh;

    gap: 5.5vw;

    background-color: gray;

    width: 40vw;
    height: 65vh;
`;

const CardOpen = styled.div`
    display: flex;
`;

const CardBtn = styled.button`
    position: relative;
    width: 5vw;
    height: 5vw;

    margin-top: 5vh;

    :hover {
        cursor: pointer;
    }

    :active {   
        transform: translateY(2px);
    }
`;

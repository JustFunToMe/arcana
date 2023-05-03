import styled from "styled-components";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const cardList = [
        "/samdusa.png",
        "/guanggi.png",
        "/backluck.png",
        "/busick.png",
        "/ghost.png",
        "/dotae.png",
        "/balance.png",
        "/simpan.png",
        "/moon.png",
        "/star.png",
        "/royal.png",
        "/destiny_call.png",
        "/clown.png",
        "/exultation.png",
    ];

    const [randomNum, setRandomNum] = useState(0);
    const [randomNum2, setRandomNum2] = useState(1);

    const onRandom = () => {
        setRandomNum(Math.floor(Math.random() * 14));
        setRandomNum2(Math.floor(Math.random() * 14));

        if (randomNum === randomNum2) {
          setRandomNum2(Math.floor(Math.random() * 14));
        }
        console.log("r1", randomNum);
        console.log("r2", randomNum2);
    };

    return (
        <Total>
            <div>
                <h1>황후 알카의 도?심 뽑!기</h1>
            </div>
            <CardWrap>
                <CardView>
                    <Image
                        src={`${cardList[randomNum]}`}
                        alt={`${cardList[0]}`}
                        fill
                        sizes="10vw"
                    ></Image>
                </CardView>
                <CardView>
                    <Image
                        src={`${cardList[randomNum2]}`}
                        alt={`${cardList[0]}`}
                        fill
                        sizes="10vw"
                    ></Image>
                </CardView>
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

import styled from "styled-components";
import Image from "next/image";

interface CardProps {
    randomNum: number;
}

function Card(props: CardProps) {
    const cardList = [
        "/nomal.png",
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

    const { randomNum } = props;

    return (
        <CardView>
            <Image
                src={`${cardList[randomNum]}`}
                alt={`${cardList[0]}`}
                fill
                sizes="10vw"
            ></Image>
        </CardView>
    );
}

export default Card;

const CardView = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 26vh;
    margin-right: 1vw;
    width: 14vw;
    height: 39vh;

    background-color: white;
`;

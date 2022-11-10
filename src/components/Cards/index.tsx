import { CardProps } from "types/Deck"
import Image from "next/image"
import * as S from './styles'
import Slider, { SliderSettings } from 'components/Slider'

interface DeckProps {
  cards: CardProps[]
}

const settings: SliderSettings = {
  slidesToShow: 7.2,
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToScroll: 1,
  initialSlide: 5,
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        slidesToShow: 5.2
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.2
      }
    },
    {
      breakpoint: 570,
      settings: {
        slidesToShow: 2.2
      }
    },
    {
      breakpoint: 375,
      settings: {
        slidesToShow: 1.2
      }
    }
  ]
}

/*

  code: string;
  image: string; 
  images: ImagesProps;
  value: string;
  suit: string;
*/

const Cards = ({cards}: DeckProps) => {
  return (
    <S.Wrapper>
      <Slider settings={settings}>
        {cards.map((item, index) => (
          <S.Card key={index}>
            <S.Description>{item.value} of {item.suit}</S.Description>
            <Image src={item.image} priority alt="Carta do baralho" width={226/2} height={314/2} />
          </S.Card>
        ))}
      </Slider>
    </S.Wrapper>
  )
}

export default Cards
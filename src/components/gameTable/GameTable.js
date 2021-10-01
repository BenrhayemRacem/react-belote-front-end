import {cardArray} from "../../data/cardData";

export const GameTable = () => {
  return (
      <>
      <h1>
        GameTable
      </h1>

          {
              cardArray.map(element =>element.cards.map(card =><img src={card.src} style={{width: 80}}/> ))
          }


      </>
          )
}
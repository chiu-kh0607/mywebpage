import { useTranslation } from "react-i18next";
import { CardItem } from "../types/Card";
import Card from "./Card";
type ItemProps = {
  cards: CardItem[];
  clickCardEvent: (cardId: number | null) => void;
};
const CardList: React.FC<ItemProps> = ({ cards, clickCardEvent }) => {
  return (
    <>
      <span className="hidden sm:block">
        <div className="grid gap-4 grid-cols-4 grid-rows-2 content-center ">
          {cards &&
            cards.map((card) => {
              return <Card card={card} clickCardEvent={clickCardEvent} />;
            })}
        </div>
      </span>
      <span className="block sm:hidden">
        <div className="grid gap-4 grid-cols-1 content-center">
          {cards &&
            cards.map((card) => {
              return <Card card={card} clickCardEvent={clickCardEvent} />;
            })}
        </div>
      </span>
    </>
  );
};
export default CardList;

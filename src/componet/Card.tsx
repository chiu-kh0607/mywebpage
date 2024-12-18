import { CardItem } from "../types/Card";
type ItemProp = {
  card: CardItem;
  clickCardEvent: (card: CardItem | null) => void;
};
const Card: React.FC<ItemProp> = ({ card, clickCardEvent }) => {
  return (
    <div
      className="relative bg-white rounded-md shadow-md h-48"
      onClick={() => clickCardEvent(card)}
    >
      <img
        className="absolutive inset-0 z-0 w-full h-full rounded-md "
        src={card.img}
        loading="lazy"
        alt={""}
      />
      <div className="opacity-0 hover:bg-opacity-50 hover:opacity-100 duration-300 absolute inset-0 z-10 bg-black text-white rounded-md flex justify-center text-center items-center p-2">
        <span>{card.name}</span>
      </div>
    </div>
  );
};

export default Card;

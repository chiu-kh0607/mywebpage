import { CardItem } from "../types/Card";
import { useTranslation } from "react-i18next";

type ItemProp = {
  selectedCardId: number | null;
  handleClick: (cardId: number | null) => void;
  cardList: CardItem[];
};
const CardDetail: React.FC<ItemProp> = ({ selectedCardId, handleClick, cardList }) => {
  var selectedCard: CardItem | undefined;
  if (selectedCardId != null) {
    selectedCard = cardList.filter((x) => (x.id = selectedCardId))[0];
    return (
      <div className="flex bg-white rounded-md shadow-md min-h-[468px] relative">
        <span className="absolute top-3 right-5 text-18" onClick={() => handleClick(null)}>
          ✕
        </span>
        <div className="w-1/4">
          <img className="h-full w-full object-cover" src={selectedCard?.img} />
        </div>
        <div className="w-3/4">
          <div className="p-2 font-bold text-[24px]">{selectedCard?.name}</div>
          <div className="p-2">
            {selectedCard?.description.map((i) => (
              <div>{i}</div>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};
export default CardDetail;

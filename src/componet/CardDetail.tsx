import { CardItem } from "../types/Card";

type ItemProp = {
  selectedImg: JSX.Element;
  selectedCard: CardItem | undefined;
  handleClick: (card: CardItem | null) => void;
};
const CardDetail: React.FC<ItemProp> = ({ selectedImg, selectedCard, handleClick }) => {
  return (
    // <div className=" bg-white rounded-md shadow-md min-h-[468px] relative flex-row">
    //   <span className="absolute top-3 right-5 text-18" onClick={() => handleClick(null)}>
    //     ✕
    //   </span>
    //   <div className="w-1/4 h-full">
    //     <img className="h-full w-full object-cover" src={selectedCard?.img} />
    //   </div>
    //   <div className="w-3/4">
    //     <div className="p-2 font-bold text-[24px]">{selectedCard?.name}</div>
    //     <div className="p-2">
    //       {selectedCard?.description.map((i) => (
    //         <div>{i}</div>
    //       ))}
    //     </div>
    //   </div>
    // </div>

    <div className="flex bg-white rounded-md shadow-md min-h-[468px] relative">
      <span className="absolute top-3 right-5 text-18" onClick={() => handleClick(null)}>
        ✕
      </span>
      <div className="w-1/4">{selectedImg}</div>
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
};
export default CardDetail;

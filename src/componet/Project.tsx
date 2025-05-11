import { useState } from "react";
import CardList from "./CardList";
import { CardItem } from "../types/Card";
import CardDetail from "./CardDetail";
import { useTranslation } from "react-i18next";

const Project = () => {
  var cardList: CardItem[] = [
    {
      id: 1,
      img: "./Project1.jpg",
      name: "Life Insurance Management System",
      description: ["・Create basic design", "・Create Azure Function", "・Testing, Maintenance"],
      technique: "",
    },
    {
      id: 2,
      img: "./Project2.jpg",
      name: "Bank Company's Staff Management System",
      description: ["・Update basic design", "・Trouble shooting"],
      technique: "",
    },
    {
      id: 3,
      img: "./Project3.jpg",
      name: "Supply Chain Front-end System",
      description: ["・Update basic design", "・Update UI, receipt layout"],
      technique: "",
    },
    {
      id: 4,
      img: "./Project4.jpg",
      name: "Maker Leadership Company's Device Communication System",
      description: [
        "・Update basic design",
        "・Develop batch communicates by TCP message",
        "・Testing",
      ],
      technique: "",
    },
  ];
  const { t } = useTranslation();
  const cardListObject: any = t("project.cards", { returnObjects: true });
  cardList = cardListObject;
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);
  const [selectedPageFlag, setSelectedPageFlag] = useState(false);
  const handleClick = (cardId: number | null) => {
    setSelectedCardId(cardId);
    if (cardId != null) {
      setSelectedPageFlag(true);
    } else {
      setSelectedPageFlag(false);
    }
  };

  return (
    <div className="flex flex-col text-gray sm:h-screen min-h-screen p-10">
      <div className="flex flex-col font-semibold p-14 sm:pb-20 items-center justify-center">
        <span className=" md:text-[56px] text-[28px] text-blue-500">
          {t("project.description")}
        </span>
        <span className=" text-12 text-gray-600 text-center">{t("project.subDescription")}</span>
      </div>
      <div>
        {!selectedPageFlag && (
          <div className="p-5">
            <CardList cards={cardList} clickCardEvent={handleClick}></CardList>
          </div>
        )}
        {selectedPageFlag && (
          <CardDetail
            handleClick={handleClick}
            selectedCardId={selectedCardId}
            cardList={cardList}
          />
        )}
      </div>
    </div>
  );
};
export default Project;

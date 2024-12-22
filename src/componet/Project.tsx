import { useEffect, useState } from "react";
import CardList from "./CardList";
import { CardItem } from "../types/Card";
import CardDetail from "./CardDetail";

const Project = () => {
  // const cardList=([
  //   { id: 1, img: "", name: "", describe: "", technique: "" },
  // ]);
  const cardList = [
    {
      id: 1,
      img: "/Project1.jpg",
      name: "Dai-Ichi Insurance Management System",
      description: ["・Create basic design", "・Create Azure Function", "・Testing, Maintenance"],
      technique: "",
    },
    {
      id: 2,
      img: "/Project2.jpg",
      name: "Staff Management System",
      description: ["・Update basic design", "・Trouble shooting"],
      technique: "",
    },
    {
      id: 3,
      img: "/Project3.jpg",
      name: "Supply Chain Front-end System",
      description: ["・Update basic design", "・Update UI, receipt layout"],
      technique: "",
    },
    {
      id: 4,
      img: "/Project4.jpg",
      name: "Hitachi Device Communication System",
      description: [
        "・Update basic design",
        "・Develop batch communicates by TCP message",
        "・Testing",
      ],
      technique: "",
    },
    {
      id: 5,
      img: "/Project5.jpg",
      name: "IHI Staff Management System",
      description: [
        "・Develop a webpage about working hour application",
        "・Tune stored procedures",
      ],
      technique: "",
    },
    {
      id: 6,
      img: "/Project6.jpg",
      name: "Suica Card Mobile Application",
      description: ["・Fix bugs in the Application UI"],
      technique: "",
    },
    {
      id: 7,
      img: "/Project7.jpg",
      name: "JASRAC License Fee System",
      description: ["・Develop batch importing income from records companies"],
      technique: "",
    },
    {
      id: 8,
      img: "/Project8.jpg",
      name: "7 & I holding Staff Management System",
      description: ["・Create basic design", "Develop batch transfer staff data"],
      technique: "",
    },
  ];
  const [selectedCard, setSelectedCard] = useState<CardItem>();
  const [selectedPageFlag, setSelectedPageFlag] = useState(false);
  const handleClick = (card: CardItem | null) => {
    console.log(card);
    if (card != null) {
      setSelectedCard(card);
      setSelectedPageFlag(true);
    } else {
      setSelectedCard(undefined);
      setSelectedPageFlag(false);
    }
  };
  var selectedImg = <img className="h-full w-full object-cover" src={selectedCard?.img} />;
  useEffect(() => {
    selectedImg = <img className="h-full w-full object-cover" src={selectedCard?.img} />;
    console.log({ selectedPageFlag });
  });

  return (
    <div className="font-poppins text-gray-600">
      <div className="flex flex-col text-gray sm:h-screen min-h-screen p-10">
        <div className="flex font-semibold md:text-[72px] text-[48px] pb-14 sm:pb-20">
          <h1>Project</h1>
        </div>
        <div>
          {!selectedPageFlag && (
            <div className="p-5">
              <CardList cards={cardList} clickCardEvent={handleClick}></CardList>
            </div>
          )}
          {/* <div
            className={selectedPageFlag + " bg-white rounded-md shadow-md min-h-[468px] relative"}
          >
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
          </div> */}
          {selectedPageFlag && (
            <CardDetail
              handleClick={handleClick}
              selectedCard={selectedCard}
              selectedImg={selectedImg}
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default Project;

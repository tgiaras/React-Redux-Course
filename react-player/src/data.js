import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Lax Incense",
      artist: "Mama Aiuto, Daphné",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#0e271a", "#45240e"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
    },
    {
      name: "Sleepover",
      artist: "Nymano, JK the Sage",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#312549", "#3A4D8F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10130",
    },
    {
      name: "Rest Until Dark",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/c209a7df7b9bc133dfff73ce86ebc3c57c2b73dd-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#326E8C", "#FFF9E8"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10015",
    },
  ];
}

export default chillHop;

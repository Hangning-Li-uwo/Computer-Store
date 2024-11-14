
import iMacImage from "../../static/images/iMac.png";
import MacProImage from "../../static/images/MacPro.png";
import AirPodsMaxImage from "../../static/images/AirPodsMax.png";
import HomePodMiniImage from "../../static/images/HomePodMini.png";


const ITEM_LIST = [
  {
    id: 1,
    name: "iMac",
    manufacturer: "Apple",
    title: "iMac - $1,699.00",
    description:
      "Image Playground. Create fun, original images based on a description, a concept or even a person from your Photos library.",
    image: iMacImage,
  },
  {
    id: 2,
    name: "Macbook Pro",
    manufacturer: "Apple",
    title: "Macbook Pro - $2,699.00",
    description:
      "MacBook Pro features the most advanced lineup of chips ever built for a pro laptop.",
    image: MacProImage,
  },
  {
    id: 3,
    name: "AirPods Max",
    manufacturer: "Apple",
    title: "AirPods Max - $779.00",
    description:
      "AirPods Max deliver stunningly detailed, high‑fidelity audio. Personalised Spatial Audio with dynamic head tracking for sound that surrounds you. ",
    image: AirPodsMaxImage,
  },
  {
    id: 4,
    name: "HomePod Mini",
    manufacturer: "Apple",
    title: "HomePod Mini - $129.00",
    description:
      "Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size. ",
    image: HomePodMiniImage,
  },
];

export default ITEM_LIST;

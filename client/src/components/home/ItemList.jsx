import iMacImage from "../../static/images/iMac.png";
import MacProImage from "../../static/images/MacPro.png";
import AirPodsMaxImage from "../../static/images/AirPodsMax.png";
import HomePodMiniImage from "../../static/images/HomePodMini.png";
import MacAir13Image from "../../static/images/MacAir13inchM2.png";
import AirPodsPro2Image from "../../static/images/AirPodsPro2.png";
import Alienwarex16R2Image from "../../static/images/Alienwarex16R2.png";
import ALIENWAREm18R2Image from "../../static/images/ALIENWARE m18 R2.png";
import ALIENWAREAURORAR16Image from "../../static/images/ALIENWARE AURORA R16.png";
import AlienwareGamingMouseAW610MImage from "../../static/images/AW610M.png";
import AlienwareGamingMouseAW620MImage from "../../static/images/AW620M.png";
import AlienwareHeadsetAW920HImage from "../../static/images/AW920H.png";
import AlienwareKeyboardAW510KImage from "../../static/images/AW510K.png";
import SurfaceLaptopImage from "../../static/images/SurfaceLaptop.png";
import SurfaceLaptopStudio2Image from "../../static/images/SurfaceLaptopStudio2.png";
import SurfaceArcMouseImage from "../../static/images/SurfaceArcMouse.png";
import RazerHanboChromaLiquidCoolerImage from "../../static/images/Razer Hanbo Chroma RGB AIO Liquid Cooler.png";
import RazerThunderbolt4DockChromaImage from "../../static/images/RazerThunderbolt4DockChroma.png";
import RazerMonitorLightBarImage from "../../static/images/RazerAetherMonitorLightBar.png";
import RazerKittyEarHeadsetImage from "../../static/images/RazerKittyEarHeadset.png";
import RazerHuntsmanV2TenkeylessImage from "../../static/images/Razer Huntsman V2 Tenkeyless.png";
import RazerBasiliskV3ProImage from "../../static/images/Razer Basilisk V3 Pro.png";

import RazerRGBMouseMatImage from "../../static/images/Razer RGB Mouse Mat.png";
import RazerBlade15Image from "../../static/images/RazerBlade15.png";
import RazerAetherLampProImage from "../../static/images/Razer Aether Lamp Pro.png";
import RazerSeirenV3ChromaImage from "../../static/images/Razer Seiren V3 Chroma.png";
import RazerKiyoProImage from "../../static/images/Razer Kiyo Pro.png";
import ViprTechGhostGamingComputerImage from "../../static/images/ViprTechGhost Gaming Computer.png";
import CLXRAGamingDesktopImage from "../../static/images/CLX RA Gaming Desktop.png";
import LofreeFoundationKeyboardImage from "../../static/images/LofreeFoundationKeyboard.png";
import LofreeTransparentKeyboardImage from "../../static/images/LofreeTransKeyboard.png";
import LofreeMoruKeyboardImage from "../../static/images/LofreeMoruKeyboard1.png";
import LofreePetalMouseImage from "../../static/images/LofreePetalMouse.png";
import HPChromebookPlusImage from "../../static/images/HP Chromebook Plus.png";


const ITEM_LIST = [
  {
    id: 1,
    name: "iMac",
    manufacturer: "Apple",
    title: "iMac - $1,699.00",
    description:
      "Image Playground. Create fun, original images based on a description, a concept or even a person from your Photos library.",
    image: iMacImage,
    price: 1699.00,
  },
  {
    id: 2,
    name: "Macbook Pro",
    manufacturer: "Apple",
    title: "Macbook Pro - $2,699.00",
    description:
      "MacBook Pro features the most advanced lineup of chips ever built for a pro laptop.",
    image: MacProImage,
    price: 2699.00,
  },
  {
    id: 3,
    name: 'MacBook Air 13" M2',
    manufacturer: "Apple",
    title: 'MacBook Air 13" M2 - $999.00',
    description:
      "MacBook Air sails through work and play. You can express yourself and get things done effortlessly with Apple Intelligence.",
    image: MacAir13Image,
    price: 999.00,
  },
  {
    id: 4,
    name: 'Alienware Gaming Mouse AW920HImage',
    manufacturer: "Alienware",
    title: 'Alienware x16 R2 - $2,999.99',
    description:
      "Alienware's most premium gaming laptop, made superior, now with the elevated performance of Intel® Core™ Ultra processors.",
    image: Alienwarex16R2Image,
    price: 2999.99,
  },
  {
    id: 5,
    name: 'Alienware m18 R2 Gaming Laptop',
    manufacturer: "Alienware",
    title: 'Alienware m18 R2 - $3,099.99',
    description:
      "Alienware's most powerful 18-inch gaming laptop. Downsize from your old desktop and scale up with the ultimate in gaming laptop performance.",
    image: ALIENWAREm18R2Image,
    price: 3099.99,
  },
  {
    id: 6,
    name: 'Alienware Aurora R16 Desktop',
    manufacturer: "Alienware",
    title: 'Alienware Aurora R16 Desktop - $2,549.99',
    description:
      "Alienware's most advanced and most powerful desktop yet - perfect for gamers and streamers.",
    image: ALIENWAREAURORAR16Image,
    price: 2549.99,
  },

  {
    id: 7,
    name: 'ViprTechGhost Gaming Computer',
    manufacturer: "ViprTechGhost",
    title: 'ViprTechGhost Gaming Computer - $1593.99',
    description:
      "The ViprTech Ghost (AMD) gaming PC comes fully equipped to take on the most graphically intensive video games.",
    image: ViprTechGhostGamingComputerImage,
    price: 1593.99,
  },
  
  {
    id: 8,
    name: 'CLX RA Gaming Desktop',
    manufacturer: "ViprTechGhost",
    title: 'CLX RA Gaming Desktop - $9,909.99',
    description:
      "This powerful CLX RA is driven by an Intel Core i9 14900K 3.2GHz 24-Core processor, and 96GB of quick as lightning DDR5 memory! Coupled with GeForce RTX 4090 24GB graphics, for eye-stunning visuals.",
    image: CLXRAGamingDesktopImage,
    price: 9909.99,
  },
  {
    id: 9,
    name: 'HP Chromebook Plus',
    manufacturer: "HP",
    title: 'HP Chromebook Plus - $649.99',
    description:
      "Ramped up to give you more power for multi-tasking with a reputable Intel® Core™ i3 Processor1, speedy memory, and a large, vibrant display that boots up instantly.",
    image: HPChromebookPlusImage,
    price: 649.99,
  },
  

  {
    id: 20,
    name: 'Surface Laptop',
    manufacturer: "Microsoft",
    title: 'Surface Laptop - $1,449.99',
    description:
      "Work and play worry-free. For added peace of mind, Microsoft Complete has you covered for mechanical breakdown and accidental damage from handling.",
    image: SurfaceLaptopImage,
    price: 1449.99,
  },
  {
    id: 27,
    name: 'Surface Laptop Studio2',
    manufacturer: "Microsoft",
    title: 'Surface Laptop Studio2 - $2,699.99',
    description:
      "Over twice the computing power makes this device the most powerful Surface yet.",
    image: SurfaceLaptopStudio2Image,
    price: 2699.99,
  },

  {
    id: 28,
    name: 'Razer Blade 15',
    manufacturer: "Razer",
    title: 'Razer Blade 15 - $2,699.99',
    description:
      "With the Razer Blade 15, true power will always be wherever you are.",
    image: RazerBlade15Image,
    price: 2699.99,
  },


  //================= Accessories =================

  {
    id: 30,
    name: 'Razer Huntsman V2 Tenkeyless',
    manufacturer: "Razer",
    title: 'Razer Huntsman V2 Tenkeyless - $124.99',
    description:
      "Razer Linear Optical Switches Gen-2, Doubleshot PBT Keycaps, Sound Dampening Foam",
    image: RazerHuntsmanV2TenkeylessImage,
    price: 124.99,
  },
  {
    id: 31,
    name: 'Razer Headset with Kitty Ears V2',
    manufacturer: "Razer",
    title: 'Razer Kitty Ears V2 - $97.99',
    description:
      "Kitty Ears, Stream Reactive Lighting, Razer HyperClear Cardioid Mic",
    image: RazerKittyEarHeadsetImage,
    price: 97.99,
  },
  {
    id: 32,
    name: 'Razer RGB Mouse Mat',
    manufacturer: "Razer",
    title: 'Razer RGB Mouse Mat - $139.99',
    description:
      "Edge-to-Edge Backlit Design, 15-Zone Chroma Lighting, Integrated USB 2.0 Port",
    image: RazerRGBMouseMatImage,
    price: 139.99,
  },
  {
    id: 33,
    name: 'Razer Kiyo Pro',
    manufacturer: "Razer",
    title: 'Razer Kiyo Pro - $168.99',
    description:
      "USB Camera with High-Performance Adaptive Light Sensor",
    image: RazerKiyoProImage,
    price: 168.99,
  },
  
  {
    id: 34,
    name: 'Razer Basilisk V3 Pro',
    manufacturer: "Razer",
    title: 'Razer Basilisk V3 Pro - $178.99',
    description:
      "Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel",
    image: RazerBasiliskV3ProImage,
    price: 178.99,
  },
  {
    id: 35,
    name: 'Razer Aether Lamp Pro',
    manufacturer: "Razer",
    title: 'Razer Aether Lamp Pro - $139.99',
    description:
      "GB LED Lamp with Multi-zone Lighting",
    image: RazerAetherLampProImage,
    price: 139.99,
  },
  {
    id: 36,
    name: 'Razer Seiren V3 Chroma',
    manufacturer: "Razer",
    title: 'Razer Seiren V3 Chroma - $189.99',
    description:
      "RGB USB Microphone with Tap-to-Mute",
    image: RazerSeirenV3ChromaImage,
    price: 189.99,
  },
  {
    id: 37,
    name: 'Razer Aether Monitor Light Bar',
    manufacturer: "Razer",
    title: 'Razer Aether Monitor Light Bar - $179.99',
    description:
      "Front-and-Back Dual Lighting, ultra-Wide Natural Illumination, compatible with all Monitor Sizes",
    image: RazerMonitorLightBarImage,
    price: 179.99,
  },
  {
    id: 38,
    name: 'Razer Thunderbolt4 Dock Chroma',
    manufacturer: "Razer",
    title: 'Razer Thunderbolt4 Dock Chroma - $408.99',
    description:
      "Expanded capabilities with 10 ports in one. Dock compatible with Windows and Mac devices",
    image: RazerThunderbolt4DockChromaImage,
    price: 408.99,
  },
  {
    id: 39,
    name: 'Razer Hanbo Chroma Liquid Cooler',
    manufacturer: "Razer",
    title: 'Razer Hanbo Chroma Liquid Cooler - $227.99',
    description:
      "OIA cooler has an optimized intake design to ensure greater heat transfer combined with fluid dynamic bearings for silent operation. ",
    image: RazerHanboChromaLiquidCoolerImage,
    price: 227.99,
  },
  {
    id: 41,
    name: 'Lofree Petal Mouse',
    manufacturer: "Lofree",
    title: 'Lofree Petal Mouse - $69.00',
    description:
      "Drawing inspiration from the design of makeup foundations, our keyboard showcases a palette of foundation shades.",
    image: LofreePetalMouseImage,
    price: 69.00,
  },
  {
    id: 42,
    name: 'Lofree Foundation Keyboard',
    manufacturer: "Lofree",
    title: 'Lofree Foundation Keyboard - $239.00',
    description:
      "Drawing inspiration from the design of makeup foundations, our keyboard showcases a palette of foundation shades.",
    image: LofreeFoundationKeyboardImage,
    price: 239.00,
  },
  {
    id: 43,
    name: 'Lofree Moru Keyboard',
    manufacturer: "Lofree",
    title: 'Lofree 1% Moru Keyboard - $239.00',
    description:
      "Discover the 1% Moru, a 68 layout-keyboard designed not just for typing, but for transforming everyday spaces into havens of serenity. ",
    image: LofreeMoruKeyboardImage,
    price: 239.00,
  },
  {
    id: 44,
    name: 'Lofree Transparent Keyboard',
    manufacturer: "Lofree",
    title: 'Lofree 1% Transparent Keyboard - $219.00',
    description:
      "Drawing inspiration from the design of makeup foundations, our keyboard showcases a palette of foundation shades.",
    image: LofreeTransparentKeyboardImage,
    price: 219.00,
  },
  
  {
    id: 45,
    name: 'Surface Arc Mouse',
    manufacturer: "Microsoft",
    title: 'Surface Arc Mouse - $99.99',
    description:
      "Slim, light, and ready to travel, Surface Arc Mouse is designed to conform to your hand and snaps flat to fit easily in your bag.",
    image: SurfaceArcMouseImage,
    price: 99.99,
  },
  {
    id: 46,
    name: 'Alienware Keyboard AW510K',
    manufacturer: "Alienware",
    title: 'Alienware Keyboard AW510K - $179.99',
    description:
      "A beautifully designed, full-featured gaming keyboard offering programmable keys and dedicated volume control. Made for ultimate performance.",
    image: AlienwareKeyboardAW510KImage,
    price: 179.99,
  },
  {
    id: 47,
    name: 'Alienware Headset AW920H',
    manufacturer: "Alienware",
    title: 'Alienware Headset AW920H - $189.99',
    description:
      "Hear every step and relay every command with a gaming headset that supports Dolby Atmos®, Active Noise Cancelling and versatile connection options.",
    image: AlienwareHeadsetAW920HImage,
    price: 189.99,
  },
  {
    id: 48,
    name: 'Alienware Gaming Mouse AW620M',
    manufacturer: "Alienware",
    title: 'Alienware Gaming Mouse AW620M - $137.99',
    description:
      "Conquer gaming marathons with a wireless mouse that’s crafted with 26,000 DPI, reliable connectivity, robust battery life.",
    image: AlienwareGamingMouseAW620MImage,
    price: 137.99,
  },
  {
    id: 49,
    name: 'Alienware Gaming Mouse AW610',
    manufacturer: "Alienware",
    title: 'Alienware Gaming Mouse AW610 - $109.99',
    description:
      "Dual mode wired & wireless gaming mouse with rechargeable lithium ion battery & seven programmable buttons for performance that takes no prisoners.",
    image: AlienwareGamingMouseAW610MImage,
    price: 109.99,
  },
  
  
  {
    id: 50,
    name: 'AirPods Pro 2',
    manufacturer: "Apple",
    title: 'AirPods Pro 2 - $249.00',
    description:
      "irPods Pro 2 pairs with Apple Vision Pro to deliver Lossless Audio with ultra-low latency, for an unprecedented sound experience.",
    image: AirPodsPro2Image,
    price: 249.00,
  },
  {
    id: 51,
    name: "AirPods Max",
    manufacturer: "Apple",
    title: "AirPods Max - $779.00",
    description:
      "AirPods Max deliver stunningly detailed, high‑fidelity audio. Personalised Spatial Audio with dynamic head tracking for sound that surrounds you. ",
    image: AirPodsMaxImage,
    price: 779.00,
  },
  {
    id: 52,
    name: "HomePod Mini",
    manufacturer: "Apple",
    title: "HomePod Mini - $129.00",
    description:
      "Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size. ",
    image: HomePodMiniImage,
    price:129.00,
  },
  
];

export default ITEM_LIST;


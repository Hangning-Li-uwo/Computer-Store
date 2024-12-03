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

import LenovoImage from "../../static/images/Levono.png";
import AsusRogImage from "../../static/images/AsusRog.png";
import ViprTechReaper3Image from "../../static/images/ViprTechReaper3.png";
import ViprTechAvalanche2Image from "../../static/images/ViprTechAvalanche2.png";
import ASUSROGG16Image from "../../static/images/ASUSROGG16.png";
import ZonicGamingPCImage from "../../static/images/ZonicGamingPC.png";
import AQVINImage from "../../static/images/RefurbishedAQVIN.png";
import AcerMonitorImage from "../../static/images/AcerMonitor.png";
import MSICodexRImage from "../../static/images/MSICodexR.png";

import DellProRugged14Image from "../../static/images/DellProRugged14.png";
import Latitude5430RuggedImage from "../../static/images/Latitude5430Rugged.png";
import DellProRugged13Image from "../../static/images/DellProRugged13.png";
import Chromebook3110Image from "../../static/images/Chromebook3110.png";
import DellXPS13Image from "../../static/images/DellXPS13.png";
import Latitude7455Image from "../../static/images/Latitude7455.png";
import DellG16Image from "../../static/images/DellG16.png";
import LenovoLaptopImage from "../../static/images/LenovoLaptop.png";
import RazerNagaLeftImage from "../../static/images/RazerNagaLeftHanded.jpg";

// ******************************* ICONS *******************************
import MemoryIcon from "@mui/icons-material/Memory";
import StorageIcon from "@mui/icons-material/Storage";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import ExtensionSharpIcon from '@mui/icons-material/ExtensionSharp';
<<<<<<< HEAD
import TvIcon from '@mui/icons-material/Tv';
import DesktopWindowsIcon from '@mui/icons-material/DesktopWindows';
import PowerIcon from '@mui/icons-material/Power';
=======
import HomeIcon from '@mui/icons-material/Home';
import MicIcon from '@mui/icons-material/Mic';
import AlbumIcon from '@mui/icons-material/Album';
import Battery50Icon from '@mui/icons-material/Battery50';
import InputIcon from '@mui/icons-material/Input';
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26

const ITEM_LIST = [
  {
    id: 1,
    name: "iMac",
    manufacturer: "Apple",
    title: "iMac - $1,699.00",
    description:
      "Image Playground. Create fun, original images based on a description, a concept or even a person from your Photos library.",
    image: iMacImage,
    price: 1699.0,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Apple M4 chip `,
        bullets: [
          "Run multiple apps, speed through thousands of photos",
          "Effortlessly edit 4K video",
          "With hardware-accelerated ray tracing, graphics look incredible on your favorite game titles",
          "brings serious speed and capability so you can blaze through everyday activities and multitask across apps and video calls. And with a faster Neural Engine, AI features within your apps fly."
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `16GB unified memory`,
        bullets: [
          "Run multiple apps at once while performance remains fast and responsive",
          "Add memory to run more apps simultaneously for faster, more fluid multitasking",
          "Configure iMac with up to 32GB unified memory",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `256GB SSD storage`,
        bullets: [
          "Delivers exceptional performance and speed when you start up your iMac, launch apps, open files, and browse libraries",
          "Configure with up to 2TB of storage",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        description: `Two Thunderbolt / USB 4 ports`,
        bullets: [
          "Thunderbolt ports let you connect high-speed accessories",
          "Models with Gigabit Ethernet allow you to connect to the internet using an Ethernet cable",
        ],
      },
    ],
    size: 3,
  },
  {
    id: 2,
    name: "Macbook Pro",
    manufacturer: "Apple",
    title: "Macbook Pro - $2,699.00",
    description:
      "MacBook Pro features the most advanced lineup of chips ever built for a pro laptop.",
    image: MacProImage,
    price: 2699.0,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Apple M4 Pro chip with 12‑core CPU, 16‑core GPU and 16‑core Neural Engine`,
        bullets: [
          "Run multiple apps, speed through thousands of photos",
          "Effortlessly edit 4K video",
          "With hardware-accelerated ray tracing, graphics look incredible on your favorite game titles",
          "brings serious speed and capability so you can blaze through everyday activities and multitask across apps and video calls. And with a faster Neural Engine, AI features within your apps fly."
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `24GB unified memory`,
        bullets: [
          "Run multiple apps at once while performance remains fast and responsive",
          "Add memory to run more apps simultaneously for faster, more fluid multitasking",
          "Configure iMac with up to 32GB unified memory",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `512GB SSD storage`,
        bullets: [
          "Delivers exceptional performance and speed when you start up your iMac, launch apps, open files, and browse libraries",
          "Configure with up to 2TB of storage",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        description: `Three Thunderbolt 5 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port`,
        bullets: [
          "Thunderbolt ports let you connect high-speed accessories",
          "An SDXC card slot is a type of Secure Digital (SD) card slot designed to support SDXC (Secure Digital eXtended Capacity) memory cards.",
          "The MagSafe 3 port is Apple's latest iteration of its magnetic charging technology, primarily used on MacBook Pro models introduced from 2021 onward."
        ],
      },
    ],
    size: 3,
  },
  {
    id: 3,
    name: 'MacBook Air 13" M2',
    manufacturer: "Apple",
    title: 'MacBook Air 13" M2 - $999.00',
    description:
      "MacBook Air sails through work and play. You can express yourself and get things done effortlessly with Apple Intelligence.",
    image: MacAir13Image,
    price: 999.0,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Apple M3 chip with 8‑core CPU, 8‑core GPU, 16‑core Neural Engine`,
        bullets: [
          "Run multiple apps, speed through thousands of photos",
          "Effortlessly edit 4K video",
          "With hardware-accelerated ray tracing, graphics look incredible on your favorite game titles",
          "brings serious speed and capability so you can blaze through everyday activities and multitask across apps and video calls. And with a faster Neural Engine, AI features within your apps fly."
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `16GB unified memory`,
        bullets: [
          "Run multiple apps at once while performance remains fast and responsive",
          "Add memory to run more apps simultaneously for faster, more fluid multitasking",
          "Configure iMac with up to 32GB unified memory",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `256GB SSD storage`,
        bullets: [
          "Delivers exceptional performance and speed when you start up your iMac, launch apps, open files, and browse libraries",
          "Configure with up to 2TB of storage",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Thunderbolt ports let you connect high-speed accessories",
          "The MagSafe 3 port is Apple's latest iteration of its magnetic charging technology, primarily used on MacBook Pro models introduced from 2021 onward."
        ],
      },
    ],
    size: 3,
  },
  {
    id: 4,
    name: "Alienware x16 R2",
    manufacturer: "Alienware",
    title: "Alienware x16 R2 - $2,999.99",
    description:
      "Alienware's most premium gaming laptop, made superior, now with the elevated performance of Intel® Core™ Ultra processors.",
    image: Alienwarex16R2Image,
    price: 2999.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Intel® Core™ Ultra 7 155H (24 MB cache, 16 cores, up to 4.8 GHz P-Core Turbo)`,
        bullets: [
          "Architecture: Meteor Lake",
          "Cores and Threads: 16 cores (6 Performance, 8 Efficient, 2 Low-Power Efficient) with 22 threads",
          "Base Clock Frequency: 3.8 GHz",
          "Max Turbo Frequency: 4.8 GHz",
          "Integrated Graphics: Intel Arc Graphics with 8 cores"
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `16GB, 2x8GB, LPDDR5X, 7467MT/s`,
        bullets: [
          "Using two modules in a dual-channel configuration improves memory performance compared to a single-channel configuration.",
          "Provides faster data transfer rates and lower power consumption than previous standards.",
          "Higher MT/s translates to faster data transfer rates, improving overall performance in multitasking, gaming, and demanding applications."
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `1 TB, M.2, PCIe NVMe, SSD`,
        bullets: [
          "Provides ample storage space for operating systems, applications, games, and large files like videos or datasets.",
          "A high-speed interface standard for connecting components.",
          "Provides significantly faster data transfer speeds compared to older SATA-based SSDs.",
          "Offers low latency and high throughput, making it ideal for tasks requiring fast read/write speeds."
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Global headset jack",
          "Micro-SD card reader",
          "Type-C Port (Includes USB4®, 15W (3A/5V) Power Delivery, and DisplayPort 1.4)",
          "Type-C Port (Includes USB 3.2 Gen 2, 15W (3A/5V) Power Delivery and DisplayPort 1.4)",
          "HDMI 2.1 Output Port",
          "Type-A USB 3.2 Gen 1 Port with PowerShare",
          "Type-A USB 3.2 Gen 1 Port with PowerShare",
          "Mini Display Port 1.4",
          "Power/DC-In"
        ],
      },
    ],
    size: 3,
  },
  {
    id: 5,
    name: "Alienware m18 R2 Gaming Laptop",
    manufacturer: "Alienware",
    title: "Alienware m18 R2 - $3,099.99",
    description:
      "Alienware's most powerful 18-inch gaming laptop. Downsize from your old desktop and scale up with the ultimate in gaming laptop performance.",
    image: ALIENWAREm18R2Image,
    price: 3099.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `14th Gen Intel® Core™i7 14700HX (20-Core, 33MB L3 Cache, up to 5.5GHz Max Turbo Frequency)`,
        bullets: [
          "Architecture: Raptor Lake-HX Refresh",
          "Cores and Threads: 20 cores (8 Performance cores + 12 Efficiency cores), 28 threads",
          "Integrated Graphics: Intel UHD Graphics",
          "Thermal Design Power (TDP): 55W (Base), 157W (Max Turbo)",
          "Integrated Graphics: Intel Arc Graphics with 8 cores"
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `16 GB: 2 x 8 GB, DDR5, 5600 MT/s, non-ECC, dual-channel`,
        bullets: [
          "Using two modules in a dual-channel configuration improves memory performance compared to a single-channel configuration.",
          "Provides faster data transfer rates and lower power consumption than previous standards.",
          "Higher MT/s translates to faster data transfer rates, improving overall performance in multitasking, gaming, and demanding applications."
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `1 TB, M.2, PCIe NVMe, SSD`,
        bullets: [
          "This configuration provides sufficient memory for multitasking, gaming, and professional applications.",
          "The latest standard in memory technology, offering significant improvements over DDR4 in speed, power efficiency, and bandwidth",
          "Higher speeds result in faster data access, improving overall system performance.",
          "Utilizes two memory modules to work together, effectively doubling the memory bandwidth compared to a single-channel configuration."
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "2 USB 3.2 Gen 1 ports",
          "1 USB 3.2 Gen 1 port with PowerShare",
          "1 USB 3.2 Gen 1 Type-C port",
          "2 Thunderbolt™ 4 Gen 2 Type-C® ports with DisplayPort Alt Mode/USB4",
          "1 RJ45 Ethernet port",
          "1 Universal audio jack",
          "1 HDMI 2.1 port",
          "1 power-adapter port",
          "1 mini-Display port"
        ],
      },
    ],
    size: 3,
  },
  {
    id: 6,
    name: "Alienware Aurora R16 Desktop",
    manufacturer: "Alienware",
    title: "Alienware Aurora R16 Desktop - $2,549.99",
    description:
      "Alienware's most advanced and most powerful desktop yet - perfect for gamers and streamers.",
    image: ALIENWAREAURORAR16Image,
    price: 2549.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Intel® Core™ i9 14900KF (68 MB cache, 24 cores, up to 6.0 GHz P-Core Thermal Velocity)`,
        bullets: [
          "Architecture: Raptor Lake Refresh",
          "Cores and Threads: 24 cores (8 Performance cores with Hyper-Threading + 16 Efficiency cores), totaling 32 threads",
          "Integrated Graphics: None (denoted by 'KF')",
          "Thermal Design Power (TDP): 125W (base), up to 253W (maximum turbo)",
          "Integrated Graphics: Intel Arc Graphics with 8 cores"
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `64 GB: 2 x 32 GB, DDR5, 5200 MT/s`,
        bullets: [
          "The latest generation of RAM, offering improved performance, higher bandwidth, and greater power efficiency compared to DDR4.",
          "Provides ample memory for heavy multitasking, advanced professional workloads, and memory-intensive applications.",
          "Enhances system performance, especially for applications that require high memory throughput."
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `1 TB, M.2, PCIe NVMe, SSD`,
        bullets: [
          "Provides a significant amount of storage, ideal for operating systems, games, applications, and large files like videos and datasets.",
          "Compact and slim design, commonly 22 mm wide and 80 mm long (denoted as 2280).",
          "Offers significantly faster data transfer rates compared to older SATA SSDs.",
          "Provides high throughput and low latency, ideal for tasks requiring fast data access."
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Global headset",
          "(2x) USB 3.2 Gen 1 ports",
          "USB 3.2 Gen 1 port with PowerShare technology",
          "USB 3.2 Gen 2 Type-C® with PowerShare technology",
          "Audio input/microphone In",
          "(2x) USB 2.0 Type-A",
          "(2x) USB 3.2 Gen 1 Type-A (5Gbps)",
          "RJ-45 Killer™ E3100 Gigabit Ethernet"
        ],
      },
    ],
    size: 3,
  },

  {
    id: 7,
    name: "ViprTechGhost Gaming Computer",
    manufacturer: "ViprTechGhost",
    title: "ViprTechGhost Gaming Computer - $1593.99",
    description:
      "The ViprTech Ghost (AMD) gaming PC comes fully equipped to take on the most graphically intensive video games.",
    image: ViprTechGhostGamingComputerImage,
    price: 1593.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `AMD Ryzen 7 3700X (8-Core / 16-Thread @ 4.4Ghz Turbo)`,
        bullets: [
          "a versatile processor offering great value for its price, combining high performance with energy efficiency.",
          "Its 8-core, 16-thread configuration makes it a solid choice for gaming enthusiasts, content creators, and professionals.",
          
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `32GB DDR4 3200Mhz`,
        bullets: [
          "The latest generation of RAM, offering improved performance, higher bandwidth, and greater power efficiency compared to DDR4.",
          "Provides ample memory for heavy multitasking, advanced professional workloads, and memory-intensive applications.",
          "Multi-threaded capabilities make it suitable for video editing, 3D rendering, and software compilation."
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: ` 1TB NVMe SSD`,
        bullets: [
          "Offers faster data transfer rates and lower latency compared to older protocols like SATA.",
          "A protocol designed specifically for SSDs, taking advantage of PCIe (Peripheral Component Interconnect Express) technology.",
          "offers a perfect blend of capacity, speed, and efficiency for most users, whether for gaming, professional workloads, or general computing."
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Other",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "PSU: 600 Watt (80+ Gold-Rated)",
          "Cooling: 120mm Liquid Cooler",
          "Motherboard: AM4",
          "Case: ViprTech X3 White",
          "Graphics: NVIDIA RTX 4060 Ti 8GB",
        ],
      },
    ],
    size: 3,
  },

  {
    id: 8,
    name: "CLX RA Gaming Desktop",
    manufacturer: "ViprTechGhost",
    title: "CLX RA Gaming Desktop - $9,909.99",
    description:
      "This powerful CLX RA is driven by an Intel Core i9 14900K 3.2GHz 24-Core processor, and 96GB of quick as lightning DDR5 memory! Coupled with GeForce RTX 4090 24GB graphics, for eye-stunning visuals.",
    image: CLXRAGamingDesktopImage,
    price: 9909.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Intel® Core™ i7 14700F (61 MB cache, 20 cores, up to 5.4 GHz Turbo)`,
        bullets: [
          "Architecture: Raptor Lake Refresh",
          "Cores and Threads: 20 cores (8 Performance cores with Hyper-Threading + 12 Efficiency cores), totaling 28 threads",
          "Integrated Graphics: None (requires a discrete GPU)"
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `64 GB: 2 x 32 GB, DDR5, 5200 MT/s`,
        bullets: [
          "Enables smooth gameplay in modern titles, especially with ultra-high-resolution textures and demanding game engines.",
          "Supports high frame rates and reduced stuttering.",
          "Large memory capacity accommodates heavy workloads without slowing down.",
          "Ensures stability and performance in complex environments.",
          "Enhances user experience by providing headroom for browser tabs, office applications, and background processes."
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `1 TB, M.2, PCIe NVMe, SSD`,
        bullets: [
          "A high-speed interface standard that connects the SSD to the motherboard.",
          "Provides ample storage for operating systems, applications, games, videos, and large files.",
          "Greatly reduces game loading times and enhances overall system responsiveness."
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Other",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "PSU: 600 Watt (80+ Gold-Rated)",
          "Cooling: 120mm Liquid Cooler",
          "Motherboard: AM4",
          "Case: ViprTech X3 White",
          "Graphics: NVIDIA RTX 4060 Ti 8GB",
        ],
      },
    ],
    size: 3,
  },
  {
    id: 9,
    name: "HP Chromebook Plus",
    manufacturer: "HP",
    title: "HP Chromebook Plus - $649.99",
    description:
      "Ramped up to give you more power for multi-tasking with a reputable Intel® Core™ i3 Processor1, speedy memory, and a large, vibrant display that boots up instantly.",
    image: HPChromebookPlusImage,
    price: 649.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `AMD Ryzen™ 3 7320U (up to 4.1 GHz max boost clock, 4 MB L3 cache, 4 cores, 8 threads)`,
        bullets: [
          "Processor family: AMD Ryzen™ 3 processor",
          "Chipset: AMD Integrated SoC",
          "Processor cache: 4 MB L3",
          "Processor core: 4"
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `8 GB LPDDR5-5500 MT/s (onboard)`,
        bullets: [
          "Sufficient for light to moderate multitasking, such as web browsing, media streaming, and running standard office applications.",
          "The latest iteration in the DDR series, designed for high performance and energy efficiency.",
          "ideal for energy-efficient, portable devices aimed at light to moderate usage. ",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `512 GB SSD storage`,
        bullets: [
          "Provides sufficient space for the operating system, productivity software, a moderate number of games, multimedia files, and more.",
          "Provides ample storage for operating systems, applications, games, videos, and large files.",
          "Greatly reduces game loading times and enhances overall system responsiveness."
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "1 USB Type-C® 5Gbps signaling rate (supports data transfer only and does not support charging or external monitors)",
          "USB Type-A 5Gbps signaling rate",
          "AC smart pin",
          "HDMI 1.4b",
          "headphone/microphone combo",
        ],
      },
    ],
    size: 3,
  },
  {
    id: 10,
    name: "Legion Tower 7i Gen 8 (Intel) with RTX 4080 Super",
    manufacturer: "Legion Tower 7i Gen 8 (Intel) with RTX 4080 Super",
    title: "Legion Tower 7i Gen 8 (Intel) with RTX 4080 Super - $3499.99",
    description:
      "From progressing in-game to advancing in real life, Intel empowers you to be your best self.",
    image: LenovoImage,
    price: 3499.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `14th Generation Intel® Core™ i9-14900KF Processor (E-cores up to 4.40 GHz P-cores up to 5.60 GHz)`,
        bullets: [
          "Architecture: Raptor Lake Refresh",
          "Cores and Threads: 24 cores (8 Performance-cores with Hyper-Threading + 16 Efficiency-cores), totaling 32 threads",
          "the Intel Core i9-14900KF stands out as a versatile processor for high-performance desktops, delivering a balanced mix of processing power and energy efficiency.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `32 GB DDR5-4000MHz (UDIMM) - (2 x 16 GB)`,
        bullets: [
          "an excellent choice for gamers, content creators, and professionals seeking high performance and future-ready memory.",
          "The dual-channel configuration ensures enhanced system performance for demanding tasks while providing sufficient capacity for multitasking and modern applications.",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `2 TB SSD M.2 2280 PCIe Gen4 TLC (2 x 1 TB)`,
        bullets: [
          "setup offers a perfect combination of speed, capacity, and reliability for gamers, professionals, and enthusiasts.",
          "With the flexibility of configuration and cutting-edge performance, it caters to a wide range of needs.",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "2 x USB-A 2.0",
          "2 x USB-A 3.2 Gen 2 (10Gbps)",
          "2 x USB-A 2.0",
          "2 x USB-A 3.2 Gen 1 (5Gbps)",
          "USB-C 3.2 Gen 2 (20Gbps)",
        ],
      },
    ],
    size: 3,
  },
  {
    id: 11,
    name: "XPS 13 Laptop",
    manufacturer: "Dell",
    title: "XPS 13 Laptop - $1999.99",
    description:
      "Create and work anywhere with our thinnest and lightest XPS, starting at only 2.6 lbs.[1]. AI-enabled with Intel® Core™ Ultra processors.",
    image: DellXPS13Image,
    price: 1999.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `13th Generation Intel® Core™ i7-13620H Processor (24MB Cache, up to 4.9GHz)`,
        bullets: [
          "Architecture: Raptor Lake Refresh",
          "Cores and Threads: 24 cores (8 Performance-cores with Hyper-Threading + 16 Efficiency-cores), totaling 32 threads",
          "the Intel Core i9-14900KF stands out as a versatile processor for high-performance desktops, delivering a balanced mix of processing power and energy efficiency.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `16GB, 2x8GB, DDR5, 4800MT/s`,
        bullets: [
          "an excellent choice for gamers, content creators, and professionals seeking high performance and future-ready memory.",
          "The dual-channel configuration ensures enhanced system performance for demanding tasks while providing sufficient capacity for multitasking and modern applications.",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `512 GB, M.2, PCIe NVMe, SSD`,
        bullets: [
          "setup offers a perfect combination of speed, capacity, and reliability for gamers, professionals, and enthusiasts.",
          "With the flexibility of configuration and cutting-edge performance, it caters to a wide range of needs.",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "USB 3.2 Gen 2 Type-C™ port with DisplayPort",
          "2 Thunderbolt™ 4 (USB Type-C™ 3.2 Gen 2) ports",
          "1 headset (headphone and microphone combo) port",
          "1 SD-card slot",
          "1 Wedge-shaped lock slot",
        ],
      },
    ],
    size: 3,
  },

  {
    id: 12,
    name: "ASUS ROG Strix G13 Gaming PC",
    manufacturer: "ASUS",
    title: "ASUS ROG Strix G13 Gaming PC - $1199.99",
    description:
      "From progressing in-game to advancing in real life, Intel empowers you to be your best self.",
    image: AsusRogImage,
    price: 1199.99,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Intel Core i5-14400F`,
        bullets: [
          "delivers solid performance for gaming and productivity tasks",
          "Compatible with Intel 600 and 700 series motherboards, the i5-14400F supports both DDR4 and DDR5 memory, providing flexibility for various system configurations.",
          "Given the lack of integrated graphics, pairing the i5-14400F with a discrete GPU is essential.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `16GB DDR5 U-DIMM RAM`,
        bullets: [
          "offering increased bandwidth and efficiency over previous generations.",   
          "Lower CAS latency values can improve responsiveness. ",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `1TB M.2 2280 NVMe PCIe 4.0 SSD`,
        bullets: [
          "soffers high-speed storage suitable for gaming, video editing, and general computing.",
          "High-performance SSDs can generate significant heat. ",
          "ffering increased bandwidth and efficiency over previous generations",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Four USB 2.0 Type-A", 
          "two USB 3.2 Gen 2 Type-A", 
          "two USB 3.2 Gen 1 Type-A", 
          "one 3.5mm combo audio jack", 
          "two HDMI", 
          "one Display port 1.4", 
          "one PS2", 
          "and three audio jacks",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 13,
    name: "ViprTech Reaper 3.0 Liquid-Cooled PC",
    manufacturer: "ViprTech",
    title: "ViprTech Reaper 3.0 Liquid-Cooled PC - $2049.99",
    description:
      "The ViprTech Reaper 3.0 (AMD) gaming PC comes fully equipped to take on the most graphically intensive video games. ",
    image: ViprTechReaper3Image,
    price: 2049.99,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `AMD Ryzen 5 5600X (6-Core/12-Thread @ 4.6Ghz Turbo)`,
        bullets: [
          "delivers solid performance for gaming and productivity tasks",
          "Compatible with Intel 600 and 700 series motherboards, the i5-14400F supports both DDR4 and DDR5 memory, providing flexibility for various system configurations.",
          "Given the lack of integrated graphics, pairing the i5-14400F with a discrete GPU is essential.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `32GB DDR4 3200Mhz RAM`,
        bullets: [
          "offering increased bandwidth and efficiency over previous generations.",   
          "Lower CAS latency values can improve responsiveness. ",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `1TB NVMe M.2 SSD`,
        bullets: [
          "soffers high-speed storage suitable for gaming, video editing, and general computing.",
          "High-performance SSDs can generate significant heat. ",
          "ffering increased bandwidth and efficiency over previous generations",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Other",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Graphics: AMD Radeon RX 580 8GB",
          "Case: ViprTech X3 White (6x RGB fans)",
          "Motherboard: AM4 Motherboard",
          "Cooling: 120mm RGB Liquid Cooler",
          "PSU: 600 Watt (80+ Gold-Rated)",
          "OS: Windows 11 Pro",
          "USB WiFi adapter",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 14,
    name: "ViprTech Avalanche 2.0 Gaming PC",
    manufacturer: "ViprTech",
    title: "ViprTech Avalanche 2.0 Gaming PC - $979.99",
    description:
      "Take a revolutionary leap into real-world hybrid performance with 12th Gen Intel® Core™, an innovative design that distributes processing power to where you need it most.",
    image: ViprTechAvalanche2Image,
    price: 979.99,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `AMD Ryzen 7 2700 (8-Core / 16-Thread @ 4.1Ghz Turbo)`,
        bullets: [
          "he processor performs well in gaming when paired with a capable GPU, although its single-threaded performance is slightly behind newer Ryzen 5000 and 7000 series processors.",
          "Optimizes clock speeds dynamically for improved single-thread and multi-thread workloads.",
          "Enhances performance when paired with adequate cooling solutions.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `32GB DDR4 3200`,
        bullets: [
          "A 32GB DDR4 3200MHz memory kit is an excellent choice for enhancing system performance in tasks such as gaming, content creation, and multitasking. ",   
          "Lower CAS latency values can improve responsiveness. Balance between speed and latency based on your workload requirements.",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `1TB NVMe M.2 SSD`,
        bullets: [
          "A 1TB NVMe M.2 SSD offers high-speed storage suitable for various computing needs, including gaming, content creation, and general use",
          "Ensure your motherboard has an available M.2 slot that supports NVMe PCIe SSDs.",
          "For tasks like gaming or video editing, SSDs with higher read/write speeds are beneficial.",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "2x USB2.0",
          "1x USB3.0",
          "1x Aux",
          "1x Mic",
        ],
      },
    ],

=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 15,
    name: "LOQ Essential Gen 9 Laptop",
    manufacturer: "Lenovo",
    title: "LOQ Essential Gen 9 Laptop - $729.99",
    description:
      "The ViprTech Avalanche 2.0 (AMD) gaming PC comes fully equipped to take on most popular video games.",
    image: LenovoLaptopImage,
    price: 729.99,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `12th Generation Intel® Core™ i5-12450HX`,
        bullets: [
          "a powerful mobile processor designed for high-performance laptops, part of Intel's Alder Lake series. ",
          "Combines P-cores for single-threaded tasks (e.g., gaming) with E-cores for multitasking and background applications.",
          "Optimizes task distribution between P-cores and E-cores for efficient performance.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `8 GB DDR5-4800MHz (SODIMM)`,
        bullets: [
          "designed to enhance laptop performance by providing higher data transfer rates and improved energy efficiency compared to DDR4 memory.",   
          "suitable for general computing tasks. ",
          "provides a cost-effective solution for upgrading laptops, operating at 4800 MT/s with a CAS latency of 40.",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `512 GB SSD M.2 2242 PCIe Gen4 QLC`,
        bullets: [
          "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
          "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
          "compact M.2 2242 form factor makes it ideal for thin-and-light devices. ",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "SD Card Reader",
          "HDMI",
          "USB-A (USB 5Gbps)",
          "USB-A (USB 5Gbps)",
          "Power Input",
          "USB-C® (5Gbps transfer rate)",
          "RJ45 (Ethernet)",
          "Headphone / Mic Combo",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 16,
    name: "ASUS ROG G16CHR Gaming PC",
    manufacturer: "ASUS",
    title: "ASUS ROG G16CHR Gaming PC - $729.99",
    description:
      "Enjoy intense and seamless gameplay with this ASUS ROG G16CHR gaming PC. Featuring Intel Core i7-14700F processor, 32GB DDR5 U-DIMM RAM, and NVIDIA GeForce RTX4070 GPU, this PC ensures smooth gaming and multitasking.",
    image: ASUSROGG16Image,
    price: 729.99,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Intel Core i7-13700F`,
        bullets: [
          "offer competitive base and boost clock speeds, with boost frequencies reaching up to 5.4 GHz in recent models, providing responsive performance across various workloads.",
          "High-performance processors can generate significant heat. Adequate cooling solutions are essential to maintain optimal performance and longevity.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `16 GB DDR4`,
        bullets: [
          "a versatile choice for enhancing system performance across various computing tasks. ",
          "provides a cost-effective solution for upgrading laptops, operating at 4800 MT/s with a CAS latency of 40.",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `512 GB Solid State Drive (SSD)`,
        bullets: [
          "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
          "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
          "compact M.2 2242 form factor makes it ideal for thin-and-light devices. ",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "2x USB 3.2 Gen 1 Type-C",
          "2x USB 3.2 Gen 1 Type-A",
          "2x USB 3.2 Gen 2 Type-A",
          "DisplayPort 1.4",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 17,
    name: "Zonic Gaming P",
    manufacturer: "Zonic",
    title: "Zonic Gaming P - $2285.97",
    description:
      "Elevate your gaming experience with Zonic Gaming PC ! For over 17 years, we've crafted custom gaming and business PCs using reliable components.",
    image: ZonicGamingPCImage,
    price: 2285.97,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Intel® Core™ i7 14700FF`,
        bullets: [
          "With a maximum turbo frequency of 5.4 GHz, it effectively handles modern gaming titles, especially when paired with a capable discrete GPU.",
          "A base TDP of 65W ensures energy efficiency during standard operations, while the higher turbo TDP allows for enhanced performance under intensive tasks.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `64 GB: 2 x 32 GB, DDR5, 5200 MT/s`,
        bullets: [
          "offers substantial capacity and high-speed performance, ideal for demanding applications such as gaming, content creation, and professional workloads. ",
          "provides a cost-effective solution for upgrading laptops, operating at 4800 MT/s with a CAS latency of 40.",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `512 GB Solid State Drive (SSD)`,
        bullets: [
          "provides high-speed storage suitable for various computing needs, including gaming, content creation, and general use. ",
          "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
          "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Global headset",
          "(2x) USB 3.2 Gen 1 ports",
          "USB 3.2 Gen 1 port with PowerShare technology",
          "USB 3.2 Gen 2 Type-C® with PowerShare technology",
          "Rear L/R Surround Output",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },

  {
    id: 18,
    name: "Refurbished AQVIN Prebuilt InfinityLite RGB Gaming PC ",
    manufacturer: "AQVIN",
    title: "Refurbished AQVIN Prebuilt InfinityLite RGB Gaming PC - $2285.97",
    description:
      "Elevate your gaming experience with Zonic Gaming PC ! For over 17 years, we've crafted custom gaming and business PCs using reliable components.",
    image: AQVINImage,
    price: 2285.97,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `3.4 GHz core_i7`,
        bullets: [
          "offer competitive base and boost clock speeds, with boost frequencies reaching up to 5.4 GHz in recent models, providing responsive performance across various workloads.",
          "High-performance processors can generate significant heat. Adequate cooling solutions are essential to maintain optimal performance and longevity.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `32 GB DDR4`,
        bullets: [
          "a versatile choice for enhancing system performance across various computing tasks. ",
          "provides a cost-effective solution for upgrading laptops, operating at 4800 MT/s with a CAS latency of 40.",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `1 TB SSD`,
        bullets: [
          "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
          "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "USB3.0",
          "hdmi", 
          "displayport", 
          "USB2.0",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 19,
    name: "MSI Codex R2 Gaming PC",
    manufacturer: "Codex R",
    title: "MSI Codex R2 Gaming PC - $1699.99",
    description:
      "Effortlessly beat your opponents with this MSI Codex R2 gaming PC. Equipped with Intel Core i5-12400F processor and 16GB RAM, this machine delivers smooth and seamless performance for gaming and multitasking.",
    image: MSICodexRImage,
    price: 1099.99,
<<<<<<< HEAD

features: [
  {
    icon: <ExtensionSharpIcon fontSize="large" />,
    title: "processor",
    description: `Intel Core i7-14700F`,
    bullets: [
      "offer competitive base and boost clock speeds, with boost frequencies reaching up to 5.4 GHz in recent models, providing responsive performance across various workloads.",
      "High-performance processors can generate significant heat. Adequate cooling solutions are essential to maintain optimal performance and longevity.",
    ],
  },
  {
    icon: <MemoryIcon fontSize="large" />,
    title: "Memory",
    description: `32 GB DDR5`,
    bullets: [
      "Ideal for high-performance gaming PCs, especially when combined with modern GPUs and CPUs. ",
      "Suitable for video editing, 3D modeling, and software that requires large amounts of RAM.",
      "Perfect for tasks like simulations, rendering, and large-scale computations.",
    ],
  },
  {
    icon: <StorageIcon fontSize="large" />,
    title: "Storage",
    description: `1 TB Solid State Drive (SSD)`,
    bullets: [
      "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
      "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
      "compact M.2 2242 form factor makes it ideal for thin-and-light devices. ",
    ],
  },
  {
    icon: <FlashOnIcon fontSize="large" />,
    title: "Ports",
    // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
    bullets: [
      "3x USB 3.1 Gen 2",
      "3x Display Ports",
      "2x USB Type-C",
    ],
  },
],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 20,
    name: "Acer Nitro LED Curved FreeSync Gaming Monitor",
    manufacturer: "AQVIN",
    title: "Acer Nitro LED Curved FreeSync Gaming Monitor - $169.99",
    description:
      "Elevate your gaming experience with Zonic Gaming PC ! For over 17 years, we've crafted custom gaming and business PCs using reliable components.",
    image: AcerMonitorImage,
    price: 169.99,
<<<<<<< HEAD

features: [
  {
    icon: <TvIcon fontSize="large" />,
    title: "Display Type",
    description: `34" LED-backlit LCD monitor / TFT active matrix`,
    bullets: [
      "offer competitive base and boost clock speeds, with boost frequencies reaching up to 5.4 GHz in recent models, providing responsive performance across various workloads.",
      "High-performance processors can generate significant heat. Adequate cooling solutions are essential to maintain optimal performance and longevity.",
    ],
  },
  {
    icon: <DesktopWindowsIcon fontSize="large" />,
    title: "Dimensions & Weight",
    // description: `16 GB DDR4`,
    bullets: [
      "With stand - width: 80.79 cm - depth: 23.41 cm - height: 42.73 cm",
      "Without stand - width: 80.79 cm - depth: 8.58 cm - height: 36.63 cm - weight: 7.7 kg",
      "Shipping Weight: 14.95 kg",

    ],
  },
  {
    icon: <PowerIcon fontSize="large" />,
    title: "Power",
    // description: `512 GB Solid State Drive (SSD)`,
    bullets: [
      "Input Voltage: AC 100-240 V (50/60 Hz)",
      "Power Consumption Stand by: 0.3 Watt",
      "Power Consumption (On mode): 29.9 W",
      "Power Consumption (Off Mode): 0.2 Watt",
      "Power Consumption (Max): 90 Watt",
    ],
  },
  {
    icon: <FlashOnIcon fontSize="large" />,
    title: "Ports",
    // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
    bullets: [
      "2 x HDMI",
      "DisplayPort 1.4",
      "USB 3.2 Gen 1 upstream",
      "3 x USB 3.2 Gen 1 downstream",
      "USB 3.2 Gen 1 downstream with Battery Charging 1.2",
      "Audio line-out",
    ],
  },
],

=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 21,
    name: "Dell Pro Rugged 14 Laptop",
    manufacturer: "Dell",
    title: "Dell Pro Rugged 14 Laptop - $2223.81",
    description:
      "Dell Pro Rugged 14 features Intel® Core™ Ultra processors with a dedicated NPU,allowing apps using AI to run faster and smoother in any condition.",
    image: DellProRugged14Image,
    price: 2223.81,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `11th Gen Intel® Core™ i5-1135G7`,
        bullets: [
          "Handles everyday tasks such as web browsing, document editing, and media consumption efficiently.",
          "Multitasking: The 4-core/8-thread configuration allows for smooth multitasking and responsiveness.",
          "Graphics Performance: The integrated Intel Iris Xe Graphics G7 provides improved graphics capabilities over previous generations, supporting casual gaming and media editing."
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `8 GB: 1 x 8 GB, DDR4, 3200 MT/s`,
        bullets: [
          "operates at 3200 MT/s with a CAS latency of 22, suitable for laptops and compact systems requiring SODIMM form factor.",
          "Designed for desktops, this UDIMM module offers 3200 MT/s speed and CL22 latency, ensuring reliable performance for everyday tasks. ",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `256 GB, M.2, PCIe NVMe, SSD, Class 35`,
        bullets: [
          "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
          "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
          "compact M.2 2242 form factor makes it ideal for thin-and-light devices. ",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Stylus",
          "Stylus lanyard",
          "microSD Card reader / Nano SIM slot",
          "2nd TBT4 (Optional) / USB 3.2 Gen 2 Type-C",
          "RJ-45 Network port",
          "RS-232 Serial port",
          "HDMI",
          "TBT4 / USB 3.2 Gen 2 Type-C",
          "2x USB 3.2 Gen 1 Type-A",
          "Universal Audio Jack",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 22,
    name: "Latitude 5430 Rugged Laptop",
    manufacturer: "Dell",
    title: "Latitude 5430 Rugged Laptop - $2219.00",
    description:
      "24x7 operations with dual hot-swappable batteries with up to 25-hour battery runtime and Express Charge Boost for up to a 35% charge in 15 minutes, so you can be always on.",
    image: Latitude5430RuggedImage,
    price: 2219.0,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `11th Gen Intel® Core™ i5-1145G7`,
        bullets: [
          "Handles everyday tasks such as web browsing, document editing, and media consumption efficiently.",
          "Multitasking: The 4-core/8-thread configuration allows for smooth multitasking and responsiveness.",
          "Graphics Performance: The integrated Intel Iris Xe Graphics G7 provides improved graphics capabilities over previous generations, supporting casual gaming and media editing.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `16 GB: 2 x 8 GB, DDR4, 3200 MT/ss`,
        bullets: [
          "features a low-profile design suitable for compact builds, with a CAS latency of 16 and support for Intel XMP 2.0 for easy overclocking",
          "combines high performance with customizable RGB lighting, featuring a CAS latency of 16 and support for Intel XMP 2.0",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `512 GB, M.2, PCIe NVMe, SSD, Class 40`,
        bullets: [
          "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
          "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
          "compact M.2 2242 form factor makes it ideal for thin-and-light devices. ",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Stylus",
          "Stylus lanyard",
          "microSD Card reader / Nano SIM slot",
          "2nd TBT4 (Optional) / USB 3.2 Gen 2 Type-C",
          "RJ-45 Network port",
          "RS-232 Serial port",
          "HDMI",
          "TBT4 / USB 3.2 Gen 2 Type-C",
          "2x USB 3.2 Gen 1 Type-A",
          "Universal Audio Jack",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 23,
    name: "Latitude 5430 Rugged Laptop",
    manufacturer: "Dell",
    title: "Latitude 5430 Rugged Laptop - $4949.00",
    description:
      "Dell Pro Rugged 13 features Intel® Core™ Ultra U-series and H-series processors, with a dedicated NPU, allowing apps using AI to run faster and smoother in any condition.",
    image: DellProRugged13Image,
    price: 4949.0,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `11th Gen Intel® Core™ i5-1135G7`,
        bullets: [
          "Efficient for tasks like web browsing, document editing, and multimedia consumption.",
          "cores and 8 threads make it adept at multitasking.",
          "Graphics Performance: The integrated Intel Iris Xe Graphics G7 provides improved graphics capabilities over previous generations, supporting casual gaming and media editing.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `8 GB: 1 x 8 GB, DDR4, 3200 MT/s`,
        bullets: [
          "a cost-effective way to enhance your system's performance, providing improved responsiveness and multitasking capabilities.",
          "features a low-profile design suitable for compact builds, with a CAS latency of 16 and support for Intel XMP 2.0 for easy overclocking",
          "combines high performance with customizable RGB lighting, featuring a CAS latency of 16 and support for Intel XMP 2.0",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `256 GB, M.2, PCIe NVMe, SSD, Class 35`,
        bullets: [
          "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
          "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
          "compact M.2 2242 form factor makes it ideal for thin-and-light devices. ",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "Stylus",
          "Stylus lanyard",
          "microSD Card reader / Nano SIM slot",
          "2nd TBT4 (Optional) / USB 3.2 Gen 2 Type-C",
          "RJ-45 Network port",
          "RS-232 Serial port",
          "HDMI",
          "TBT4 / USB 3.2 Gen 2 Type-C",
          "2x USB 3.2 Gen 1 Type-A",
          "Universal Audio Jack",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 24,
    name: "Chromebook 3110 Laptop",
    manufacturer: "Dell",
    title: "Chromebook 3110 Laptop - $586.61",
    description:
      "The Dell Chromebook 3110 features rubberized edges and rounded corners to minimize drop impact, a spill-resistant keyboard with captive keys, plus hinge strength and micro-drop protection. ",
    image: Chromebook3110Image,
    price: 586.61,
<<<<<<< HEAD
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "processor",
        description: `Intel® Celeron™ N4500 (Dual Core, up to 2.8GHz, 4M Cache, 6W), 4GB Memory, 64GB Storage, HDMI`,
        bullets: [
          "a dual-core processor from Intel's Jasper Lake series, introduced in early 2021.",
          "Designed for budget-friendly laptops and compact devices, it offers a balance between performance and energy efficiency.",
          "cores and 8 threads make it adept at multitasking.",
        ],
      },
      {
        icon: <MemoryIcon fontSize="large" />,
        title: "Memory",
        description: `4 GB: LPDDR4, 2933 MT/s`,
        bullets: [
          "a cost-effective way to enhance your system's performance, providing improved responsiveness and multitasking capabilities.",
          "features a low-profile design suitable for compact builds, with a CAS latency of 16 and support for Intel XMP 2.0 for easy overclocking",
          "combines high performance with customizable RGB lighting, featuring a CAS latency of 16 and support for Intel XMP 2.0",
        ],
      },
      {
        icon: <StorageIcon fontSize="large" />,
        title: "Storage",
        description: `64 GB eMMC, on-board`,
        bullets: [
          "offers a compact and high-speed storage solution suitable for ultrabooks, tablets, and mini PCs.",
          "offer higher storage density at a lower cost but may have lower endurance compared to TLC (Triple-Level Cell) SSDs. ",
          "compact M.2 2242 form factor makes it ideal for thin-and-light devices. ",
        ],
      },
      {
        icon: <FlashOnIcon fontSize="large" />,
        title: "Ports",
        // description: `MagSafe 3 charging port, Two Thunderbolt / USB 4 ports, and 30W USB-C Power Adapter`,
        bullets: [
          "1 USB 3.2 Gen 1 Type-C® port with DisplayPort Alt mode",
          "1 USB 3.2 Gen 1 Type-A port with PowerShare",
          "1 headset (headphone and microphone combo) port",
          "1 HDMI 1.4 port (optional)",
        ],
      },
    ],
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },
  {
    id: 25,
    name: "Latitude 7455 Laptop",
    manufacturer: "Dell",
    title: "Latitude 7455 Laptop - $586.61",
    description:
      "The first Copilot+ Latitude[1], and our first with Windows 11 Arm®, has powerful on-device AI and exceptional speed and efficiency in a premium Latitude design. ",
    image: Latitude7455Image,
    price: 586.61,
<<<<<<< HEAD
    //TODO:
=======
    size: 3,
>>>>>>> 2936f16fc4e919d13040c3b3eb65dd96b6262c26
  },

  {
    id: 26,
    name: "Surface Laptop",
    manufacturer: "Microsoft",
    title: "Surface Laptop - $1,449.99",
    description:
      "Work and play worry-free. For added peace of mind, Microsoft Complete has you covered for mechanical breakdown and accidental damage from handling.",
    image: SurfaceLaptopImage,
    price: 1449.99,
    size: 3,
  },
  {
    id: 27,
    name: "Surface Laptop Studio2",
    manufacturer: "Microsoft",
    title: "Surface Laptop Studio2 - $2,699.99",
    description:
      "Over twice the computing power makes this device the most powerful Surface yet.",
    image: SurfaceLaptopStudio2Image,
    price: 2699.99,
    size: 3,
  },

  {
    id: 28,
    name: "Razer Blade 15",
    manufacturer: "Razer",
    title: "Razer Blade 15 - $2,699.99",
    description:
      "With the Razer Blade 15, true power will always be wherever you are.",
    image: RazerBlade15Image,
    price: 2699.99,
    size: 3,
  },
  {
    id: 29,
    name: "Dell G16 Gaming Laptop",
    manufacturer: "Dell",
    title: "Dell G16 Gaming Laptop - $1549.99",
    description:
      "Enjoy all the benefits of a portable gaming laptop with a larger 16:10 aspect ratio. ",
    image: DellG16Image,
    price: 1549.99,
    size: 3,
  },

  //================= Accessories =================

  {
    id: 30,
    name: "Razer Huntsman V2 Tenkeyless",
    manufacturer: "Razer",
    title: "Razer Huntsman V2 Tenkeyless - $124.99",
    description:
      "Razer Linear Optical Switches Gen-2, Doubleshot PBT Keycaps, Sound Dampening Foam",
    image: RazerHuntsmanV2TenkeylessImage,
    price: 124.99,
    size: 3,
  },
  {
    id: 31,
    name: "Razer Headset with Kitty Ears V2",
    manufacturer: "Razer",
    title: "Razer Kitty Ears V2 - $97.99",
    description:
      "Kitty Ears, Stream Reactive Lighting, Razer HyperClear Cardioid Mic",
    image: RazerKittyEarHeadsetImage,
    price: 97.99,
    size: 3,
  },
  {
    id: 32,
    name: "Razer RGB Mouse Mat",
    manufacturer: "Razer",
    title: "Razer RGB Mouse Mat - $139.99",
    description:
      "Edge-to-Edge Backlit Design, 15-Zone Chroma Lighting, Integrated USB 2.0 Port",
    image: RazerRGBMouseMatImage,
    price: 139.99,
    size: 3,
  },
  {
    id: 33,
    name: "Razer Kiyo Pro",
    manufacturer: "Razer",
    title: "Razer Kiyo Pro - $168.99",
    description: "USB Camera with High-Performance Adaptive Light Sensor",
    image: RazerKiyoProImage,
    price: 168.99,
    size: 3,
  },

  {
    id: 34,
    name: "Razer Basilisk V3 Pro",
    manufacturer: "Razer",
    title: "Razer Basilisk V3 Pro - $178.99",
    description:
      "Customizable Wireless Gaming Mouse with Razer HyperScroll Tilt Wheel",
    image: RazerBasiliskV3ProImage,
    price: 178.99,
    size: 3,
  },
  {
    id: 35,
    name: "Razer Aether Lamp Pro",
    manufacturer: "Razer",
    title: "Razer Aether Lamp Pro - $139.99",
    description: "GB LED Lamp with Multi-zone Lighting",
    image: RazerAetherLampProImage,
    price: 139.99,
    size: 3,
  },
  {
    id: 36,
    name: "Razer Seiren V3 Chroma",
    manufacturer: "Razer",
    title: "Razer Seiren V3 Chroma - $189.99",
    description: "RGB USB Microphone with Tap-to-Mute",
    image: RazerSeirenV3ChromaImage,
    price: 189.99,
    size: 3,
  },
  {
    id: 37,
    name: "Razer Aether Monitor Light Bar",
    manufacturer: "Razer",
    title: "Razer Aether Monitor Light Bar - $179.99",
    description:
      "Front-and-Back Dual Lighting, ultra-Wide Natural Illumination, compatible with all Monitor Sizes",
    image: RazerMonitorLightBarImage,
    price: 179.99,
    size: 3,
  },
  {
    id: 38,
    name: "Razer Thunderbolt4 Dock Chroma",
    manufacturer: "Razer",
    title: "Razer Thunderbolt4 Dock Chroma - $408.99",
    description:
      "Expanded capabilities with 10 ports in one. Dock compatible with Windows and Mac devices",
    image: RazerThunderbolt4DockChromaImage,
    price: 408.99,
    size: 3,
  },
  {
    id: 39,
    name: "Razer Hanbo Chroma Liquid Cooler",
    manufacturer: "Razer",
    title: "Razer Hanbo Chroma Liquid Cooler - $227.99",
    description:
      "OIA cooler has an optimized intake design to ensure greater heat transfer combined with fluid dynamic bearings for silent operation. ",
    image: RazerHanboChromaLiquidCoolerImage,
    price: 227.99,
    size: 3,
  },
  {
    id: 40,
    name: "Razer Naga Left-Handed Edition",
    manufacturer: "Razer",
    title: "Razer Naga Left-Handed Edition - $134.99",
    description: "Ergonomic MMO Gaming Mouse for Left-Handed Users",
    image: RazerNagaLeftImage,
    price: 134.99,
    size: 3,
  },

  {
    id: 41,
    name: "Lofree Petal Mouse",
    manufacturer: "Lofree",
    title: "Lofree Petal Mouse - $69.00",
    description:
      "Drawing inspiration from the design of makeup foundations, our keyboard showcases a palette of foundation shades.",
    image: LofreePetalMouseImage,
    price: 69.0,
    size: 3,
  },
  {
    id: 42,
    name: "Lofree Foundation Keyboard",
    manufacturer: "Lofree",
    title: "Lofree Foundation Keyboard - $239.00",
    description:
      "Drawing inspiration from the design of makeup foundations, our keyboard showcases a palette of foundation shades.",
    image: LofreeFoundationKeyboardImage,
    price: 239.0,
    size: 3,
  },
  {
    id: 43,
    name: "Lofree Moru Keyboard",
    manufacturer: "Lofree",
    title: "Lofree 1% Moru Keyboard - $239.00",
    description:
      "Discover the 1% Moru, a 68 layout-keyboard designed not just for typing, but for transforming everyday spaces into havens of serenity. ",
    image: LofreeMoruKeyboardImage,
    price: 239.0,
    size: 3,
  },
  {
    id: 44,
    name: "Lofree Transparent Keyboard",
    manufacturer: "Lofree",
    title: "Lofree 1% Transparent Keyboard - $219.00",
    description:
      "Drawing inspiration from the design of makeup foundations, our keyboard showcases a palette of foundation shades.",
    image: LofreeTransparentKeyboardImage,
    price: 219.0,
    size: 3,
  },

  {
    id: 45,
    name: "Surface Arc Mouse",
    manufacturer: "Microsoft",
    title: "Surface Arc Mouse - $99.99",
    description:
      "Slim, light, and ready to travel, Surface Arc Mouse is designed to conform to your hand and snaps flat to fit easily in your bag.",
    image: SurfaceArcMouseImage,
    price: 99.99,
    size: 3,
  },
  {
    id: 46,
    name: "Alienware Keyboard AW510K",
    manufacturer: "Alienware",
    title: "Alienware Keyboard AW510K - $179.99",
    description:
      "A beautifully designed, full-featured gaming keyboard offering programmable keys and dedicated volume control. Made for ultimate performance.",
    image: AlienwareKeyboardAW510KImage,
    price: 179.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "General",
        description: `Overall Information`,
        bullets: [
          "detachable USB paracord cable, wireless dongle extender",
          "Alienware Linear Mechanical Switches, PBT double-shot keycaps, on-board memory, full anti-ghosting",
          "Dark Side of the Moon"
        ],
      },
      {
        icon: <InputIcon fontSize="large" />,
        title: "Input Device",
        description: `Input Details`,
        bullets: [
          "Lighting Per-key 16.8 Million RGB, AlienFXd",
          "Alienware Linear Mechanical Switches",
          "2m USB-A to USB-C paracord cable (detachable)"
        ],
      },
      {
        icon: <Battery50Icon fontSize="large" />,
        title: "Battery",
        description: `Run Time Details`,
        bullets: [
          "Up to 798 hours (2.4GHz) / Up to 1800 hours (Bluetooth)",
        ],
      },
    ],
    size: 4,
  },
  {
    id: 47,
    name: "Alienware Headset AW920H",
    manufacturer: "Alienware",
    title: "Alienware Headset AW920H - $189.99",
    description:
      "Hear every step and relay every command with a gaming headset that supports Dolby Atmos®, Active Noise Cancelling and versatile connection options.",
    image: AlienwareHeadsetAW920HImage,
    price: 189.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "General",
        description: `Overall Information`,
        bullets: [
          "Game console, portable electronics, computer",
          "2.4GHz/Bluetooth/3.5mm",
          "Touch control, fast charge",
          "Lunar light"
        ],
      },
      {
        icon: <MicIcon fontSize="large" />,
        title: "Sound",
        description: `Audio Output`,
        bullets: [
          "Bluetooth / 2.4 GHz radio frequency",
          "AlienFX 16.8 Million RGB colours",
        ],
      },
      {
        icon: <Battery50Icon fontSize="large" />,
        title: "Battery",
        description: `Run Time Details`,
        bullets: [
          "55 hour(s)*Up to 55 hours (Bluetooth), 30 hours (2.4Ghz)",
          "performance based on tests with no LEDs on, at 50% volume. Battery life will vary"
        ],
      },
    ],
    size: 4,
  },
  {
    id: 48,
    name: "Alienware Gaming Mouse AW620M",
    manufacturer: "Alienware",
    title: "Alienware Gaming Mouse AW620M - $137.99",
    description:
      "Conquer gaming marathons with a wireless mouse that’s crafted with 26,000 DPI, reliable connectivity, robust battery life.",
    image: AlienwareGamingMouseAW620MImage,
    price: 137.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "General",
        description: `Overall Information`,
        bullets: [
          "Colors: Lunar light, dark side of the moon",
          "Orientation: Right and left-handed",
        ],
      },
      {
        icon: <InputIcon fontSize="large" />,
        title: "Input Device",
        description: `Input Details`,
        bullets: [
          "Auto-calibration, adjustable scrolling wheel, nylon braided cord",
          "50 G maximum acceleration, polling rate: 1000 Hz",
          "650 inches per second"
        ],
      },
      {
        icon: <Battery50Icon fontSize="large" />,
        title: "Battery",
        description: `Run Time Details`,
        bullets: [
          "Run time with default lighting (out of box): up to 140 hours",
        ],
      },
    ],
    size: 4,
  },
  {
    id: 49,
    name: "Alienware Gaming Mouse AW610",
    manufacturer: "Alienware",
    title: "Alienware Gaming Mouse AW610 - $109.99",
    description:
      "Dual mode wired & wireless gaming mouse with rechargeable lithium ion battery & seven programmable buttons for performance that takes no prisoners.",
    image: AlienwareGamingMouseAW610MImage,
    price: 109.99,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "General",
        description: `Overall Information`,
        bullets: [
          "Colors: Lunar light, dark side of the moon",
          "Orientation: Right and left-handed",
        ],
      },
      {
        icon: <InputIcon fontSize="large" />,
        title: "Input Device",
        description: `Input Details`,
        bullets: [
          "Auto-calibration, adjustable scrolling wheel, nylon braided cord",
          "7 programmable buttons, Omron technology, 20 million clicks",
          "5 on-the-fly DPI settings, detachable cable, 16.8 million AlienFX lighting"
        ],
      },
      {
        icon: <Battery50Icon fontSize="large" />,
        title: "Battery",
        description: `Run Time Details`,
        bullets: [
          "Run time with default lighting (out of box): up to 116 hours",
          "Run time without lighting: up to 350 hours",
        ],
      },
    ],
    size: 4,
  },

  {
    id: 50,
    name: "AirPods Pro 2",
    manufacturer: "Apple",
    title: "AirPods Pro 2 - $249.00",
    description:
      "irPods Pro 2 pairs with Apple Vision Pro to deliver Lossless Audio with ultra-low latency, for an unprecedented sound experience.",
    image: AirPodsPro2Image,
    price: 249.0,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "H2 Processor",
        description: `Voice Isolation, Hey Siri and Siri Interactions`,
        bullets: [
          "Up to 6 hours of listening time on a single charge with Active Noise Cancellation enabled",
          "Up to 30 hours of total listening time with Active Noise Cancellation enabled, using the case",
          "Wireless Charging Case (USB-C) with MagSafe, Footnote ¹⁰ speaker for Find My with Precision Finding, and lanyard loop^"
        ],
      },
      {
        icon: <MicIcon fontSize="large" />,
        title: "Siri",
        description: `Support Apple Intelligence`,
        bullets: [
          "Intelligent assistant",
          "Voice recognition",
        ],
      },
      {
        icon: <AlbumIcon fontSize="large" />,
        title: "Sound",
        description: ` Smart home hub`,
        bullets: [
          "Up to 2x more Active Noise Cancellation, Footnote ³ with Adaptive Audio and Transparency mode",
          "Personalized Spatial Audio with dynamic head tracking",
          "Hearing Protection feature, Conversation Boost and Background Sound"
        ],
      },
    ],
    size: 4,
  },
  {
    id: 51,
    name: "AirPods Max",
    manufacturer: "Apple",
    title: "AirPods Max - $779.00",
    description:
      "AirPods Max deliver stunningly detailed, high‑fidelity audio. Personalised Spatial Audio with dynamic head tracking for sound that surrounds you. ",
    image: AirPodsMaxImage,
    price: 779.0,
    features: [
      {
        icon: <ExtensionSharpIcon fontSize="large" />,
        title: "H2 Processor",
        description: `Voice Isolation, Hey Siri and Siri Interactions`,
        bullets: [
          "Up to 20 hours of listening time on a single charge",
          "Dust-, sweat- and water-resistant"
        ],
      },
      {
        icon: <MicIcon fontSize="large" />,
        title: "Siri",
        description: `Support Apple Intelligence`,
        bullets: [
          "Intelligent assistant",
          "Voice recognition",
        ],
      },
      {
        icon: <AlbumIcon fontSize="large" />,
        title: "Sound",
        description: ` Smart home hub`,
        bullets: [
          "Up to 2x more Active Noise Cancellation with Transparency mode",
          "Personalized Spatial Audio with dynamic head tracking",
        ],
      },
    ],
    size: 4,
  },
  {
    id: 52,
    name: "HomePod Mini",
    manufacturer: "Apple",
    title: "HomePod Mini - $129.00",
    description:
      "Jam-packed with innovation, HomePod mini delivers unexpectedly big sound for a speaker of its size. ",
    image: HomePodMiniImage,
    price: 129.0,
    features: [
      {
        icon: <AlbumIcon fontSize="large" />,
        title: "Sound",
        description: `Surprising sound for its size`,
        bullets: [
          "Full-range driver Dual force-cancelling passive radiators",
          "Stereo pair capable",
          "Multi-room audio"
        ],
      },
      {
        icon: <MicIcon fontSize="large" />,
        title: "Siri",
        description: `Support Apple Intelligence`,
        bullets: [
          "Intelligent assistant",
          "Voice recognition",
        ],
      },
      {
        icon: <HomeIcon fontSize="large" />,
        title: "Home Stub",
        description: ` Smart home hub`,
        bullets: [
          "Sound Recognition",
          "Temperature and humidity sensor",
          "Private and secure"
        ],
      },
    ],
    size: 4,
  },
];

export default ITEM_LIST;

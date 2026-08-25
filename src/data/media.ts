export type Interview = {
  id: string;
  title: string;
  href: string;
  category: string;
  thumb?: string;
};

const yt = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

export const INTERVIEWS: Interview[] = [
  {
    id: "UEZyQJMjTxM",
    title: "South Africans & Cars in Doha",
    href: "https://www.youtube.com/watch?v=UEZyQJMjTxM",
    category: "Community",
    thumb: "https://sa-diplomat.com/wp-content/uploads/2021/09/interview_CarsInDoha-300x164.png",
  },
  {
    id: "lK91eBSzMgQ",
    title: "SA Diplomat Abroad chats to South African celebrity Chef, Jenny Morris",
    href: "https://youtu.be/lK91eBSzMgQ",
    category: "Culture",
    thumb: yt("lK91eBSzMgQ"),
  },
  {
    id: "-Qhj5YBmBGM",
    title: "SA Diplomat Abroad chats to SA World & Olympic Champion Swimmer, Chad le Clos",
    href: "https://youtu.be/-Qhj5YBmBGM",
    category: "Sport",
    thumb: yt("-Qhj5YBmBGM"),
  },
  {
    id: "cij8Gcvtz9k",
    title: "Loukmaan Adams chats to SA Diplomat Abroad",
    href: "https://youtu.be/cij8Gcvtz9k",
    category: "Culture",
    thumb: yt("cij8Gcvtz9k"),
  },
  {
    id: "HepFBLx9fSc",
    title: "SA pop sensation Jimmy Nevis at the Ubuntu Bash in Doha",
    href: "https://youtu.be/HepFBLx9fSc",
    category: "Culture",
    thumb: yt("HepFBLx9fSc"),
  },
  {
    id: "Dozrz1uyFyE",
    title: "We chat to Kagiso Asset Management about expatriate savings",
    href: "https://www.youtube.com/watch?v=Dozrz1uyFyE&t=361s",
    category: "Business",
    thumb: yt("Dozrz1uyFyE"),
  },
  {
    id: "PK7-CWiwy7A",
    title: "Love 2 Serve chats to SA Diplomat Abroad",
    href: "https://www.youtube.com/watch?v=PK7-CWiwy7A",
    category: "Business",
    thumb: "https://sa-diplomat.com/wp-content/uploads/2021/09/interview_Love2Serve-300x206.jpg",
  },
  {
    id: "r2JJEifhPEE",
    title: "Living Lekke & Living Coloured… Yusuf Daniels chats to SA Diplomat Abroad",
    href: "https://youtu.be/r2JJEifhPEE",
    category: "Culture",
    thumb: yt("r2JJEifhPEE"),
  },
  {
    id: "LYjmv6XWF60",
    title: "A walk through the National Museum of Qatar",
    href: "https://www.youtube.com/watch?v=LYjmv6XWF60&t=483s",
    category: "Travel",
    thumb: yt("LYjmv6XWF60"),
  },
  {
    id: "IP1MHSZvva8",
    title: "Happy Heritage Day South Africa",
    href: "https://www.youtube.com/watch?v=IP1MHSZvva8",
    category: "Community",
    thumb: yt("IP1MHSZvva8"),
  },
  {
    id: "P9MsuZC-m8M",
    title: "Qatar dune bashing & desert safari",
    href: "https://www.youtube.com/watch?v=P9MsuZC-m8M",
    category: "Travel",
    thumb: yt("P9MsuZC-m8M"),
  },
  {
    id: "pNZCh-Xbnoc",
    title: "South Africans in Doha on a desert safari to the Inland Sea in Qatar",
    href: "https://youtu.be/pNZCh-Xbnoc",
    category: "Travel",
    thumb: yt("pNZCh-Xbnoc"),
  },
  {
    id: "nLbDVWsgdd4",
    title: "SA Diplomat Abroad does Qatar National Day – Youm Al Watani 2019",
    href: "https://youtu.be/nLbDVWsgdd4",
    category: "Community",
    thumb: yt("nLbDVWsgdd4"),
  },
  {
    id: "lL8RkTC2S9o",
    title: "Abdu-Raof Hanslo facilitates and chairs the African Ambassadors Forum",
    href: "https://youtu.be/lL8RkTC2S9o",
    category: "Diplomacy",
    thumb: yt("lL8RkTC2S9o"),
  },
  {
    id: "faizel-moosa",
    title: "A sit down with HE Ambassador Faizel Moosa",
    href: "https://www.youtube.com/channel/UCz-5fIOxAcTiXzj_FwzOaLg",
    category: "Diplomacy",
    thumb:
      "https://sa-diplomat.com/wp-content/uploads/2021/09/interview_SitDownWithHEAmbasadorFaizelMoosa-1-300x170.jpg",
  },
  {
    id: "datacentrix",
    title: "Datacentrix chats to the SA Diplomat Abroad in Doha",
    href: "https://www.youtube.com/channel/UCz-5fIOxAcTiXzj_FwzOaLg",
    category: "Business",
    thumb: "https://sa-diplomat.com/wp-content/uploads/2021/09/interview_Datacentrix-300x166.jpg",
  },
];

export type Advertiser = { name: string; logo: string };

export const ADVERTISERS: Advertiser[] = [
  {
    name: "Willowton Group",
    logo: "https://sa-diplomat.com/wp-content/uploads/2021/09/WillowtonGroup-Logo-5.jpg",
  },
  {
    name: "Ryme Consulting",
    logo: "https://sa-diplomat.com/wp-content/uploads/2021/09/RymeConsulting-Logo-1.png",
  },
  {
    name: "Love 2 Serve",
    logo: "https://sa-diplomat.com/wp-content/uploads/2021/09/Love2Serve-Logo.png",
  },
  { name: "E fqs", logo: "https://sa-diplomat.com/wp-content/uploads/2021/09/Efqs-Logo.png" },
  {
    name: "CMT Group",
    logo: "https://sa-diplomat.com/wp-content/uploads/2021/09/CMT-Group-Logo.png",
  },
  {
    name: "A2i Integrated Global",
    logo: "https://sa-diplomat.com/wp-content/uploads/2021/09/AiIntegratedGlobal-Logo.png",
  },
];

export const SPONSOR_BANNERS = [
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Dec22.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Aug22.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Apr22.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Sept22.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Mar22-002.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Jan23.png",
  "https://sa-diplomat.com/wp-content/uploads/2023/02/SADA_Banner-ad_Feb23.png",
];

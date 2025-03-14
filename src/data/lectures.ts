import { Lecture } from "../types";

export const lectures: Lecture[] = [
  {
    id: "1",
    title: "General Physics (1) For Engineering",
    description: "سلايديات المقرر",
    thumbnail: "/thumbnail/phy1.png",
    materials: [
      {
        id: "1-3",
        title: "book",
        type: "pdf",
        url: "/materials/phy1/pdf",
      },
      {
        id: "1-1-1",
        title: "ch1",
        type: "pdf",
        url: "/materials/phy1/pdf",
      },
      {
        id: "1-2-2",
        title: "ch1",
        type: "pptx",
        url: "/materials/phy1/ppt/chapter1.ppt",
      },
      {
        id: "1-1-2",
        title: "ch2",
        type: "pdf",
        url: "/materials/phy1/pdf/chapter1.pdf",
      },
      {
        id: "1-2-2",
        title: "ch2",
        type: "pptx",
        url: require("/materials/phy1/ppt/chapter2.ppt") ,
      },
      {
        id: "1-1-3",
        title: "ch3",
        type: "pdf",
        url: "https://drive.google.com/file/d/1VL1ZGRD1PoHeQw0Vgc2EMSRK1oA3uiYK/view?usp=drive_link",
      },
      {
        id: "1-2-3",
        title: "ch3",
        type: "pptx",
        url: "https://drive.google.com/file/d/1VL1ZGRD1PoHeQw0Vgc2EMSRK1oA3uiYK/view?usp=drive_link",
      },
      {
        id: "1-1-4",
        title: "ch4",
        type: "pdf",
        url: "https://drive.google.com/file/d/1VL1ZGRD1PoHeQw0Vgc2EMSRK1oA3uiYK/view?usp=drive_link",
      },
      {
        id: "1-2-4",
        title: "ch4",
        type: "pptx",
        url: "https://drive.google.com/file/d/1VL1ZGRD1PoHeQw0Vgc2EMSRK1oA3uiYK/view?usp=drive_link",
      },
      {
        id: "1-1-5",
        title: "ch5",
        type: "pdf",
        url: "https://drive.google.com/file/d/1VL1ZGRD1PoHeQw0Vgc2EMSRK1oA3uiYK/view?usp=drive_link",
      },
      {
        id: "1-1-5",
        title: "ch5",
        type: "pptx",
        url: "https://drive.google.com/file/d/1VL1ZGRD1PoHeQw0Vgc2EMSRK1oA3uiYK/view?usp=drive_link",
      },
      {
        id: "1-2-5",
        title: "ch6",
        type: "pdf",
        url: "https://drive.google.com/file/d/1VL1ZGRD1PoHeQw0Vgc2EMSRK1oA3uiYK/view?usp=drive_link",
      },
      {
        id: "1-2-6",
        title: "ch6",
        type: "pptx",
        url: "https://drive.google.com/file/d/1VL1ZGRD1PoHeQw0Vgc2EMSRK1oA3uiYK/view?usp=drive_link",
      },
    ],
  },
  {
    id: "2",
    title: "General Physics (2) For Engineering",
    description: "سلايديات المقرر",
    thumbnail: "/thumbnail/phy2.png",
    materials: [
      {
        id: "2-1",
        title: "",
        type: "pdf",
        url: "/materials/state-management.pdf",
      },
      {
        id: "2-2",
        title: "Redux Overview",
        type: "ppt",
        url: "/materials/redux-overview.ppt",
      },
    ],
  },
];

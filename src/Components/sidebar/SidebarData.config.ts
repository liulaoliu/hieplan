import { ReactElement } from "react";
import {
  FaSearch,
  FaEnvelope,
  FaEllipsisH,
  FaTasks,
  FaAlignJustify,
  FaRegFile,
  FaBuromobelexperte,
  FaRegCompass,
} from "react-icons/fa";

import Test from "./Test";

export const SIDEBARREGULARDATA= [
  {
    itemName: "task",
    path: "/task",
    icon: FaTasks,
    urlRelated: true,
    text: "任务",
  },
  {
    itemName: "note",
    path: "/note",
    icon: FaAlignJustify,
    urlRelated: true,
    text: "便签",
  },
  {
    itemName: "project",
    path: "/project",
    icon: FaRegFile,
    urlRelated: true,
    text: "项目",
  },
  {
    itemName: "position",
    path: "/position",
    icon: FaRegCompass,
    urlRelated: true,
    text: "地点",
  },
  {
    itemName: "tag",
    path: "/tag",
    icon: FaBuromobelexperte,
    urlRelated: true,
    text: "标签",
  },
];

export const SIDEBARbottomDATA: any = [
  {
    itemName: "search",
    path: "/search",
    icon: FaSearch,
    urlRelated: true,
    text: null,
  },
  {
    itemName: "message",
    path: null,
    icon: FaEnvelope,
    urlRelated: false,
    text: null,
    childSidebar: Test,
  },
  {
    itemName: "ellipsis",
    path: null,
    icon: FaEllipsisH,
    urlRelated: false,
    text: null,
  },
];

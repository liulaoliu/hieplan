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

export const SIDEBARREGULARDATA: any = [
  {
    itemName: "task",
    path: "/task",
    icon: FaTasks,
    urlRealated: true,
    text: "任务",
  },
  {
    itemName: "note",
    path: "/note",
    icon: FaAlignJustify,
    urlRealated: true,
    text: "便签",
  },
  {
    itemName: "project",
    path: "/project",
    icon: FaRegFile,
    urlRealated: true,
    text: "项目",
  },
  {
    itemName: "position",
    path: "/position",
    icon: FaRegCompass,
    urlRealated: true,
    text: "地点",
  },
  {
    itemName: "tag",
    path: "/tag",
    icon: FaBuromobelexperte,
    urlRealated: true,
    text: "标签",
  },
];

export const SIDEBARbottomDATA: any = [
  {
    itemName: "search",
    path: "/search",
    icon: FaSearch,
    urlRealated: true,
    text: null,
  },
  {
    itemName: "message",
    path: null,
    icon: FaEnvelope,
    urlRelated: false,
    text: null,
  },
  {
    itemName: "ellipsis",
    path: null,
    icon: FaEllipsisH,
    urlRelated: false,
    text: null,
  },
];

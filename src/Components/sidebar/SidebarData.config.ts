import { ReactElement } from "react";
import { FaSearch, FaEnvelope, FaEllipsisH } from "react-icons/fa";

const SIDEBARDATA: any = [
  {
    itemName: "search",
    path: "/search",
    icon: FaSearch,
    urlRealated: true,
  },
  {
    itemName: "message",
    path: null,
    icon: FaEnvelope,
    urlRelated: false,
  },
  {
    itemName: "ellipsis",
    path: null,
    icon: FaEllipsisH,
    urlRelated: false,
  },
];

export default SIDEBARDATA;

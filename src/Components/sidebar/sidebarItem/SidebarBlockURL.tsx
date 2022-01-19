import styles from "./SidebarBlockURL.module.css";
import React, { Component } from "react";
import SidebarBlock, {
  SidebarBlockClassProps,
} from "./SidebarBlockClassVersion";

interface Props extends SidebarBlockClassProps {
  URL: string;
}

interface State {}
/**
 * deprecated
 */
export default class SidebarBlockURL extends SidebarBlock implements Props {
  state = {};
  public URL: string = "";
  constructor(props: Props) {
    super(props);
  }
}

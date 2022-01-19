import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React, { SetStateAction, useState } from "react";
// import SidebarBlock from "./SidebarBlock";
import SidebarBlock from "./SidebarBlock";

test("当传入text'测试按钮后' 该组件应该渲染 测试按钮", () => {
  // 本处无关
  const itemNames = ["01", "02", "03"];
  // 本处无关
  const activeItem = { active: "02" };
  // 本处无关
  const changeActiveItemFn = (itemName: string) => {
    activeItem.active = itemName;
  };

  render(
    <SidebarBlock
      activeItemName={activeItem.active}
      changeActiveItemFn={() => {
        changeActiveItemFn(itemNames[0]);
      }}
      itemName={itemNames[0]}
      text={"测试按钮"}
    ></SidebarBlock>
  );

  const aBlockToClick = screen.getByText(/测试按钮/i);

  expect(aBlockToClick).toBeVisible();
});

test("假设某处维护状态activeItem 为'nullllll'，为该组件传入0x，点击该组件后activeItem应该可以切换为 0x", () => {
  const itemNames = ["01", "02", "03"];
  const activeItem = { active: "nullllll" };

  const changeActiveItemFn = (itemName: string) => {
    activeItem.active = itemName;
  };

  render(
    <div>
      {itemNames.map((item: string, idx: number) => {
        return (
          <SidebarBlock
            activeItemName={activeItem.active}
            changeActiveItemFn={() => {
              changeActiveItemFn(item);
            }}
            itemName={item}
            text={item}
          ></SidebarBlock>
        );
      })}
    </div>
  );

  const aBlockToClick01 = screen.getByText(/01/i);
  const aBlockToClick02 = screen.getByText(/02/i);
  const aBlockToClick03 = screen.getByText(/03/i);

  userEvent.click(aBlockToClick01);
  expect(activeItem.active).toBe("01");

  userEvent.click(aBlockToClick02);
  expect(activeItem.active).toBe("02");

  userEvent.click(aBlockToClick03);
  expect(activeItem.active).toBe("03");
});

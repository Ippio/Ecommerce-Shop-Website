import React from "react";
import { MemoryWrapper } from "./style";

const Memory = ({ listTabMemory, children, currentIndexActive, onChangeTab }) => {
    console.log("list",listTabMemory);
  return (
    <MemoryWrapper>
      <ul className="list-tab">
        {listTabMemory.map((item, index) => {
            console.log(item.storage);
          return (
            <li
              className={`tab-item ${
                currentIndexActive === index ? "active" : ""
              }`}
              onClick={() => onChangeTab(index)}
            >
              <p className="title">{item.storage}</p>
            </li>
          );
        })}
      </ul>
      <div className="list-content">{children}</div>
    </MemoryWrapper>
  );
};

export default Memory;
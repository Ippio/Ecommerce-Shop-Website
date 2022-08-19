import React from "react";
import { FilterItemWrapper } from "./../style";
import { Link } from "react-router-dom";

const FilterItem = ({ filter }) => {
  return (
    <FilterItemWrapper>
      <Link className="category-filter" to="/product">
        <div className="content-filter">
          <div className="content-image">
            <img src={filter.image} alt="" />
          </div>
          <p>{filter.title}</p>
        </div>
      </Link>
    </FilterItemWrapper>
  );
};

export default FilterItem;

import { shallow } from "enzyme";
import { SearchBox } from './search-box.component'
import React from "react";

test("Card component...", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});

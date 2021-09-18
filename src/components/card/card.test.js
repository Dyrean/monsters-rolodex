import { shallow } from "enzyme";
import { Card } from './card.component'
import React from "react";

test("Card component...", () => {
  expect(shallow(<Card monster={{id:3}} />)).toMatchSnapshot();
});

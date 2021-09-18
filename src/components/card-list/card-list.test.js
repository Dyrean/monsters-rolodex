import { shallow } from "enzyme";
import { CardList } from './card-list.component'
import React from "react";

test("Card component...", () => {
    const mockMonsters = [{
        id: 1,
        name: 'Testing',
        username: 'John',
        email: 'john@gmail.com'
    }]
  expect(shallow(<CardList monsters={mockMonsters} />)).toMatchSnapshot();
});

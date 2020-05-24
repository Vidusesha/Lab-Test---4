import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import Joke from './feature2'

test("Joke component receives props and then render the text", () => {
  const { getByTestId } = render(
    <Joke text="The funniest joke of this year." />
  );
  expect(getByTestId("joke-text")).toHaveTextContent(
    "The funniest joke of this year."
  );
});
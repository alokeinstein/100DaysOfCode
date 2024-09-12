/* HOW TO READ THESE NOTES FOR FUTURE ME 
1.Comments written in this way // are for the understanding of the code down below 
2.Comments written in this way /-* *-/ is to wrap the whole code and everything else because another code is going to be witten in the same page thats why, so if you find these kind of comment line then first uncomment it but not these // comment lines because these cant be uncommented because they are not the code they are just for explanation of the code. I hope i would understand what i have written here in the future
*/




// In React projects, it’s common practice to name test files with the .test suffix to distinguish them from regular component files.
// App.test.jsx

/* import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App component", () => {
  it("renders correct heading", () => {

    //render(<App />); renders the App component. This function mounts the component into a virtual DOM provided by the testing library, allowing you to interact with it as if it were rendered in a real browser.
    render(<App />);

    //screen.getByRole("heading") queries the rendered component for an element with the role of “heading”. This is a semantic query that looks for elements like <h1>, <h2>, etc.
    //expect(screen.getByRole("heading").textContent).toMatch(/our first test/i); checks if the text content of the heading matches the regular expression /our first test/i. The i flag makes the match case-insensitive.
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
}); */

/* 
    DETAILED EXPLANATION OF RENDER:
--->The render function from @testing-library/react is used to render React components into a virtual DOM. This allows you to test how components behave and interact without needing a real browser environment. Here’s what render does:

//Mounts the Component: It mounts the component into a virtual DOM, which is a simulated environment that mimics the real DOM.
//Provides Utilities: It provides utilities like screen to query and interact with the rendered component.
// Cleans Up Automatically: After each test, it cleans up the virtual DOM to ensure tests are isolated and do not affect each other.
*/







/* EXAMPLE 1 */
/* import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
}); */

/* EXPLANATION OF EXAMPLE  1 */
// The describe function takes two arguments:
// --->The description: A string that describes what this group of tests is for.
// --->A callback function: Contains the actual test cases (the it blocks).

//2. Test Cases (it)
// A test case is a single unit of testing logic. In Vitest, test cases are defined using the `it` function. Each test case checks a specific scenario.
// --->The description: The first argument is a description of what you are testing.
// --->A callback function: The second argument is the test itself. It contains the actual test logic.

//3. Assertions (expect)
// Assertions are conditions you expect to be true. If they aren't, the test will fail. Assertions are the core of any test case.
// --->expect(): The function that wraps the value you want to test.
// --->.toBe(): The matcher, which checks if the value inside expect equals the value inside toBe. In this case, it checks if true equals true.

// 4. Running Tests
// To execute your tests, you run a command like npm run test (assuming your project is set up with Vitest). This will run all the tests defined in your project. When a test passes, it turns green, and if it fails, it turns red, indicating that something is wrong.

// Summary of the Basic Steps in Testing:
// Describe the test suite using describe.
// Write individual test cases using it.
// Make assertions about your code using expect.




// PRACTICLE EXAMPLE IN REACT:
// Imagine you're testing a React component, like a button. You might have a test that checks if clicking the button changes some text on the page.

/* import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MyButton from './MyButton';

describe('MyButton Component', () => {
  it('should change text when clicked', () => {
    render(<MyButton />);
    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(screen.getByText('Button Clicked')).toBeInTheDocument();
  });
}); */


// This test does the following:
// Renders the component using render.
// Simulates a user clicking the button using userEvent.click.
// Asserts that the text on the screen changes.





















// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test

    // render(<App />): This function is provided by React Testing Library and renders the App component inside a virtual DOM, simulating how it would appear in a browser.
    const { container } = render(<App />);

    //expect(container).toMatchSnapshot(): This line captures the output of the component at the time of rendering and compares it with a previously stored snapshot. If the structure has changed, the test will fail. Snapshots are useful for ensuring that the UI doesn’t change unexpectedly over time.
    expect(container).toMatchSnapshot();
  });




  it("renders radical rhinos after button click", async () => {

    // userEvent.setup(): This sets up a userEvent instance, which simulates how a real user would interact with the component (e.g., clicking buttons, typing text). It’s an improvement over the older fireEvent method, as userEvent can handle asynchronous user interactions.
    const user = userEvent.setup();


    // render(<App />): This renders the App component, just like in the first test.
    render(<App />);

    //screen.getByRole("button", { name: "Click Me" }): The screen object is part of React Testing Library and is a convenient way to query the virtual DOM. Here, you use getByRole to find the button by its role (button) and label text (Click Me).
    const button = screen.getByRole("button", { name: "Click Me" });


    // await user.click(button): This line simulates the user clicking the button. Because userEvent can simulate real user interaction, it mimics a real click, which will trigger the clickHandler in the component and update the state. The await keyword ensures that we wait for this action to complete (since it can be asynchronous).
    await user.click(button);


    //expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i): After the click, the heading should change. This assertion checks if the heading (found by its role) now contains the text "Radical Rhinos". The i flag in the regular expression /radical rhinos/i makes the match case-insensitive.
    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});


/*
SUMMARY
First test case ("renders magnificent monkeys"):

You check that the component initially renders correctly with the heading "Magnificent Monkeys" by matching the output with a saved snapshot of the rendered component.
Second test case ("renders radical rhinos after button click"):

You simulate a button click using userEvent and check that the heading changes to "Radical Rhinos". This tests dynamic behavior based on user interaction. */

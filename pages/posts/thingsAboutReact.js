import React from "react";
import ReactMarkdwon from "react-markdown";

const thingsAboutReact = () => {
  return (
    <ReactMarkdwon>
      ## Things about React that need to be marked - JSX is not a requirement
      for using React. Each JSX element is just syntactic sugar for calling
      `React.createElement(component, props, …children)` . So, anything you can
      do with JSX can also be done with just plain JavaScript. - Is `setState()`
      in React Async or Sync? - `setState` is meant to be asynchronous. **This
      doesn&apos;t mean it will always be asynchronous - it mainly means that
      you just can&apos;t depend on it being synchronous.** React takes into
      consideration many variables in the scenario that you&apos;re changing the
      state in, to decide when the stateshould actually be updated and your
      component rerendered. - A simple example to demonstrate this, is that if
      you call `setState` as a reaction to a user action, then the statewill
      probably be updated immediately (although, again, you can&apos;t count on
      it), so the user won&apos;t feel any delay, but if you call `setState` in
      reaction to an ajax call response or some other event that isn&apos;t
      triggered by the user, then the state might be updated with a slight
      delay, since the user won&apos;t really feel this delay, and it will
      improve performance by waiting to batch multiple state updates together
      and rerender the DOM fewer times.
    </ReactMarkdwon>
  );
};

export default thingsAboutReact;

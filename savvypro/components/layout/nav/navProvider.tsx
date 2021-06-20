import React from "react";

export const TheNavContext = React.createContext({
  startFade: true
});

export class NavProvider extends React.Component {
  state = {
    startFade: false,
    startWith: (startFade: boolean) => {
      this.setState({
        ...this.state,
        startFade
      });
    },
    toggleContextual: (links: { id: string; text: string }[] | undefined) => {
      this.setState({
        ...this.state,
        ctxLinks: links
      });
    }
  };
  render() {
    const {
      state,
      props: { children }
    } = this;
    return (
      <TheNavContext.Provider value={state}>{children}</TheNavContext.Provider>
    );
  }
}

export const NavConsumer = TheNavContext.Consumer;

import React from "react";
import ErrorPage from "./ErrorPage";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          code="404"
          description="Internal Server Error. Something went wrong."
          image="/img/404.png"
        />
      );
    }

    return this.props.children;
  }
}

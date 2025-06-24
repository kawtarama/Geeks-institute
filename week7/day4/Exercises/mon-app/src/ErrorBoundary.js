import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    console.error("Caught error:", error);
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center h-screen bg-red-100">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center border border-red-300">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">Something went wrong.</h2>
            <p className="text-gray-700">Please try refreshing the page or contact support if the problem persists.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

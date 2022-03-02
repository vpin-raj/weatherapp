import React, { Component, ErrorInfo, ReactNode } from 'react'

interface State {
    hasError: boolean;
  }

interface Props {
    children: ReactNode;
  }


class ErrorBoundary extends React.Component<Props, State> {

    public state : State = {
        hasError : false
    }
      
    public static getDerivedStateFromError = (error: Error) : State => {
        return {hasError : true};
    }


    public static componentDidCatch(error :Error, errorInfo : ErrorInfo ){
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
    if (this.state.hasError) {
        return <div>Something went wrong! </div>;
      }
  
      return this.props.children;
  }
}

export default ErrorBoundary
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import FormBody from 'FormBody.jsx'; // Your form component
import SuccessPage from 'SuccessPage.jsx'; // Your success page component
import ErrorBoundary from 'ErrorBoundary.jsx'; // Import the ErrorBoundary component

function App() {
  return (
    <div>
      <h1>React Router Example</h1>
      <ErrorBoundary>
        <Switch>
          <Route path="/" exact component={FormBody} />
          <Route path="/success" component={SuccessPage} />
        </Switch>
      </ErrorBoundary>
    </div>
  );
}

export default App;

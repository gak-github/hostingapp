import React from "react";

const RemoteButton = React.lazy(() => import("remoteapp/Button"));

const App = () => (
  <div>
    <h1>Basic Host-Remote</h1>
    <h2>Hosting Application (app 1)</h2>
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>
  </div>
);

export default App;

import { Route } from 'react-router';

const Welcome = () => {
  return (
    <section>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
      {/* Routes are allowed anywhere in dom */}
    </section>
  );
};

export default Welcome;

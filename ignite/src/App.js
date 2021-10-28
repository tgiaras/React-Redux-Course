//Components and Pages
import Home from './pages/Home';

import { Route } from 'react-router';
import GlobalStyles from './components/GlobalStyles';


function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Route path={["/game/:id", "/"]}>
        <Home />
      </Route>
      
    </div>
  );
}

export default App;

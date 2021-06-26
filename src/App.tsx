import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
// import { ProjectListScreen } from 'screens/project-list';
import { LoginScreen } from 'screens/login';
import { AuthProvider } from 'context/auth-context';
import { ProjectListScreen } from 'screens/project-list';
import { NoMatch } from 'pages/NoMatch';
import { Home } from 'pages/Home';
import { DevelopmentSpan } from 'Components/DevelopmentSpan';
import { DataTable } from 'Components/DataTable';

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      {/* <LoginScreen /> */}
      <Router>
        <AuthProvider>

          <Switch>
            <Route path="/login" component={LoginScreen} />
            <Route path="/home" component={Home} />
            <Route path="/projectlist" component={ProjectListScreen} />
            
            <Route component={LoginScreen} />
          </Switch>

          {/* develop tools */}
          <DevelopmentSpan />
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;

import './App.less';
// import { ProjectListScreen } from 'screens/project-list';
import { LoginScreen } from 'screens/login';
import { AuthProvider } from 'context/auth-context';

function App() {
  return (
    <div className="App">
      {/* <ProjectListScreen /> */}
      <AuthProvider>
        <LoginScreen />
      </AuthProvider>
    </div>
  );
}

export default App;

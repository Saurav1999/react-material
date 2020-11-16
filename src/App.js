import { useTheme } from '@material-ui/core/styles';
import NavBar from './NavBar';
function App() {
  const theme = useTheme();
  console.log(theme);
  return (
    <NavBar/>
  );
}

export default App;

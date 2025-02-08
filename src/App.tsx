import { Card } from './components/card';
import { ThemeToogle } from './components/themeToogle';
import './styles/global.css'

function App() {
  return (
    <div>
      <Card icon={<ThemeToogle />} />
    </div>
  );
}

export default App;

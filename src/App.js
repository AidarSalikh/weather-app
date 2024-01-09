import './App.css';
import { CurrentWeatherTop } from './components/CurrentWeatherTop';
import { TodayHourlyWeather } from './components/TodayHourlyWeather';
import { WeeklyWeatherTable } from './components/WeeklyWeatherTable';
import { MainPaige } from './pages/MainPaige';


function App() {
  return (
      <div className="App">
        <CurrentWeatherTop />
        <TodayHourlyWeather />
        <WeeklyWeatherTable />
        <MainPaige />
      </div>
  );
}

export default App;

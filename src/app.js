import Header from './components/Header';
import Summary from './components/Summary';
// import Tornfalksgrand2 from './components/laundryrooms/Tornfalksgrand2'
// import AlertTornfalksgrand2 from './components/alerts/AlertTornfalksgrand2';
// import Tornfalksgrand6 from './components/laundryrooms/Tornfalksgrand6'
// import AlertTornfalksgrand6 from './components//alerts/AlertTornfalksgrand6';
// import Tornfalksgrand16 from './components/laundryrooms/Tornfalksgrand16'
// import AlertTornfalksgrand16 from './components//alerts/AlertTornfalksgrand16';
// import Tornfalksgrand7 from './components/laundryrooms/Tornfalksgrand7'
// import AlertTornfalksgrand7 from './components//alerts/AlertTornfalksgrand7';
// import Tornfalksgrand5 from './components/laundryrooms/Tornfalksgrand5'
// import AlertTornfalksgrand5 from './components//alerts/AlertTornfalksgrand5';
import Krukmakaren from './components/laundryrooms/Krukmakaren';
import AlertKrukmakaren from './components/alerts/AlertKrukmakaren';
import Korsangen79 from './components/laundryrooms/Korsangen79';
import AlertKorsangen79 from './components/alerts/AlertKorsangen79';
import Korsangen81 from './components/laundryrooms/Korsangen81';
import AlertKorsangen81 from './components/alerts/AlertKorsangen81';
import Korsangen85 from './components/laundryrooms/Korsangen85';
import AlertKorsangen85 from './components/alerts/AlertKorsangen85';
import Korsangen83 from './components/laundryrooms/Korsangen83';
import AlertKorsangen83 from './components/alerts/AlertKorsangen83';
import Korsangen87 from './components/laundryrooms/Korsangen87';
import AlertKorsangen87 from './components/alerts/AlertKorsangen87';
import Korsangen89 from './components/laundryrooms/Korsangen89';
import AlertKorsangen89 from './components/alerts/AlertKorsangen89';
import Korsangen91 from './components/laundryrooms/Korsangen91';
import AlertKorsangen91 from './components/alerts/AlertKorsangen91';
import Korsangen77 from './components/laundryrooms/Korsangen77';
import AlertKorsangen77 from './components/alerts/AlertKorsangen77';
import Korsangen71 from './components/laundryrooms/Korsangen71';
import AlertKorsangen71 from './components/alerts/AlertKorsangen71';
import Korsangen73 from './components/laundryrooms/Korsangen73';
import AlertKorsangen73 from './components/alerts/AlertKorsangen73';
import Korsangen75 from './components/laundryrooms/Korsangen75';
import AlertKorsangen75 from './components/alerts/AlertKorsangen75';
import KorsangenHeavyLaundry from './components/laundryrooms/KorsangenHeavyLaundry';
import AlertKorsangenHeavyLaundry from './components/alerts/AlertKorsangenHeavyLaundry';

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container-fluid p-0">
      ${Header()}
    </div>
    <div class="container">
      ${Summary()}
      ${Krukmakaren()}
      ${AlertKrukmakaren()}
      ${Korsangen79()}
      ${AlertKorsangen79()}
      ${Korsangen81()}
      ${AlertKorsangen81()}
      ${Korsangen85()}
      ${AlertKorsangen85()}
      ${Korsangen83()}
      ${AlertKorsangen83()}
      ${Korsangen87()}
      ${AlertKorsangen87()}
      ${Korsangen89()}
      ${AlertKorsangen89()}
      ${Korsangen91()}
      ${AlertKorsangen91()}
      ${Korsangen77()}
      ${AlertKorsangen77()}
      ${Korsangen71()}
      ${AlertKorsangen71()}
      ${Korsangen73()}
      ${AlertKorsangen73()}
      ${Korsangen75()}
      ${AlertKorsangen75()}
      ${KorsangenHeavyLaundry()}
      ${AlertKorsangenHeavyLaundry()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;
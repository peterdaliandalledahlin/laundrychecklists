import Header from './components/Header';
import Summary from './components/Summary';
import Tornfalksgrand2 from './components/laundryrooms/Tornfalksgrand2'
import AlertTornfalksgrand2 from './components/alerts/AlertTornfalksgrand2';
import Tornfalksgrand6 from './components/laundryrooms/Tornfalksgrand6'
import AlertTornfalksgrand6 from './components//alerts/AlertTornfalksgrand6';
import Tornfalksgrand16 from './components/laundryrooms/Tornfalksgrand16'
import AlertTornfalksgrand16 from './components//alerts/AlertTornfalksgrand16';
import Tornfalksgrand7 from './components/laundryrooms/Tornfalksgrand7'
import AlertTornfalksgrand7 from './components//alerts/AlertTornfalksgrand7';
import Tornfalksgrand5 from './components/laundryrooms/Tornfalksgrand5'
import AlertTornfalksgrand5 from './components//alerts/AlertTornfalksgrand5';

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container-fluid p-0">
      ${Header()}
    </div>
    <div class="container">
      ${Summary()}
      ${Tornfalksgrand2()}
      ${AlertTornfalksgrand2()}
      ${Tornfalksgrand6()}
      ${AlertTornfalksgrand6()}
      ${Tornfalksgrand16()}
      ${AlertTornfalksgrand16()}
      ${Tornfalksgrand7()}
      ${AlertTornfalksgrand7()}
      ${Tornfalksgrand5()}
      ${AlertTornfalksgrand5()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;
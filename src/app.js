import Header from './components/Header';
import Summary from './components/Summary';
import Tornfalksgrand2 from './components/laundryrooms/Tornfalksgrand2';
import AlertTornfalksgrand2 from './components/alerts/AlertTornfalksgrand2';
import Tornfalksgrand12 from './components/laundryrooms/Tornfalksgrand12';
import AlertTornfalksgrand12 from './components//alerts/AlertTornfalksgrand12';
import Tornfalksgrand16 from './components/laundryrooms/Tornfalksgrand16';
import AlertTornfalksgrand16 from './components//alerts/AlertTornfalksgrand16';
import Tornfalksgrand7 from './components/laundryrooms/Tornfalksgrand7';
import AlertTornfalksgrand7 from './components//alerts/AlertTornfalksgrand7';
import Tornfalksgrand5 from './components/laundryrooms/Tornfalksgrand5';
import AlertTornfalksgrand5 from './components//alerts/AlertTornfalksgrand5';
import Stenfalksgrand2 from './components/laundryrooms/Stenfalksgrand2';
import AlertStenfalksgrand2 from './components//alerts/AlertStenfalksgrand2';
import Stenfalksgrand10 from './components/laundryrooms/Stenfalksgrand10';
import AlertStenfalksgrand10 from './components//alerts/AlertStenfalksgrand10';
import Stenfalksgrand14 from './components/laundryrooms/Stenfalksgrand14';
import AlertStenfalksgrand14 from './components//alerts/AlertStenfalksgrand14';
import Stenfalksgrand18 from './components/laundryrooms/Stenfalksgrand18';
import AlertStenfalksgrand18 from './components//alerts/AlertStenfalksgrand18';
import Stenfalksgrand1 from './components/laundryrooms/Stenfalksgrand1';
import AlertStenfalksgrand1 from './components//alerts/AlertStenfalksgrand1';
import Larkfalksgrand2 from './components/laundryrooms/Larkfalksgrand2';
import AlertLarkfalksgrand2 from './components//alerts/AlertLarkfalksgrand2';
import Larkfalksgrand13 from './components/laundryrooms/Larkfalksgrand13';
import AlertLarkfalksgrand13 from './components//alerts/AlertLarkfalksgrand13';
import Larkfalksgrand11 from './components/laundryrooms/Larkfalksgrand11';
import AlertLarkfalksgrand11 from './components//alerts/AlertLarkfalksgrand11';
import Larkfalksgrand5 from './components/laundryrooms/Larkfalksgrand5';
import AlertLarkfalksgrand5 from './components//alerts/AlertLarkfalksgrand5';
import Bivraksgrand5 from './components/laundryrooms/Bivraksgrand5';
import AlertBivraksgrand5 from './components//alerts/AlertBivraksgrand5';
import Bivraksgrand9A from './components/laundryrooms/Bivraksgrand9A';
import AlertBivraksgrand9A from './components//alerts/AlertBivraksgrand9A';
import Bivraksgrand9B from './components/laundryrooms/Bivraksgrand9B';
import AlertBivraksgrand9B from './components//alerts/AlertBivraksgrand9B';
import BivraksgrandHeavyLaundry from './components/laundryrooms/BivraksgrandHeavyLaundry';
import AlertBivraksgrandHeavyLaundry from './components//alerts/AlertBivraksgrandHeavyLaundry';
import Ormvraksgrand6 from './components/laundryrooms/Ormvraksgrand6';
import AlertOrmvraksgrand6 from './components//alerts/AlertOrmvraksgrand6';
import Ormvraksgrand8 from './components/laundryrooms/Ormvraksgrand8';
import AlertOrmvraksgrand8 from './components//alerts/AlertOrmvraksgrand8';
import Ormvraksgrand1 from './components/laundryrooms/Ormvraksgrand1';
import AlertOrmvraksgrand1 from './components//alerts/AlertOrmvraksgrand1';
import Fiskgjusegrand6 from './components/laundryrooms/Fiskgjusegrand6';
import AlertFiskgjusegrand6 from './components//alerts/AlertFiskgjusegrand6';
import Fiskgjusegrand8 from './components/laundryrooms/Fiskgjusegrand8';
import AlertFiskgjusegrand8 from './components//alerts/AlertFiskgjusegrand8';
import Fiskgjusegrand11 from './components/laundryrooms/Fiskgjusegrand11';
import AlertFiskgjusegrand11 from './components//alerts/AlertFiskgjusegrand11';
import Fiskgjusegrand3 from './components/laundryrooms/Fiskgjusegrand3';
import AlertFiskgjusegrand3 from './components//alerts/AlertFiskgjusegrand3';
import ProtectedAreaForm from './components/ProtectedAreaForm';
// import Krukmakaren from './components/laundryrooms/Krukmakaren';
// import AlertKrukmakaren from './components/alerts/AlertKrukmakaren';
// import Korsangen79 from './components/laundryrooms/Korsangen79';
// import AlertKorsangen79 from './components/alerts/AlertKorsangen79';
// import Korsangen81 from './components/laundryrooms/Korsangen81';
// import AlertKorsangen81 from './components/alerts/AlertKorsangen81';
// import Korsangen85 from './components/laundryrooms/Korsangen85';
// import AlertKorsangen85 from './components/alerts/AlertKorsangen85';
// import Korsangen83 from './components/laundryrooms/Korsangen83';
// import AlertKorsangen83 from './components/alerts/AlertKorsangen83';
// import Korsangen87 from './components/laundryrooms/Korsangen87';
// import AlertKorsangen87 from './components/alerts/AlertKorsangen87';
// import Korsangen89 from './components/laundryrooms/Korsangen89';
// import AlertKorsangen89 from './components/alerts/AlertKorsangen89';
// import Korsangen91 from './components/laundryrooms/Korsangen91';
// import AlertKorsangen91 from './components/alerts/AlertKorsangen91';
// import Korsangen77 from './components/laundryrooms/Korsangen77';
// import AlertKorsangen77 from './components/alerts/AlertKorsangen77';
// import Korsangen71 from './components/laundryrooms/Korsangen71';
// import AlertKorsangen71 from './components/alerts/AlertKorsangen71';
// import Korsangen73 from './components/laundryrooms/Korsangen73';
// import AlertKorsangen73 from './components/alerts/AlertKorsangen73';
// import Korsangen75 from './components/laundryrooms/Korsangen75';
// import AlertKorsangen75 from './components/alerts/AlertKorsangen75';
// import KorsangenHeavyLaundry from './components/laundryrooms/KorsangenHeavyLaundry';
// import AlertKorsangenHeavyLaundry from './components/alerts/AlertKorsangenHeavyLaundry';

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container-fluid p-0">
      ${Header()}
    </div>
    <div class="container" align="center">
      ${Summary()}
      ${Tornfalksgrand2()}
      ${AlertTornfalksgrand2()}
      ${Tornfalksgrand12()}
      ${AlertTornfalksgrand12()}
      ${Tornfalksgrand16()}
      ${AlertTornfalksgrand16()}
      ${Tornfalksgrand7()}
      ${AlertTornfalksgrand7()}
      ${Tornfalksgrand5()}
      ${AlertTornfalksgrand5()}
      ${Stenfalksgrand2()}
      ${AlertStenfalksgrand2()}
      ${Stenfalksgrand10()}
      ${AlertStenfalksgrand10()}
      ${Stenfalksgrand14()}
      ${AlertStenfalksgrand14()}
      ${Stenfalksgrand18()}
      ${AlertStenfalksgrand18()}
      ${Stenfalksgrand1()}
      ${AlertStenfalksgrand1()}
      ${Larkfalksgrand2()}
      ${AlertLarkfalksgrand2()}
      ${Larkfalksgrand13()}
      ${AlertLarkfalksgrand13()}
      ${Larkfalksgrand11()}
      ${AlertLarkfalksgrand11()}
      ${Larkfalksgrand5()}
      ${AlertLarkfalksgrand5()}
      ${Bivraksgrand5()}
      ${AlertBivraksgrand5()}
      ${Bivraksgrand9A()}
      ${AlertBivraksgrand9A()}
      ${Bivraksgrand9B()}
      ${AlertBivraksgrand9B()}
      ${BivraksgrandHeavyLaundry()}
      ${AlertBivraksgrandHeavyLaundry()}
      ${Ormvraksgrand6()}
      ${AlertOrmvraksgrand6()}
      ${Ormvraksgrand8()}
      ${AlertOrmvraksgrand8()}
      ${Ormvraksgrand1()}
      ${AlertOrmvraksgrand1()}
      ${Fiskgjusegrand6()}
      ${AlertFiskgjusegrand6()}
      ${Fiskgjusegrand8()}
      ${AlertFiskgjusegrand8()}
      ${Fiskgjusegrand11()}
      ${AlertFiskgjusegrand11()}
      ${Fiskgjusegrand3()}
      ${AlertFiskgjusegrand3()}
      ${ProtectedAreaForm()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;
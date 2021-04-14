import logotype from '../assets/images/logotype.png'
const Header = () => {
	const template = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="${logotype}" class="d-inline-block align-top" alt="laundry checklist logotype">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="laundryLinks" role="button" data-toggle="dropdown" aria-expanded="false">
                Välj tvättstuga
              </a>
              <ul class="dropdown-menu" aria-labelledby="laundryLinks">
                <li><a class="dropdown-item stenfalk" href="#stenfalk2">Stenfalksgränd 2</a></li>
                <li><a class="dropdown-item stenfalk" href="#stenfalk10">Stenfalksgränd 10</a></li>
                <li><a class="dropdown-item stenfalk" href="#stenfalk14">Stenfalksgränd 14</a></li>
                <li><a class="dropdown-item stenfalk" href="#stenfalk18">Stenfalksgränd 18</a></li>
                <li><a class="dropdown-item stenfalk" href="#stenfalk1">Stenfalksgränd 1</a></li>
                <div class="dropdown-divider"></div>
                <!-- Level two dropdown-->
            <li class="dropdown-submenu">
              <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Stenfalksgränd</a>
              <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Tornfalksgränd</a>
              <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Lärkfalksgränd</a>
              <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Bivråksgränd</a>
              <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Ormvråksgränd</a>
              <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">Fiskgjusegränd</a>
              <ul aria-labelledby="dropdownMenu2" class="dropdown-menu border-0 shadow">
                <li>
                  <a tabindex="-1" href="#" class="dropdown-item">2</a>
                  <a tabindex="-1" href="#" class="dropdown-item">10</a>
                  <a tabindex="-1" href="#" class="dropdown-item">14</a>
                  <a tabindex="-1" href="#" class="dropdown-item">18</a>
                  <a tabindex="-1" href="#" class="dropdown-item">1</a>
                </li>
                <li class="dropdown-submenu">
                  <a id="dropdownMenu3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="dropdown-item dropdown-toggle">level 2</a>
                  <ul aria-labelledby="dropdownMenu3" class="dropdown-menu border-0 shadow">
                    <li><a href="#" class="dropdown-item">3rd level</a></li>
                    <li><a href="#" class="dropdown-item">3rd level</a></li>
                  </ul>
                </li> 
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item tornfalk" href="#tornfalk2">Tornfalksgränd 2</a></li>
                <li><a class="dropdown-item tornfalk" href="#tornfalk6">Tornfalksgränd 6</a></li>
                <li><a class="dropdown-item tornfalk" href="#tornfalk16">Tornfalksgränd 16</a></li>
                <li><a class="dropdown-item tornfalk" href="#tornfalk7">Tornfalksgränd 7</a></li>
                <li><a class="dropdown-item tornfalk" href="#tornfalk5">Tornfalksgränd 5</a></li>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item larkfalk" href="#larkfalk2">Lärkfalksgränd 2</a></li>
                <li><a class="dropdown-item larkfalk" href="#larkfalk13">Lärkfalksgränd 13</a></li>
                <li><a class="dropdown-item larkfalk" href="#larkfalk11">Lärkfalksgränd 11</a></li>
                <li><a class="dropdown-item larkfalk" href="#larkfalk5">Lärkfalksgränd 5</a></li>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item bivrak" href="#bivrak5">Bivråkssgränd 5</a></li>
                <li><a class="dropdown-item bivrak" href="#bivrak9:1">Bivråksgränd 9:1</a></li>
                <li><a class="dropdown-item bivrak" href="#bivrak9:2">Bivråksgränd 9:2</a></li>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item ormvrak" href="#ormvrak6">Ormvråkssgränd 6</a></li>
                <li><a class="dropdown-item ormvrak" href="#ormvrak8">Ormvråksgränd 8</a></li>
                <li><a class="dropdown-item ormvrak" href="#ormvrak1">Ormvråksgränd 1</a></li>
                <div class="dropdown-divider"></div>
                <li><a class="dropdown-item fiskgjuse" href="#fiskgjuse8">Fiskgjuseggränd 8</a></li>
                <li><a class="dropdown-item fiskgjuse" href="#fiskgjuse6">Fiskgjusegränd 6</a></li>
                <li><a class="dropdown-item fiskgjuse" href="#fiskgjuse11">Fiskgjusegränd 11</a></li>
                <li><a class="dropdown-item fiskgjuse" href="#fiskgjuse3">Fiskgjusegränd 3</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

	return template;
};

export default Header;

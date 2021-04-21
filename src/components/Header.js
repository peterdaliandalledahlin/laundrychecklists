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
              <a class="nav-link dropdown-toggle text-dark" href="#" id="laundryLinks" role="button" data-toggle="dropdown" aria-expanded="false">
                Välj tvättstuga
              </a>
              <ul class="dropdown-menu" aria-labelledby="laundryLinks">
              <li class="dropdown">
              <a class="dropdown-toggle" href="#" id="navbarDropdown-lillsidan" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lillsidan</a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown-lillsidan">
                <li class="dropdown">
                    <a class="dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Stenfalksgränd</a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a href="#">Stenfalksgränd 2</a></li>
                      <li><a href="#">Stenfalksgränd 6</a></li>
                      <li><a href="#">Stenfalksgränd 16</a></li>
                      <li class="dropdown">
                        <a class="dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown3</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li class=""dropdown>
                    <a class="dropdown-toggle" href="#" id="dropdown-tornfalksgrand" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tornfalksgränd</a>
                    <ul class="dropdown-menu" aria-labelledby="dropdown-tornfalksgrand">
                      <li><a href="#tornfalk2">Tornfalksgränd 2</a></li>
                      <li><a href="#tornfalk6">Tornfalksgränd 6</a></li>
                      <li><a href="#tornfalk16">Tornfalksgränd 16</a></li>
                      <li class="dropdown">
                        <a class="dropdown-toggle" href="#" id="navbarDropdown2" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown3</a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                        </ul>
                      </li>
                    </ul>
                </li>
              </ul>
          </li>
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

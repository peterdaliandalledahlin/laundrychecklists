const AlertStenfalksgrand1 = () => {
	const template = `
        <div class="alert alert-success" role="alert" id="stenfalksgrand1_success">
            <h4 class="alert-heading">Bra gjort!</h4>
            <p>Nu kan du fortsätta till Lärkfalksgränd 2.</p>
            <hr>
            <p class="mb-0">Är det något du undrar över kan du alltid ringa Dalle 070-XXX XX XX eller Annett 070-XXX XX XX.</p>
        </div>
        <div class="alert alert-danger" role="alert" id="stenfalksgrand1_danger">
            <h4 class="alert-heading">Oj då!</h4>
            <p>Nu har du nog glömt och att checka av någon punkt i listan.</p>
            <hr>
            <p class="mb-0">Är det något du undrar över kan du alltid ringa Dalle 070-XXX XX XX eller Annett 070-XXX XX XX.</p>
        </div>
  `;

	return template;
};

export default AlertStenfalksgrand1;
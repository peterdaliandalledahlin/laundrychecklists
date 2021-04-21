import diskborste from '../../assets/images/diskborste.jpg'
import disktrasa from '../../assets/images/disktrasa.png'
import vaskskrapa from '../../assets/images/vaskskrapa.webp'
import moppgarn from '../../assets/images/moppgarn.jpg'
import moppskaft from '../../assets/images/moppskaft.jpg'
import mopphink from '../../assets/images/mopphink.jpg'
import alloren from '../../assets/images/alloren.webp'
import sopborste from '../../assets/images/sopborste.png'
import sopskyffel from '../../assets/images/sopskyffel.png'
import nodutgang from '../../assets/images/nodutgang.jpg'
import lysror from '../../assets/images/lysror.jpg'
import proppskap from '../../assets/images/proppskap.webp'
import teknikskap from '../../assets/images/teknikskap.jpg'

const Korsangen71 = () => {
	const template = `
    <div id="korsangen71_wrapper">
        <h1 class="display-5">Korsängen 71</h1>
        <div class="card mb-3 shadow text-center">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Tvättstugan upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="korsangen71_booked" value="korsangen71_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form name="korsangen71" id="korsangen71">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="korsangen71_diskborste" class="form-check-input korsangen71" type="checkbox" id="korsangen71_diskborste_finns" value="korsangen71_diskborste_finns">
                                <label class="form-check-label" for="korsangen71_diskborste_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${disktrasa}" alt="disktrasa">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Disktrasa</h5>
                            <div class="form-check form-check-inline">
                                <input name="korsangen71_disktrasa" class="form-check-input korsangen71" type="checkbox" id="korsangen71_disktrasa_finns" value="korsangen71_disktrasa_finns">
                                <label class="form-check-label" for="korsangen71_disktrasa_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${vaskskrapa}" alt="vaskskrapa">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Vaskskrapa</h5>
                            <div class="form-check form-check-inline">
                                <input name="korsangen71_vaskskrapa" class="form-check-input korsangen71" type="checkbox" id="korsangen71_vaskskrapa_finns" value="korsangen71_vaskskrapa_finns">
                                <label class="form-check-label" for="korsangen71_vaskskrapa_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${alloren}" alt="alloren">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Alloren</h5>
                            <div class="form-check form-check-inline">
                                <input name="korsangen71_alloren" class="form-check-input korsangen71" type="checkbox" id="korsangen71_alloren_finns" value="korsangen71_alloren_finns">
                                <label class="form-check-label" for="korsangen71_alloren_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${moppgarn}" alt="moppgarn">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Moppgarn</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_moppgarn" id="korsangen71_moppgarn_finns" value="korsangen71_moppgarn_finns">
                                <label class="form-check-label" for="korsangen71_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_moppgarn" id="korsangen71_moppgarn_fattas" value="korsangen71_moppgarn_fattas">
                                <label class="form-check-label" for="korsangen71_moppgarn_fattas">FATTAS</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${moppskaft}" alt="mopp">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Moppskaft</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_moppskaft" id="korsangen71_moppskaft_finns" value="korsangen71_moppskaft_finns">
                                <label class="form-check-label" for="korsangen71_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_moppskaft" id="korsangen71_moppskaft_fattas" value="korsangen71_moppskaft_fattas">
                                <label class="form-check-label" for="korsangen71_moppskaft_fattas">FATTAS</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${mopphink}" alt="mopphink">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Mopphink</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_mopphink" id="korsangen71_mopphink_finns" value="korsangen71_mopphink_finns">
                                <label class="form-check-label" for="korsangen71_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_mopphink" id="korsangen71_mopphink_fattas" value="korsangen71_mopphink_fattas">
                                <label class="form-check-label" for="korsangen71_mopphink_fattas">FATTAS</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${sopborste}" alt="sopborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Sopborste</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_sopborste" id="korsangen71_sopborste_finns" value="korsangen71_sopborste_finns">
                                <label class="form-check-label" for="korsangen71_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_sopborste" id="korsangen71_sopborste_fattas" value="korsangen71_sopborste_fattas">
                                <label class="form-check-label" for="korsangen71_sopborste_fattas">FATTAS</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${sopskyffel}" alt="sopskyffel">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Sopskyffel</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_sopskyffel" id="korsangen71_sopskyffel_finns" value="korsangen71_sopskyffel_finns">
                                <label class="form-check-label" for="korsangen71_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_sopskyffel" id="korsangen71_sopskyffel_fattas" value="korsangen71_sopskyffel_fattas">
                                <label class="form-check-label" for="korsangen71_sopskyffel_fattas">FATTAS</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${lysror}" alt="lysrör">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Lysrör</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_lysror" id="korsangen71_lysror_finns" value="korsangen71_lyror_finns">
                                <label class="form-check-label" for="korsangen71_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input korsangen71" type="radio" name="korsangen71_lysror" id="korsangen71_lysror_fattas" value="korsangen71_lysror_fattas">
                                <label class="form-check-label" for="korsangen71_lysror_fattas">TRASIGA</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${nodutgang}" alt="nödutgångsskylt">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Nödutgång</h5>
                            <p class="card-text">Se till att nödutgången inte är blockerad.</p>
                            <div class="form-check form-check-inline">
                                <input name="korsangen71_nodutgang" class="form-check-input korsangen71" type="checkbox" id="korsangen71_nodutgang_finns" value="korsangen71_nodutgang_finns">
                                <label class="form-check-label" for="korsangen71_nodutgang_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${proppskap}" alt="proppskåp">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Proppskåp</h5>
                            <p class="card-text">Se till att att alla säkringar pekar uppåt.</p>
                            <div class="form-check form-check-inline">
                                <input name="korsangen71_proppskap" class="form-check-input korsangen71" type="checkbox" id="korsangen71_proppskap_finns" value="korsangen71_proppskap_finns">
                                <label class="form-check-label" for="korsangen71_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${teknikskap}" alt="teknikskåp">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Teknikskåp</h5>
                            <p class="card-text">Öppna dörrarna och se till att det inte är något vatten på golvet.</p>
                            <div class="form-check form-check-inline">
                                <input name="korsangen71_teknikskap" class="form-check-input korsangen71" type="checkbox" id="korsangen71_teknikskap_finns" value="korsangen71_teknikskap_finns">
                                <label class="form-check-label" for="korsangen71_teknikskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-korsangen71" type="button" class="btn btn-info">Klar med Korsängen 71</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Korsangen71;
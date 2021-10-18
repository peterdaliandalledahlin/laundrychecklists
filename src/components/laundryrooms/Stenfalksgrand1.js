import laundryKey from '../../assets/images/key.png'
import diskborste from '../../assets/images/diskborste.jpg'
import disktrasa from '../../assets/images/disktrasa.png'
import vaskskrapa from '../../assets/images/vaskskrapa.webp'
import luddborste from '../../assets/images/luddborste.jpg'
import moppgarn from '../../assets/images/moppgarn.jpg'
import moppskaft from '../../assets/images/moppskaft.jpg'
import mopphink from '../../assets/images/mopphink.jpg'
import alloren from '../../assets/images/alloren.webp'
import sopborste from '../../assets/images/sopborste.png'
import sopskyffel from '../../assets/images/sopskyffel.png'
import nodutgang from '../../assets/images/nodutgang.jpg'
import lysror from '../../assets/images/lysror.jpg'
import proppskap from '../../assets/images/proppskap.webp'

const Stenfalksgrand1 = () => {
	const template = `
        <div class="card mb-3 shadow text-center stenfalksgrandett_booked_wrapper">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Stenfalksgränd 1 upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input name="stenfalksgrandett_booked" class="form-check-input stenfalksgrandett" type="checkbox" id="stenfalksgrandett_booked" value="stenfalksgrandett_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="stenfalksgrandett_wrapper">
        <h1 class="display-5">Stenfalksgränd 1</h1>
        <div class="key_wrapper mb-2"><img src="${laundryKey}" alt="nyckel" /> <span>nr. 1</span></div>
        <form name="stenfalk1" id="stenfalk1">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="stenfalksgrandett_diskborste" class="form-check-input stenfalksgrandett" type="checkbox" id="stenfalksgrandett_diskborste_finns" value="stenfalksgrandett_diskborste_finns">
                                <label class="form-check-label" for="stenfalksgrandett_diskborste_finns">CHECK</label>
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
                                <input name="stenfalksgrandett_disktrasa" class="form-check-input stenfalksgrandett" type="checkbox" id="stenfalksgrandett_disktrasa_finns" value="stenfalksgrandett_disktrasa_finns">
                                <label class="form-check-label" for="stenfalksgrandett_disktrasa_finns">CHECK</label>
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
                                <input name="stenfalksgrandett_vaskskrapa" class="form-check-input stenfalksgrandett" type="checkbox" id="stenfalksgrandett_vaskskrapa_finns" value="stenfalksgrandett_vaskskrapa_finns">
                                <label class="form-check-label" for="stenfalksgrandett_vaskskrapa_finns">CHECK</label>
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
                                <input name="stenfalksgrandett_alloren" class="form-check-input stenfalksgrandett" type="checkbox" id="stenfalksgrandett_alloren_finns" value="stenfalksgrandett_alloren_finns">
                                <label class="form-check-label" for="stenfalksgrandett_alloren_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${luddborste}" alt="luddborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Luddborste</h5>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_luddborste" id="stenfalksgrandett_luddborste_finns" value="stenfalksgrandett_luddborste_finns">
                                <label class="form-check-label" for="stenfalksgrandett_luddborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_luddborste" id="stenfalksgrandett_luddborste_fattas" value="stenfalksgrandett_luddborste_fattas">
                                <label class="form-check-label" for="stenfalksgrandett_luddborste_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_moppgarn" id="stenfalksgrandett_moppgarn_finns" value="stenfalksgrandett_moppgarn_finns">
                                <label class="form-check-label" for="stenfalksgrandett_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_moppgarn" id="stenfalksgrandett_moppgarn_fattas" value="stenfalksgrandett_moppgarn_fattas">
                                <label class="form-check-label" for="stenfalksgrandett_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_moppskaft" id="stenfalksgrandett_moppskaft_finns" value="stenfalksgrandett_moppskaft_finns">
                                <label class="form-check-label" for="stenfalksgrandett_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_moppskaft" id="stenfalksgrandett_moppskaft_fattas" value="stenfalksgrandett_moppskaft_fattas">
                                <label class="form-check-label" for="stenfalksgrandett_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_mopphink" id="stenfalksgrandett_mopphink_finns" value="stenfalksgrandett_mopphink_finns">
                                <label class="form-check-label" for="stenfalksgrandett_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_mopphink" id="stenfalksgrandett_mopphink_fattas" value="stenfalksgrandett_mopphink_fattas">
                                <label class="form-check-label" for="stenfalksgrandett_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_sopborste" id="stenfalksgrandett_sopborste_finns" value="stenfalksgrandett_sopborste_finns">
                                <label class="form-check-label" for="stenfalksgrandett_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_sopborste" id="stenfalksgrandett_sopborste_fattas" value="stenfalksgrandett_sopborste_fattas">
                                <label class="form-check-label" for="stenfalksgrandett_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_sopskyffel" id="stenfalksgrandett_sopskyffel_finns" value="stenfalksgrandett_sopskyffel_finns">
                                <label class="form-check-label" for="stenfalksgrandett_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_sopskyffel" id="stenfalksgrandett_sopskyffel_fattas" value="stenfalksgrandett_sopskyffel_fattas">
                                <label class="form-check-label" for="stenfalksgrandett_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_lysror" id="stenfalksgrandett_lysror_finns" value="stenfalksgrandett_lyror_finns">
                                <label class="form-check-label" for="stenfalksgrandett_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrandett" type="radio" name="stenfalksgrandett_lysror" id="stenfalksgrandett_lysror_fattas" value="stenfalksgrandett_lysror_fattas">
                                <label class="form-check-label" for="stenfalksgrandett_lysror_fattas">TRASIGA</label>
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
                                <input name="stenfalksgrandett_nodutgang" class="form-check-input stenfalksgrandett" type="checkbox" id="stenfalksgrandett_nodutgang_finns" value="stenfalksgrandett_nodutgang_finns">
                                <label class="form-check-label" for="stenfalksgrandett_nodutgang_finns">CHECK</label>
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
                                <input name="stenfalksgrandett_proppskap" class="form-check-input stenfalksgrandett" type="checkbox" id="stenfalksgrandett_proppskap_finns" value="stenfalksgrandett_proppskap_finns">
                                <label class="form-check-label" for="stenfalksgrandett_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-stenfalksgrandett" type="button" class="btn btn-info">Klar med Stenfalksgränd 1</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Stenfalksgrand1;

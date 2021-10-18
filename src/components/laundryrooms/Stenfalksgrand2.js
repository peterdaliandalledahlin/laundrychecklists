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

const Stenfalksgrand2 = () => {
	const template = `
        <div class="card mb-3 shadow text-center stenfalksgrand2_booked_wrapper">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Stenfalksgränd 2 upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input name="stenfalksgrand2_booked" class="form-check-input stenfalksgrand2" type="checkbox" id="stenfalksgrand2_booked" value="stenfalksgrand2_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="stenfalksgrand2_wrapper">
        <h1 class="display-5">Stenfalksgränd 2</h1>
        <div class="key_wrapper mb-2"><img src="${laundryKey}" alt="nyckel" /> <span>nr. 1</span></div>
        <form name="stenfalk2" id="stenfalk2">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="stenfalksgrand2_diskborste" class="form-check-input stenfalksgrand2" type="checkbox" id="stenfalksgrand2_diskborste_finns" value="stenfalksgrand2_diskborste_finns">
                                <label class="form-check-label" for="tornfalksgrand_2_diskborste_finns">CHECK</label>
                            <!---
                                <label class="check-container">Check
                                    <input name="stenfalksgrand2_diskborste" type="checkbox" id="stenfalksgrand2_diskborste_finns" value="stenfalksgrand2_diskborste_finns">
                                    <span class="checkmark"></span>
                                </label>
                            --->
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
                                <input name="stenfalksgrand2_disktrasa" class="form-check-input stenfalksgrand2" type="checkbox" id="stenfalksgrand2_disktrasa_finns" value="stenfalksgrand2_disktrasa_finns">
                                <label class="form-check-label" for="stenfalksgrand2_disktrasa_finns">CHECK</label>
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
                                <input name="stenfalksgrand2_vaskskrapa" class="form-check-input stenfalksgrand2" type="checkbox" id="stenfalksgrand2_vaskskrapa_finns" value="stenfalksgrand2_vaskskrapa_finns">
                                <label class="form-check-label" for="stenfalksgrand2_vaskskrapa_finns">CHECK</label>
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
                                <input name="stenfalksgrand2_alloren" class="form-check-input stenfalksgrand2" type="checkbox" id="stenfalksgrand2_alloren_finns" value="stenfalksgrand2_alloren_finns">
                                <label class="form-check-label" for="stenfalksgrand2_alloren_finns">CHECK</label>
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
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_luddborste" id="stenfalksgrand2_luddborste_finns" value="stenfalksgrand2_luddborste_finns">
                                <label class="form-check-label" for="stenfalksgrand2_luddborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_luddborste" id="stenfalksgrand2_luddborste_fattas" value="stenfalksgrand2_luddborste_fattas">
                                <label class="form-check-label" for="stenfalksgrand2_luddborste_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_moppgarn" id="stenfalksgrand2_moppgarn_finns" value="stenfalksgrand2_moppgarn_finns">
                                <label class="form-check-label" for="stenfalksgrand2_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_moppgarn" id="stenfalksgrand2_moppgarn_fattas" value="stenfalksgrand2_moppgarn_fattas">
                                <label class="form-check-label" for="stenfalksgrand2_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_moppskaft" id="stenfalksgrand2_moppskaft_finns" value="stenfalksgrand2_moppskaft_finns">
                                <label class="form-check-label" for="stenfalksgrand2_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_moppskaft" id="stenfalksgrand2_moppskaft_fattas" value="stenfalksgrand2_moppskaft_fattas">
                                <label class="form-check-label" for="stenfalksgrand2_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_mopphink" id="stenfalksgrand2_mopphink_finns" value="stenfalksgrand2_mopphink_finns">
                                <label class="form-check-label" for="stenfalksgrand2_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_mopphink" id="stenfalksgrand2_mopphink_fattas" value="stenfalksgrand2_mopphink_fattas">
                                <label class="form-check-label" for="stenfalksgrand2_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_sopborste" id="stenfalksgrand2_sopborste_finns" value="stenfalksgrand2_sopborste_finns">
                                <label class="form-check-label" for="stenfalksgrand2_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_sopborste" id="stenfalksgrand2_sopborste_fattas" value="stenfalksgrand2_sopborste_fattas">
                                <label class="form-check-label" for="stenfalksgrand2_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_sopskyffel" id="stenfalksgrand2_sopskyffel_finns" value="stenfalksgrand2_sopskyffel_finns">
                                <label class="form-check-label" for="stenfalksgrand2_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_sopskyffel" id="stenfalksgrand2_sopskyffel_fattas" value="stenfalksgrand2_sopskyffel_fattas">
                                <label class="form-check-label" for="stenfalksgrand2_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_lysror" id="stenfalksgrand2_lysror_finns" value="stenfalksgrand2_lyror_finns">
                                <label class="form-check-label" for="stenfalksgrand2_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand2" type="radio" name="stenfalksgrand2_lysror" id="stenfalksgrand2_lysror_fattas" value="stenfalksgrand2_lysror_fattas">
                                <label class="form-check-label" for="stenfalksgrand2_lysror_fattas">TRASIGA</label>
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
                                <input name="stenfalksgrand2_nodutgang" class="form-check-input stenfalksgrand2" type="checkbox" id="stenfalksgrand2_nodutgang_finns" value="stenfalksgrand2_nodutgang_finns">
                                <label class="form-check-label" for="stenfalksgrand2_nodutgang_finns">CHECK</label>
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
                                <input name="stenfalksgrand2_proppskap" class="form-check-input stenfalksgrand2" type="checkbox" id="stenfalksgrand2_proppskap_finns" value="stenfalksgrand2_proppskap_finns">
                                <label class="form-check-label" for="stenfalksgrand2_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-stenfalksgrand2" type="button" class="btn btn-info">Klar med Stenfalksgränd 2</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Stenfalksgrand2;

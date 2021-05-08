import laundryKey from '../../assets/images/key.png'
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

const Larkfalksgrand11 = () => {
	const template = `
        <div class="card mb-3 shadow text-center larkfalksgrand11_booked_wrapper">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Lärkfalksgränd 11 upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input name="larkfalksgrand11_booked" class="form-check-input larkfalksgrand11" type="checkbox" id="larkfalksgrand11_booked" value="larkfalksgrand11_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="larkfalksgrand11_wrapper">
        <h1 class="display-5">Lärkfalksgränd 11</h1>
        <div class="key_wrapper mb-2"><img src="${laundryKey}" alt="nyckel" /> <span>nr. 2</span></div>
        <form name="larkfalk11" id="larkfalk11">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="larkfalksgrand11_diskborste" class="form-check-input larkfalksgrand11" type="checkbox" id="larkfalksgrand11_diskborste_finns" value="larkfalksgrand11_diskborste_finns">
                                <label class="form-check-label" for="tornfalksgrand_2_diskborste_finns">CHECK</label>
                            <!---
                                <label class="check-container">Check
                                    <input name="larkfalksgrand11_diskborste" type="checkbox" id="larkfalksgrand11_diskborste_finns" value="larkfalksgrand11_diskborste_finns">
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
                                <input name="larkfalksgrand11_disktrasa" class="form-check-input larkfalksgrand11" type="checkbox" id="larkfalksgrand11_disktrasa_finns" value="larkfalksgrand11_disktrasa_finns">
                                <label class="form-check-label" for="larkfalksgrand11_disktrasa_finns">CHECK</label>
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
                                <input name="larkfalksgrand11_vaskskrapa" class="form-check-input larkfalksgrand11" type="checkbox" id="larkfalksgrand11_vaskskrapa_finns" value="larkfalksgrand11_vaskskrapa_finns">
                                <label class="form-check-label" for="larkfalksgrand11_vaskskrapa_finns">CHECK</label>
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
                                <input name="larkfalksgrand11_alloren" class="form-check-input larkfalksgrand11" type="checkbox" id="larkfalksgrand11_alloren_finns" value="larkfalksgrand11_alloren_finns">
                                <label class="form-check-label" for="larkfalksgrand11_alloren_finns">CHECK</label>
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
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_moppgarn" id="larkfalksgrand11_moppgarn_finns" value="larkfalksgrand11_moppgarn_finns">
                                <label class="form-check-label" for="larkfalksgrand11_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_moppgarn" id="larkfalksgrand11_moppgarn_fattas" value="larkfalksgrand11_moppgarn_fattas">
                                <label class="form-check-label" for="larkfalksgrand11_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_moppskaft" id="larkfalksgrand11_moppskaft_finns" value="larkfalksgrand11_moppskaft_finns">
                                <label class="form-check-label" for="larkfalksgrand11_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_moppskaft" id="larkfalksgrand11_moppskaft_fattas" value="larkfalksgrand11_moppskaft_fattas">
                                <label class="form-check-label" for="larkfalksgrand11_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_mopphink" id="larkfalksgrand11_mopphink_finns" value="larkfalksgrand11_mopphink_finns">
                                <label class="form-check-label" for="larkfalksgrand11_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_mopphink" id="larkfalksgrand11_mopphink_fattas" value="larkfalksgrand11_mopphink_fattas">
                                <label class="form-check-label" for="larkfalksgrand11_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_sopborste" id="larkfalksgrand11_sopborste_finns" value="larkfalksgrand11_sopborste_finns">
                                <label class="form-check-label" for="larkfalksgrand11_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_sopborste" id="larkfalksgrand11_sopborste_fattas" value="larkfalksgrand11_sopborste_fattas">
                                <label class="form-check-label" for="larkfalksgrand11_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_sopskyffel" id="larkfalksgrand11_sopskyffel_finns" value="larkfalksgrand11_sopskyffel_finns">
                                <label class="form-check-label" for="larkfalksgrand11_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_sopskyffel" id="larkfalksgrand11_sopskyffel_fattas" value="larkfalksgrand11_sopskyffel_fattas">
                                <label class="form-check-label" for="larkfalksgrand11_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_lysror" id="larkfalksgrand11_lysror_finns" value="larkfalksgrand11_lyror_finns">
                                <label class="form-check-label" for="larkfalksgrand11_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input larkfalksgrand11" type="radio" name="larkfalksgrand11_lysror" id="larkfalksgrand11_lysror_fattas" value="larkfalksgrand11_lysror_fattas">
                                <label class="form-check-label" for="larkfalksgrand11_lysror_fattas">TRASIGA</label>
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
                                <input name="larkfalksgrand11_nodutgang" class="form-check-input larkfalksgrand11" type="checkbox" id="larkfalksgrand11_nodutgang_finns" value="larkfalksgrand11_nodutgang_finns">
                                <label class="form-check-label" for="larkfalksgrand11_nodutgang_finns">CHECK</label>
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
                                <input name="larkfalksgrand11_proppskap" class="form-check-input larkfalksgrand11" type="checkbox" id="larkfalksgrand11_proppskap_finns" value="larkfalksgrand11_proppskap_finns">
                                <label class="form-check-label" for="larkfalksgrand11_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-larkfalksgrand11" type="button" class="btn btn-info">Klar med Lärkfalksgränd 11</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Larkfalksgrand11;

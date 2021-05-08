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

const Bivraksgrand5 = () => {
	const template = `
        <div class="card mb-3 shadow text-center bivraksgrand5_booked_wrapper">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Bivråksgränd 5 upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input name="bivraksgrand5_booked" class="form-check-input bivraksgrand5" type="checkbox" id="bivraksgrand5_booked" value="bivraksgrand5_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="bivraksgrand5_wrapper">
        <h1 class="display-5">Bivråksgränd 5</h1>
        <div class="key_wrapper mb-2"><img src="${laundryKey}" alt="nyckel" /> <span>nr. 3</span></div>
        <form name="bivrak5" id="bivrak5">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="bivraksgrand5_diskborste" class="form-check-input bivraksgrand5" type="checkbox" id="bivraksgrand5_diskborste_finns" value="bivraksgrand5_diskborste_finns">
                                <label class="form-check-label" for="tornfalksgrand_2_diskborste_finns">CHECK</label>
                            <!---
                                <label class="check-container">Check
                                    <input name="bivraksgrand5_diskborste" type="checkbox" id="bivraksgrand5_diskborste_finns" value="bivraksgrand5_diskborste_finns">
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
                                <input name="bivraksgrand5_disktrasa" class="form-check-input bivraksgrand5" type="checkbox" id="bivraksgrand5_disktrasa_finns" value="bivraksgrand5_disktrasa_finns">
                                <label class="form-check-label" for="bivraksgrand5_disktrasa_finns">CHECK</label>
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
                                <input name="bivraksgrand5_vaskskrapa" class="form-check-input bivraksgrand5" type="checkbox" id="bivraksgrand5_vaskskrapa_finns" value="bivraksgrand5_vaskskrapa_finns">
                                <label class="form-check-label" for="bivraksgrand5_vaskskrapa_finns">CHECK</label>
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
                                <input name="bivraksgrand5_alloren" class="form-check-input bivraksgrand5" type="checkbox" id="bivraksgrand5_alloren_finns" value="bivraksgrand5_alloren_finns">
                                <label class="form-check-label" for="bivraksgrand5_alloren_finns">CHECK</label>
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
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_moppgarn" id="bivraksgrand5_moppgarn_finns" value="bivraksgrand5_moppgarn_finns">
                                <label class="form-check-label" for="bivraksgrand5_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_moppgarn" id="bivraksgrand5_moppgarn_fattas" value="bivraksgrand5_moppgarn_fattas">
                                <label class="form-check-label" for="bivraksgrand5_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_moppskaft" id="bivraksgrand5_moppskaft_finns" value="bivraksgrand5_moppskaft_finns">
                                <label class="form-check-label" for="bivraksgrand5_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_moppskaft" id="bivraksgrand5_moppskaft_fattas" value="bivraksgrand5_moppskaft_fattas">
                                <label class="form-check-label" for="bivraksgrand5_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_mopphink" id="bivraksgrand5_mopphink_finns" value="bivraksgrand5_mopphink_finns">
                                <label class="form-check-label" for="bivraksgrand5_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_mopphink" id="bivraksgrand5_mopphink_fattas" value="bivraksgrand5_mopphink_fattas">
                                <label class="form-check-label" for="bivraksgrand5_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_sopborste" id="bivraksgrand5_sopborste_finns" value="bivraksgrand5_sopborste_finns">
                                <label class="form-check-label" for="bivraksgrand5_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_sopborste" id="bivraksgrand5_sopborste_fattas" value="bivraksgrand5_sopborste_fattas">
                                <label class="form-check-label" for="bivraksgrand5_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_sopskyffel" id="bivraksgrand5_sopskyffel_finns" value="bivraksgrand5_sopskyffel_finns">
                                <label class="form-check-label" for="bivraksgrand5_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_sopskyffel" id="bivraksgrand5_sopskyffel_fattas" value="bivraksgrand5_sopskyffel_fattas">
                                <label class="form-check-label" for="bivraksgrand5_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_lysror" id="bivraksgrand5_lysror_finns" value="bivraksgrand5_lyror_finns">
                                <label class="form-check-label" for="bivraksgrand5_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrand5" type="radio" name="bivraksgrand5_lysror" id="bivraksgrand5_lysror_fattas" value="bivraksgrand5_lysror_fattas">
                                <label class="form-check-label" for="bivraksgrand5_lysror_fattas">TRASIGA</label>
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
                                <input name="bivraksgrand5_nodutgang" class="form-check-input bivraksgrand5" type="checkbox" id="bivraksgrand5_nodutgang_finns" value="bivraksgrand5_nodutgang_finns">
                                <label class="form-check-label" for="bivraksgrand5_nodutgang_finns">CHECK</label>
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
                                <input name="bivraksgrand5_proppskap" class="form-check-input bivraksgrand5" type="checkbox" id="bivraksgrand5_proppskap_finns" value="bivraksgrand5_proppskap_finns">
                                <label class="form-check-label" for="bivraksgrand5_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-bivraksgrand5" type="button" class="btn btn-info">Klar med Bivråkssgränd 5</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Bivraksgrand5;

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
import lysror from '../../assets/images/lysror.jpg'
import proppskap from '../../assets/images/proppskap.webp'

const BivraksgrandHeavyLaundry = () => {
	const template = `
        <div class="card mb-3 shadow text-center bivraksgrandheavylaundry_booked_wrapper">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Bivråksgränd grovtvättstugan upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input name="bivraksgrandheavylaundry_booked" class="form-check-input bivraksgrandheavylaundry" type="checkbox" id="bivraksgrandheavylaundry_booked" value="bivraksgrandheavylaundry_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="bivraksgrandheavylaundry_wrapper">
        <h1 class="display-5">Bivråksgränd grovtvättstugan</h1>
        <div class="key_wrapper mb-2"><img src="${laundryKey}" alt="nyckel" /> <span>nr. 3</span></div>
        <form name="bivrakheavylaundry" id="bivrakheavylaundry">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="bivraksgrandheavylaundry_diskborste" class="form-check-input bivraksgrandheavylaundry" type="checkbox" id="bivraksgrandheavylaundry_diskborste_finns" value="bivraksgrandheavylaundry_diskborste_finns">
                                <label class="form-check-label" for="tornfalksgrand_2_diskborste_finns">CHECK</label>
                            <!---
                                <label class="check-container">Check
                                    <input name="bivraksgrandheavylaundry_diskborste" type="checkbox" id="bivraksgrandheavylaundry_diskborste_finns" value="bivraksgrandheavylaundry_diskborste_finns">
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
                                <input name="bivraksgrandheavylaundry_disktrasa" class="form-check-input bivraksgrandheavylaundry" type="checkbox" id="bivraksgrandheavylaundry_disktrasa_finns" value="bivraksgrandheavylaundry_disktrasa_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_disktrasa_finns">CHECK</label>
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
                                <input name="bivraksgrandheavylaundry_vaskskrapa" class="form-check-input bivraksgrandheavylaundry" type="checkbox" id="bivraksgrandheavylaundry_vaskskrapa_finns" value="bivraksgrandheavylaundry_vaskskrapa_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_vaskskrapa_finns">CHECK</label>
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
                                <input name="bivraksgrandheavylaundry_alloren" class="form-check-input bivraksgrandheavylaundry" type="checkbox" id="bivraksgrandheavylaundry_alloren_finns" value="bivraksgrandheavylaundry_alloren_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_alloren_finns">CHECK</label>
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
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_moppgarn" id="bivraksgrandheavylaundry_moppgarn_finns" value="bivraksgrandheavylaundry_moppgarn_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_moppgarn" id="bivraksgrandheavylaundry_moppgarn_fattas" value="bivraksgrandheavylaundry_moppgarn_fattas">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_moppskaft" id="bivraksgrandheavylaundry_moppskaft_finns" value="bivraksgrandheavylaundry_moppskaft_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_moppskaft" id="bivraksgrandheavylaundry_moppskaft_fattas" value="bivraksgrandheavylaundry_moppskaft_fattas">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_mopphink" id="bivraksgrandheavylaundry_mopphink_finns" value="bivraksgrandheavylaundry_mopphink_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_mopphink" id="bivraksgrandheavylaundry_mopphink_fattas" value="bivraksgrandheavylaundry_mopphink_fattas">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_sopborste" id="bivraksgrandheavylaundry_sopborste_finns" value="bivraksgrandheavylaundry_sopborste_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_sopborste" id="bivraksgrandheavylaundry_sopborste_fattas" value="bivraksgrandheavylaundry_sopborste_fattas">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_sopskyffel" id="bivraksgrandheavylaundry_sopskyffel_finns" value="bivraksgrandheavylaundry_sopskyffel_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_sopskyffel" id="bivraksgrandheavylaundry_sopskyffel_fattas" value="bivraksgrandheavylaundry_sopskyffel_fattas">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_lysror" id="bivraksgrandheavylaundry_lysror_finns" value="bivraksgrandheavylaundry_lyror_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input bivraksgrandheavylaundry" type="radio" name="bivraksgrandheavylaundry_lysror" id="bivraksgrandheavylaundry_lysror_fattas" value="bivraksgrandheavylaundry_lysror_fattas">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_lysror_fattas">TRASIGA</label>
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
                                <input name="bivraksgrandheavylaundry_proppskap" class="form-check-input bivraksgrandheavylaundry" type="checkbox" id="bivraksgrandheavylaundry_proppskap_finns" value="bivraksgrandheavylaundry_proppskap_finns">
                                <label class="form-check-label" for="bivraksgrandheavylaundry_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-bivraksgrandheavylaundry" type="button" class="btn btn-info">Klar med Bivråkssgränd grovtvättstugan</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default BivraksgrandHeavyLaundry;

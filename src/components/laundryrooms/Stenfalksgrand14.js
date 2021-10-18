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

const Stenfalksgrand14 = () => {
	const template = `
        <div class="card mb-3 shadow text-center stenfalksgrand14_booked_wrapper">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Stenfalksgränd 14 upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input name="stenfalksgrand14_booked" class="form-check-input stenfalksgrand14" type="checkbox" id="stenfalksgrand14_booked" value="stenfalksgrand14_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="stenfalksgrand14_wrapper">
        <h1 class="display-5">Stenfalksgränd 14</h1>
        <div class="key_wrapper mb-2"><img src="${laundryKey}" alt="nyckel" /> <span>nr. 1</span></div>
        <form name="stenfalk14" id="stenfalk14">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="stenfalksgrand14_diskborste" class="form-check-input stenfalksgrand14" type="checkbox" id="stenfalksgrand14_diskborste_finns" value="stenfalksgrand14_diskborste_finns">
                                <label class="form-check-label" for="tornfalksgrand_2_diskborste_finns">CHECK</label>
                            <!---
                                <label class="check-container">Check
                                    <input name="stenfalksgrand14_diskborste" type="checkbox" id="stenfalksgrand14_diskborste_finns" value="stenfalksgrand14_diskborste_finns">
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
                                <input name="stenfalksgrand14_disktrasa" class="form-check-input stenfalksgrand14" type="checkbox" id="stenfalksgrand14_disktrasa_finns" value="stenfalksgrand14_disktrasa_finns">
                                <label class="form-check-label" for="stenfalksgrand14_disktrasa_finns">CHECK</label>
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
                                <input name="stenfalksgrand14_vaskskrapa" class="form-check-input stenfalksgrand14" type="checkbox" id="stenfalksgrand14_vaskskrapa_finns" value="stenfalksgrand14_vaskskrapa_finns">
                                <label class="form-check-label" for="stenfalksgrand14_vaskskrapa_finns">CHECK</label>
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
                                <input name="stenfalksgrand14_alloren" class="form-check-input stenfalksgrand14" type="checkbox" id="stenfalksgrand14_alloren_finns" value="stenfalksgrand14_alloren_finns">
                                <label class="form-check-label" for="stenfalksgrand14_alloren_finns">CHECK</label>
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
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_luddborste" id="stenfalksgrand14_luddborste_finns" value="stenfalksgrand14_luddborste_finns">
                                <label class="form-check-label" for="stenfalksgrand14_luddborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_luddborste" id="stenfalksgrand14_luddborste_fattas" value="stenfalksgrand14_luddborste_fattas">
                                <label class="form-check-label" for="stenfalksgrand14_luddborste_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_moppgarn" id="stenfalksgrand14_moppgarn_finns" value="stenfalksgrand14_moppgarn_finns">
                                <label class="form-check-label" for="stenfalksgrand14_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_moppgarn" id="stenfalksgrand14_moppgarn_fattas" value="stenfalksgrand14_moppgarn_fattas">
                                <label class="form-check-label" for="stenfalksgrand14_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_moppskaft" id="stenfalksgrand14_moppskaft_finns" value="stenfalksgrand14_moppskaft_finns">
                                <label class="form-check-label" for="stenfalksgrand14_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_moppskaft" id="stenfalksgrand14_moppskaft_fattas" value="stenfalksgrand14_moppskaft_fattas">
                                <label class="form-check-label" for="stenfalksgrand14_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_mopphink" id="stenfalksgrand14_mopphink_finns" value="stenfalksgrand14_mopphink_finns">
                                <label class="form-check-label" for="stenfalksgrand14_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_mopphink" id="stenfalksgrand14_mopphink_fattas" value="stenfalksgrand14_mopphink_fattas">
                                <label class="form-check-label" for="stenfalksgrand14_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_sopborste" id="stenfalksgrand14_sopborste_finns" value="stenfalksgrand14_sopborste_finns">
                                <label class="form-check-label" for="stenfalksgrand14_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_sopborste" id="stenfalksgrand14_sopborste_fattas" value="stenfalksgrand14_sopborste_fattas">
                                <label class="form-check-label" for="stenfalksgrand14_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_sopskyffel" id="stenfalksgrand14_sopskyffel_finns" value="stenfalksgrand14_sopskyffel_finns">
                                <label class="form-check-label" for="stenfalksgrand14_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_sopskyffel" id="stenfalksgrand14_sopskyffel_fattas" value="stenfalksgrand14_sopskyffel_fattas">
                                <label class="form-check-label" for="stenfalksgrand14_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_lysror" id="stenfalksgrand14_lysror_finns" value="stenfalksgrand14_lyror_finns">
                                <label class="form-check-label" for="stenfalksgrand14_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand14" type="radio" name="stenfalksgrand14_lysror" id="stenfalksgrand14_lysror_fattas" value="stenfalksgrand14_lysror_fattas">
                                <label class="form-check-label" for="stenfalksgrand14_lysror_fattas">TRASIGA</label>
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
                                <input name="stenfalksgrand14_nodutgang" class="form-check-input stenfalksgrand14" type="checkbox" id="stenfalksgrand14_nodutgang_finns" value="stenfalksgrand14_nodutgang_finns">
                                <label class="form-check-label" for="stenfalksgrand14_nodutgang_finns">CHECK</label>
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
                                <input name="stenfalksgrand14_proppskap" class="form-check-input stenfalksgrand14" type="checkbox" id="stenfalksgrand14_proppskap_finns" value="stenfalksgrand14_proppskap_finns">
                                <label class="form-check-label" for="stenfalksgrand14_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-stenfalksgrand14" type="button" class="btn btn-info">Klar med Stenfalksgränd 14</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Stenfalksgrand14;

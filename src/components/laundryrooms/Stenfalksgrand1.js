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

const Stenfalksgrand1 = () => {
	const template = `
    <div id="stenfalksgrand1_wrapper">
        <h1 class="display-5">Stenfalksgränd 1</h1>
        <div class="card mb-3 shadow text-center">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Tvättstugan upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="stenfalksgrand1_booked" value="stenfalksgrand1_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                <input name="stenfalksgrand1_diskborste" class="form-check-input stenfalksgrand1" type="checkbox" id="stenfalksgrand1_diskborste_finns" value="stenfalksgrand1_diskborste_finns">
                                <label class="form-check-label" for="tornfalksgrand_2_diskborste_finns">CHECK</label>
                            <!---
                                <label class="check-container">Check
                                    <input name="stenfalksgrand1_diskborste" type="checkbox" id="stenfalksgrand1_diskborste_finns" value="stenfalksgrand1_diskborste_finns">
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
                                <input name="stenfalksgrand1_disktrasa" class="form-check-input stenfalksgrand1" type="checkbox" id="stenfalksgrand1_disktrasa_finns" value="stenfalksgrand1_disktrasa_finns">
                                <label class="form-check-label" for="stenfalksgrand1_disktrasa_finns">CHECK</label>
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
                                <input name="stenfalksgrand1_vaskskrapa" class="form-check-input stenfalksgrand1" type="checkbox" id="stenfalksgrand1_vaskskrapa_finns" value="stenfalksgrand1_vaskskrapa_finns">
                                <label class="form-check-label" for="stenfalksgrand1_vaskskrapa_finns">CHECK</label>
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
                                <input name="stenfalksgrand1_alloren" class="form-check-input stenfalksgrand1" type="checkbox" id="stenfalksgrand1_alloren_finns" value="stenfalksgrand1_alloren_finns">
                                <label class="form-check-label" for="stenfalksgrand1_alloren_finns">CHECK</label>
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
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_moppgarn" id="stenfalksgrand1_moppgarn_finns" value="stenfalksgrand1_moppgarn_finns">
                                <label class="form-check-label" for="stenfalksgrand1_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_moppgarn" id="stenfalksgrand1_moppgarn_fattas" value="stenfalksgrand1_moppgarn_fattas">
                                <label class="form-check-label" for="stenfalksgrand1_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_moppskaft" id="stenfalksgrand1_moppskaft_finns" value="stenfalksgrand1_moppskaft_finns">
                                <label class="form-check-label" for="stenfalksgrand1_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_moppskaft" id="stenfalksgrand1_moppskaft_fattas" value="stenfalksgrand1_moppskaft_fattas">
                                <label class="form-check-label" for="stenfalksgrand1_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_mopphink" id="stenfalksgrand1_mopphink_finns" value="stenfalksgrand1_mopphink_finns">
                                <label class="form-check-label" for="stenfalksgrand1_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_mopphink" id="stenfalksgrand1_mopphink_fattas" value="stenfalksgrand1_mopphink_fattas">
                                <label class="form-check-label" for="stenfalksgrand1_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_sopborste" id="stenfalksgrand1_sopborste_finns" value="stenfalksgrand1_sopborste_finns">
                                <label class="form-check-label" for="stenfalksgrand1_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_sopborste" id="stenfalksgrand1_sopborste_fattas" value="stenfalksgrand1_sopborste_fattas">
                                <label class="form-check-label" for="stenfalksgrand1_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_sopskyffel" id="stenfalksgrand1_sopskyffel_finns" value="stenfalksgrand1_sopskyffel_finns">
                                <label class="form-check-label" for="stenfalksgrand1_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_sopskyffel" id="stenfalksgrand1_sopskyffel_fattas" value="stenfalksgrand1_sopskyffel_fattas">
                                <label class="form-check-label" for="stenfalksgrand1_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_lysror" id="stenfalksgrand1_lysror_finns" value="stenfalksgrand1_lyror_finns">
                                <label class="form-check-label" for="stenfalksgrand1_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input stenfalksgrand1" type="radio" name="stenfalksgrand1_lysror" id="stenfalksgrand1_lysror_fattas" value="stenfalksgrand1_lysror_fattas">
                                <label class="form-check-label" for="stenfalksgrand1_lysror_fattas">TRASIGA</label>
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
                                <input name="stenfalksgrand1_nodutgang" class="form-check-input stenfalksgrand1" type="checkbox" id="stenfalksgrand1_nodutgang_finns" value="stenfalksgrand1_nodutgang_finns">
                                <label class="form-check-label" for="stenfalksgrand1_nodutgang_finns">CHECK</label>
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
                                <input name="stenfalksgrand1_proppskap" class="form-check-input stenfalksgrand1" type="checkbox" id="stenfalksgrand1_proppskap_finns" value="stenfalksgrand1_proppskap_finns">
                                <label class="form-check-label" for="stenfalksgrand1_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-stenfalksgrand1" type="button" class="btn btn-info">Klar med Stenfalksgränd 1</button>
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

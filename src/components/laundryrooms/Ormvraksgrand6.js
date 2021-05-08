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

const Ormvraksgrand6 = () => {
	const template = `
        <div class="card mb-3 shadow text-center ormvraksgrand6_booked_wrapper">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Ormvråksgränd 6 upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input name="ormvraksgrand6_booked" class="form-check-input ormvraksgrand6" type="checkbox" id="ormvraksgrand6_booked" value="ormvraksgrand6_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="ormvraksgrand6_wrapper">
        <h1 class="display-5">Ormvråksgränd 6</h1>
        <div class="key_wrapper mb-2"><img src="${laundryKey}" alt="nyckel" /> <span>nr. 4</span></div>
        <form name="ormvrak6" id="ormvrak6">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="ormvraksgrand6_diskborste" class="form-check-input ormvraksgrand6" type="checkbox" id="ormvraksgrand6_diskborste_finns" value="ormvraksgrand6_diskborste_finns">
                                <label class="form-check-label" for="tornfalksgrand_2_diskborste_finns">CHECK</label>
                            <!---
                                <label class="check-container">Check
                                    <input name="ormvraksgrand6_diskborste" type="checkbox" id="ormvraksgrand6_diskborste_finns" value="ormvraksgrand6_diskborste_finns">
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
                                <input name="ormvraksgrand6_disktrasa" class="form-check-input ormvraksgrand6" type="checkbox" id="ormvraksgrand6_disktrasa_finns" value="ormvraksgrand6_disktrasa_finns">
                                <label class="form-check-label" for="ormvraksgrand6_disktrasa_finns">CHECK</label>
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
                                <input name="ormvraksgrand6_vaskskrapa" class="form-check-input ormvraksgrand6" type="checkbox" id="ormvraksgrand6_vaskskrapa_finns" value="ormvraksgrand6_vaskskrapa_finns">
                                <label class="form-check-label" for="ormvraksgrand6_vaskskrapa_finns">CHECK</label>
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
                                <input name="ormvraksgrand6_alloren" class="form-check-input ormvraksgrand6" type="checkbox" id="ormvraksgrand6_alloren_finns" value="ormvraksgrand6_alloren_finns">
                                <label class="form-check-label" for="ormvraksgrand6_alloren_finns">CHECK</label>
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
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_moppgarn" id="ormvraksgrand6_moppgarn_finns" value="ormvraksgrand6_moppgarn_finns">
                                <label class="form-check-label" for="ormvraksgrand6_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_moppgarn" id="ormvraksgrand6_moppgarn_fattas" value="ormvraksgrand6_moppgarn_fattas">
                                <label class="form-check-label" for="ormvraksgrand6_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_moppskaft" id="ormvraksgrand6_moppskaft_finns" value="ormvraksgrand6_moppskaft_finns">
                                <label class="form-check-label" for="ormvraksgrand6_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_moppskaft" id="ormvraksgrand6_moppskaft_fattas" value="ormvraksgrand6_moppskaft_fattas">
                                <label class="form-check-label" for="ormvraksgrand6_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_mopphink" id="ormvraksgrand6_mopphink_finns" value="ormvraksgrand6_mopphink_finns">
                                <label class="form-check-label" for="ormvraksgrand6_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_mopphink" id="ormvraksgrand6_mopphink_fattas" value="ormvraksgrand6_mopphink_fattas">
                                <label class="form-check-label" for="ormvraksgrand6_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_sopborste" id="ormvraksgrand6_sopborste_finns" value="ormvraksgrand6_sopborste_finns">
                                <label class="form-check-label" for="ormvraksgrand6_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_sopborste" id="ormvraksgrand6_sopborste_fattas" value="ormvraksgrand6_sopborste_fattas">
                                <label class="form-check-label" for="ormvraksgrand6_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_sopskyffel" id="ormvraksgrand6_sopskyffel_finns" value="ormvraksgrand6_sopskyffel_finns">
                                <label class="form-check-label" for="ormvraksgrand6_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_sopskyffel" id="ormvraksgrand6_sopskyffel_fattas" value="ormvraksgrand6_sopskyffel_fattas">
                                <label class="form-check-label" for="ormvraksgrand6_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_lysror" id="ormvraksgrand6_lysror_finns" value="ormvraksgrand6_lyror_finns">
                                <label class="form-check-label" for="ormvraksgrand6_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input ormvraksgrand6" type="radio" name="ormvraksgrand6_lysror" id="ormvraksgrand6_lysror_fattas" value="ormvraksgrand6_lysror_fattas">
                                <label class="form-check-label" for="ormvraksgrand6_lysror_fattas">TRASIGA</label>
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
                                <input name="ormvraksgrand6_nodutgang" class="form-check-input ormvraksgrand6" type="checkbox" id="ormvraksgrand6_nodutgang_finns" value="ormvraksgrand6_nodutgang_finns">
                                <label class="form-check-label" for="ormvraksgrand6_nodutgang_finns">CHECK</label>
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
                                <input name="ormvraksgrand6_proppskap" class="form-check-input ormvraksgrand6" type="checkbox" id="ormvraksgrand6_proppskap_finns" value="ormvraksgrand6_proppskap_finns">
                                <label class="form-check-label" for="ormvraksgrand6_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-ormvraksgrand6" type="button" class="btn btn-info">Klar med Ormvråksgränd 6</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Ormvraksgrand6;

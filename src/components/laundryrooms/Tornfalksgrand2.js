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

const Tornfalksgrand2 = () => {
	const template = `       
        <div class="card mb-3 shadow text-center tornfalksgrand2_booked_wrapper">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Tornfalksgränd 2 upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input name="tornfalksgrand2_booked" class="form-check-input tornfalksgrand2" type="checkbox" id="tornfalksgrand2_booked" value="tornfalksgrand2_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="tornfalksgrand2_wrapper">
        <h1 class="display-5">Tornfalksgränd 2</h1>
        <div class="key_wrapper mb-2"><img src="${laundryKey}" alt="nyckel" /> <span>nr. 1</span></div>
        <form name="tornfalk2" id="tornfalk2">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="tornfalksgrand2_diskborste" class="form-check-input tornfalksgrand2" type="checkbox" id="tornfalksgrand2_diskborste_finns" value="tornfalk_2_diskborste_finns">
                                <label class="form-check-label" for="tornfalksgrand_2_diskborste_finns">CHECK</label>
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
                                <input name="tornfalksgrand2_disktrasa" class="form-check-input tornfalksgrand2" type="checkbox" id="tornfalksgrand2_disktrasa_finns" value="tornfalk_2_disktrasa_finns">
                                <label class="form-check-label" for="tornfalksgrand2_disktrasa_finns">CHECK</label>
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
                                <input name="tornfalksgrand2_vaskskrapa" class="form-check-input tornfalksgrand2" type="checkbox" id="tornfalksgrand2_vaskskrapa_finns" value="tornfalk_2_vaskskrapa_finns">
                                <label class="form-check-label" for="tornfalk_2_vaskskrapa_finns">CHECK</label>
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
                                <input name="tornfalksgrand2_alloren" class="form-check-input tornfalksgrand2" type="checkbox" id="tornfalksgrand2_alloren_finns" value="tornfalk_2_alloren_finns">
                                <label class="form-check-label" for="tornfalksgrand2_alloren_finns">CHECK</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_moppgarn" id="tornfalksgrand2_moppgarn_finns" value="tornfalk_2_moppgarn_finns">
                                <label class="form-check-label" for="tornfalksgrand2_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_moppgarn" id="tornfalksgrand2_moppgarn_fattas" value="tornfalk_2_moppgarn_fattas">
                                <label class="form-check-label" for="tornfalksgrand2_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_moppskaft" id="tornfalksgrand2_moppskaft_finns" value="tornfalk_2_moppskaft_finns">
                                <label class="form-check-label" for="tornfalksgrand2_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_moppskaft" id="tornfalksgrand2_moppskaft_fattas" value="tornfalk_2_moppskaft_fattas">
                                <label class="form-check-label" for="tornfalksgrand2_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_mopphink" id="tornfalksgrand2_mopphink_finns" value="tornfalk_2_mopphink_finns">
                                <label class="form-check-label" for="tornfalksgrand2_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_mopphink" id="tornfalksgrand2_mopphink_fattas" value="tornfalk_2_mopphink_fattas">
                                <label class="form-check-label" for="tornfalksgrand2_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_sopborste" id="tornfalksgrand2_sopborste_finns" value="tornfalk_2_sopborste_finns">
                                <label class="form-check-label" for="tornfalksgrand2_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_sopborste" id="tornfalksgrand2_sopborste_fattas" value="tornfalk_2_sopborste_fattas">
                                <label class="form-check-label" for="tornfalksgrand2_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_sopskyffel" id="tornfalksgrand2_sopskyffel_finns" value="tornfalk_2_sopskyffel_finns">
                                <label class="form-check-label" for="tornfalksgrand2_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_sopskyffel" id="tornfalksgrand2_sopskyffel_fattas" value="tornfalk_2_sopskyffel_fattas">
                                <label class="form-check-label" for="tornfalksgrand2_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_lysror" id="tornfalksgrand2_lysror_finns" value="tornfalk_2_lyror_finns">
                                <label class="form-check-label" for="tornfalksgrand2_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="tornfalksgrand2_lysror" id="tornfalksgrand2_lysror_fattas" value="tornfalk_2_lysror_fattas">
                                <label class="form-check-label" for="tornfalksgrand2_lysror_fattas">TRASIGA</label>
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
                                <input name="tornfalksgrand2_nodutgang" class="form-check-input tornfalksgrand2" type="checkbox" id="tornfalksgrand2_nodutgang_finns" value="tornfalk_2_nodutgang_finns">
                                <label class="form-check-label" for="tornfalksgrand2_nodutgang_finns">CHECK</label>
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
                                <input name="tornfalksgrand2_proppskap" class="form-check-input tornfalksgrand2" type="checkbox" id="tornfalksgrand2_proppskap_finns" value="tornfalk_2_proppskap_finns">
                                <label class="form-check-label" for="tornfalksgrand2_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-tornfalksgrand2" type="button" class="btn btn-info">Klar med Tornfalksgränd 2</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Tornfalksgrand2;

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

const Krukmakaren = () => {
	const template = `
    <div id="krukmakaren_wrapper">
        <h1 class="display-5">Krukmakaren</h1>
        <div class="card mb-3 shadow text-center">
            <div class="row g-0">
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">Tvättstugan upptagen</h5>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" id="krukmakaren_booked" value="krukmakaren_booked">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <form name="krukmakaren" id="krukmakaren">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="krukmakaren_diskborste" class="form-check-input krukmakaren" type="checkbox" id="krukmakaren_diskborste_finns" value="krukmakaren_diskborste_finns">
                                <label class="form-check-label" for="krukmakaren_2_diskborste_finns">CHECK</label>
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
                                <input name="krukmakaren_disktrasa" class="form-check-input tornfalksgrand2" type="checkbox" id="krukmakaren_disktrasa_finns" value="krukmakaren_disktrasa_finns">
                                <label class="form-check-label" for="tornfalk_2_disktrasa_finns">CHECK</label>
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
                                <input name="krukmakaren_vaskskrapa" class="form-check-input tornfalksgrand2" type="checkbox" id="krukmakaren_vaskskrapa_finns" value="krukmakaren_vaskskrapa_finns">
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
                                <input name="krukmakaren_alloren" class="form-check-input tornfalksgrand2" type="checkbox" id="krukmakaren_alloren_finns" value="krukmakaren_alloren_finns">
                                <label class="form-check-label" for="krukmakaren_alloren_finns">CHECK</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_moppgarn" id="krukmakaren_moppgarn_finns" value="krukmakaren_moppgarn_finns">
                                <label class="form-check-label" for="krukmakaren_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_moppgarn" id="krukmakaren_moppgarn_fattas" value="krukmakaren_moppgarn_fattas">
                                <label class="form-check-label" for="krukmakaren_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_moppskaft" id="krukmakaren_moppskaft_finns" value="krukmakaren_moppskaft_finns">
                                <label class="form-check-label" for="krukmakaren_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_moppskaft" id="krukmakaren_moppskaft_fattas" value="krukmakaren_moppskaft_fattas">
                                <label class="form-check-label" for="krukmakaren_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_mopphink" id="krukmakaren_mopphink_finns" value="krukmakaren_mopphink_finns">
                                <label class="form-check-label" for="krukmakaren_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_mopphink" id="krukmakaren_mopphink_fattas" value="krukmakaren_mopphink_fattas">
                                <label class="form-check-label" for="krukmakaren_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_sopborste" id="krukmakaren_sopborste_finns" value="krukmakaren_sopborste_finns">
                                <label class="form-check-label" for="krukmakaren_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_sopborste" id="krukmakaren_sopborste_fattas" value="krukmakaren_sopborste_fattas">
                                <label class="form-check-label" for="krukmakaren_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_sopskyffel" id="krukmakaren_sopskyffel_finns" value="krukmakaren_sopskyffel_finns">
                                <label class="form-check-label" for="krukmakaren_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_sopskyffel" id="krukmakaren_sopskyffel_fattas" value="krukmakaren_sopskyffel_fattas">
                                <label class="form-check-label" for="krukmakaren_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_lysror" id="krukmakaren_lysror_finns" value="krukmakaren_lysror_finns">
                                <label class="form-check-label" for="krukmakaren_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand2" type="radio" name="krukmakaren_lysror" id="krukmakaren_lysror_fattas" value="krukmakaren_lysror_fattas">
                                <label class="form-check-label" for="krukmakaren_lysror_fattas">TRASIGA</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-krukmakaren" type="button" class="btn btn-info">Klar med Krukmakaren</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Krukmakaren;

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

const Tornfalksgrand16 = () => {
	const template = `
    <div id="tornfalksgrand16_wrapper">
        <h1 class="display-5">Tornfalksgränd 16</h1>
        <form name="tornfalk16" id="tornfalk16">
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${diskborste}" alt="diskborste">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Diskborste</h5>
                            <div class="form-check form-check-inline">
                                <input name="tornfalksgrand16_diskborste" class="form-check-input tornfalksgrand16" type="checkbox" id="tornfalk_16_diskborste_finns" value="tornfalk_16_diskborste_finns">
                                <label class="form-check-label" for="tornfalk_16_diskborste_finns">CHECK</label>
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
                                <input name="tornfalksgrand16_disktrasa" class="form-check-input tornfalksgrand16" type="checkbox" id="tornfalk_16_disktrasa_finns" value="tornfalk_16_disktrasa_finns">
                                <label class="form-check-label" for="tornfalk_16_disktrasa_finns">CHECK</label>
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
                                <input name="tornfalksgrand16_vaskskrapa" class="form-check-input tornfalksgrand16" type="checkbox" id="tornfalk_16_vaskskrapa_finns" value="tornfalk_16_vaskskrapa_finns">
                                <label class="form-check-label" for="tornfalk_16_vaskskrapa_finns">CHECK</label>
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
                                <input name="tornfalksgrand16_alloren" class="form-check-input tornfalksgrand16" type="checkbox" id="tornfalk_16_alloren_finns" value="tornfalk_16_alloren_finns">
                                <label class="form-check-label" for="tornfalk_16_alloren_finns">CHECK</label>
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
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_moppgarn" id="tornfalk_16_moppgarn_finns" value="tornfalk_16_moppgarn_finns">
                                <label class="form-check-label" for="tornfalk_16_moppgarn_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_moppgarn" id="tornfalk_16_moppgarn_fattas" value="tornfalk_16_moppgarn_fattas">
                                <label class="form-check-label" for="tornfalk_16_moppgarn_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_moppskaft" id="tornfalk_16_moppskaft_finns" value="tornfalk_16_moppskaft_finns">
                                <label class="form-check-label" for="tornfalk_16_moppskaft_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_moppskaft" id="tornfalk_16_moppskaft_fattas" value="tornfalk_16_moppskaft_fattas">
                                <label class="form-check-label" for="tornfalk_16_moppskaft_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_mopphink" id="tornfalk_16_mopphink_finns" value="tornfalk_16_mopphink_finns">
                                <label class="form-check-label" for="tornfalk_16_mopphink_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_mopphink" id="tornfalk_16_mopphink_fattas" value="tornfalk_16_mopphink_fattas">
                                <label class="form-check-label" for="tornfalk_16_mopphink_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_sopborste" id="tornfalk_16_sopborste_finns" value="tornfalk_16_sopborste_finns">
                                <label class="form-check-label" for="tornfalk_16_sopborste_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_sopborste" id="tornfalk_16_sopborste_fattas" value="tornfalk_16_sopborste_fattas">
                                <label class="form-check-label" for="tornfalk_16_sopborste_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_sopskyffel" id="tornfalk_16_sopskyffel_finns" value="tornfalk_16_sopskyffel_finns">
                                <label class="form-check-label" for="tornfalk_16_sopskyffel_finns">FINNS</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_sopskyffel" id="tornfalk_16_sopskyffel_fattas" value="tornfalk_16_sopskyffel_fattas">
                                <label class="form-check-label" for="tornfalk_16_sopskyffel_fattas">FATTAS</label>
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
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_lysror" id="tornfalk_16_lysror_finns" value="tornfalk_16_lyror_finns">
                                <label class="form-check-label" for="tornfalk_16_lysror_finns">HELA</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input tornfalksgrand16" type="radio" name="tornfalksgrand16_lysror" id="tornfalk_16_lysror_fattas" value="tornfalk_16_lysror_fattas">
                                <label class="form-check-label" for="tornfalk_16_lysror_fattas">TRASIGA</label>
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
                                <input name="tornfalksgrand16_nodutgang" class="form-check-input tornfalksgrand16" type="checkbox" id="tornfalk_16_nodutgang_finns" value="tornfalk_16_nodutgang_finns">
                                <label class="form-check-label" for="tornfalk_16_nodutgang_finns">CHECK</label>
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
                                <input name="tornfalksgrand16_proppskap" class="form-check-input tornfalksgrand16" type="checkbox" id="tornfalk_16_proppskap_finns" value="tornfalk_16_proppskap_finns">
                                <label class="form-check-label" for="tornfalk_16_proppskap_finns">CHECK</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card mb-3 shadow text-center">
                <div class="row g-0">
                    <div class="col-md-8">
                        <div class="card-body">
                            <button id="check-tornfalksgrand16" type="button" class="btn btn-info">Klar med Tornfalksgränd 16</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  `;

	return template;
};

export default Tornfalksgrand16;

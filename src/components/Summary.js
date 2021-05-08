const Summary = () => {
	const template = ` 
    <div class="card shadow" style="margin:120px 0 30px 0;">
      <div class="card-header bg-info">
        Sammanställning
      </div>
      <div class="card-body">
        <h6 class="card-title">Detta behöver åtgärdas i tvättstugorna.</h6>
        <p id="summary" class="card-text"></p>
        <button id="clear-data" type="button" class="btn btn-danger my-2" disabled>Rensa</button>
      </div>
    </div>
  `;

	return template;
};

export default Summary;
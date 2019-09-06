$(document).ready(function() {
	
    let calcBtn = $('#calc-btn');
    
    calcBtn.on('click', (e) => {
        e.preventDefault();
        // set up variables
        let hgb = $("#hgb").val();
        let hct = $("#hct").val();
        let rbc = $("#rbc").val();
        // MCV Calculation here
        let mcvCalculation = hct * 10 / rbc;
        // MCHC calculation here
        let mchcCalculation = hgb * 100 / hct;

            // MCV calculation is  Hct *10 / Rbc;
            // mchc calculation is Hgb *100 / Hct;

            if(isNaN(hgb) || hgb === "" || isNaN(hct) || hct === "" || isNaN(rbc) || rbc === ""){
                $('#mcv').html('All fields Required!');
                $('#mchc').html('');

            } else {
                $('#mcv').html('Calculated MCV: ' + mcvCalculation.toFixed(2));
                $('#mchc').html('Calculated MCHC: ' + mchcCalculation.toFixed(2));
                console.log('mcv : ' + mcvCalculation);
                console.log('mchc : ' + mchcCalculation);
            }
    });
});
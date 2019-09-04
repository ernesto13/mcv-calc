$(document).ready(function($) {
	
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

       
        $('#mcv').html('Calculated MCV: ' + mcvCalculation.toFixed(1));
        $('#mchc').html('Calculated MCHC: ' + mchcCalculation.toFixed(1));
        console.log('mcv : ' + mcvCalculation);
        console.log('mchc : ' + mchcCalculation);

    });
});

//*variables----/
const txtLOCALADULTS = document.getElementById("localadults");
const txtDURLOAD = document.getElementById("durload");
const txtFOREIGNADULTS = document.getElementById("foreignadults");
const txtDURFOAD = document.getElementById("durfoad");
const txtDURCHIL = document.getElementById("durchil");
const txtDURCHIL1 = document.getElementById("durchil1");
const txtAGECHIL = document.getElementById("agechil");
const txtAGECHIL1 = document.getElementById("agechil1");
const txtNAME = document.getElementById("name");
const txtCHILDREN = document.getElementById("children");
const txtCHILDREN1 = document.getElementById("children1");
const btnCalculate1 = document.getElementById("Addorder1");
const btnCalculate3 = document.getElementById("Addorder2");
const btnCalculate2 = document.getElementById("Placeorder");
const btnCalculate4 = document.getElementById("Placeorder1");
const txtNUM = document.getElementById("num");
const txtEXTYPE = document.getElementById("extype");

const txtOutput1 = document.getElementById("currentorder1");
const txtOutput2 = document.getElementById("currentorder2");
const txtLastOutput1=document.getElementById("overallorder");
const txtLastOutput2=document.getElementById("overallorder");
  
//*--EventListners/

btnCalculate1.addEventListener("click", calculateValue1);
btnCalculate2.addEventListener("click",generatePDF);
btnCalculate3.addEventListener("click",calculateValue4);
btnCalculate4.addEventListener("click",generatePDF);

//*--calculating local ticket price/

function calculateValue2(event) {
    {
         
        let localadults = parseInt(txtLOCALADULTS.value); 
        let durfoad = parseInt(txtDURFOAD.value);
        let foreignadults= parseInt(txtFOREIGNADULTS.value);
        let durchil = parseInt(txtDURCHIL.value)
        let agechil= parseInt(txtAGECHIL.value);
        let children= parseInt(txtCHILDREN.value);
       let durload = parseInt(txtDURLOAD.value);
       let num = parseInt(txtNUM.value);
       let extype=parseInt(txtEXTYPE.value);

       let cal1 = (localadults*2500+ durload + children*agechil + durchil );
       let cal2 =(foreignadults*5000+durfoad+children*agechil + durchil);
       let cala=num*extype;
       let calf=num*extype;
      let cal=cal1+cal2;
      let cal3=cala+calf;
      let calx=cal1+cal2+cal;
      txtOutput1.innerText = `----------------Normal Payments------------
         --- Local Adults   = ${localadults*2500}----
        --- Children       = ${children*agechil}----
        --- SubTotal(Normal payments) = ${cal1.toFixed(2)}-----
        ------------------Extras--------------------
        --- Annual pass          =${cala.toFixed(2)}-----
        --- Food token           =${calf.toFixed(2)}
        --- Sub Total(Extras)     =${cal3.toFixed(2)}
        --------------------------------------------`;

      }
}

//*--calculating foreign ticket price/
function calculateValue3(event){


   
  let durfoad = parseInt(txtDURFOAD.value);
  let foreignadults= parseInt(txtFOREIGNADULTS.value);
  let durchil1 = parseInt(txtDURCHIL1.value)
  let agechil1= parseInt(txtAGECHIL1.value);
  let children1= parseInt(txtCHILDREN1.value);
  
 let num = parseInt(txtNUM.value);
 let extype=parseInt(txtEXTYPE.value);

 
 let cal2 =(foreignadults*5000+durfoad+children1*agechil1 + durchil1);
 let cala=num*extype;
 let calf=num*extype;
 
let cal3=cala+calf;
 
txtOutput2.innerText = `----------------Normal Payments------------
  --- Foreign Adults = ${foreignadults*5000}--
  --- Children       = ${children1*agechil1}----
  --- SubTotal(Normal Payments)=${cal2.toFixed(2)}
  ------------------Extras--------------------
  --- Annual pass          =${cala.toFixed(2)}-----
  --- Food token           =${calf.toFixed(2)}
  --- Sub Total(Extras)     =${cal3.toFixed(2)}
  --------------------------------------------`;

}

//*--overall order calculation for locals/

function calculateValue1(event){


  let localadults = parseInt(txtLOCALADULTS.value); 
  let durfoad = parseInt(txtDURFOAD.value);
  let foreignadults= parseInt(txtFOREIGNADULTS.value);
  let durchil = parseInt(txtDURCHIL.value)
  let agechil= parseInt(txtAGECHIL.value);
  let children= parseInt(txtCHILDREN.value);
 let durload = parseInt(txtDURLOAD.value);
 let num = parseInt(txtNUM.value);
 let extype=parseInt(txtEXTYPE.value);

 let cal1 = (localadults*2500+ durload + children*agechil + durchil );
 let cal2 =(foreignadults*5000+durfoad+children*agechil + durchil);
 let cala=num*extype;
 let calf=num*extype;
let cal=cal1+cal2;
let cal3=cala+calf;
let calx=cal1+cal2+cal;
txtLastOutput1.innerText += `----------------Normal Payments------------
  --- Local Adults   = ${localadults*2500}----
  --- Children       = ${children*agechil}----
  --- SubTotal          = ${cal1.toFixed(2)}-----
  ------------------Extras--------------------
   --- Annual pass          =${cala.toFixed(2)}-----
  --- Food token           =${calf.toFixed(2)}
  --- Sub Total(Extras)     =${cal3.toFixed(2)}
  --------------------------------------------`;

  txtOutput1.innerText = `----------------Normal Payments------------
  --- Local Adults   = 0----
  --- Children       = 0----
  --- SubTotal          = 0-----
  ------------------Extras--------------------
   --- Annual pass          =0-----
  --- Food token           =0
  --- Sub Total(Extras)     =0
  --------------------------------------------`;


}

//*--overall order calculation for foreigners/

function calculateValue4(event){


  let localadults = parseInt(txtLOCALADULTS.value); 
  let durfoad = parseInt(txtDURFOAD.value);
  let foreignadults= parseInt(txtFOREIGNADULTS.value);
  let durchil = parseInt(txtDURCHIL.value)
  let durchil1 = parseInt(txtDURCHIL1.value)
  let agechil= parseInt(txtAGECHIL.value);
  let agechil1= parseInt(txtAGECHIL1.value);
  let children1= parseInt(txtCHILDREN1.value);
 let durload = parseInt(txtDURLOAD.value);
 let num = parseInt(txtNUM.value);
 let extype=parseInt(txtEXTYPE.value);

  
 let cal2 =(foreignadults*5000+durfoad+children1*agechil1 + durchil1);
 let cala=num*extype;
 let calf=num*extype;
 
let cal3=cala+calf;
let calx=cal1+cal2+cal;
txtLastOutput2.innerText += `----------------Normal Payments------------
  --- Foreign Adults = ${foreignadults*5000}--
  --- Children       = ${children1*agechil1}----
  --- SubTotal        =${cal2.toFixed(2)}
  ------------------Extras--------------------
  --- Annual pass          =${cala.toFixed(2)}-----
  --- Food token           =${calf.toFixed(2)}
  --- Sub Total(Extras)     =${cal3.toFixed(2)}
  --------------------------------------------`;

  txtOutput2.innerText = `----------------Normal Payments------------
  --- Local Adults   = 0----
  --- Children       = 0----
  --- SubTotal          = 0-----
  ------------------Extras--------------------
   --- Annual pass          =0-----
  --- Food token           =0
  --- Sub Total(Extras)     =0
  --------------------------------------------`;


}
//*---Pdf generation/
function generatePDF() {
  var pdf = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a5',
      putOnlyUsedFonts:true
      });
  pdf.text("Welcome to Mr.tea museum train journey", 20, 20);
  pdf.text("your train number 145", 20, 30);
  pdf.text("|||||||||| |||||| ||| ||", 60, 60);
  pdf.addPage();
  pdf.text(20, 20, 'The train route');
  pdf.save('Ticket.pdf');

 alert(" We appreciate your booking and hope you have a pleasant journey.your ticket got downloaded as a pdf(Train number 145)");
}




let baseIDRate, baseETRate, baseCSCRate, baseVATRate, baseSurcharge, baseVATBase = 0;
let age_factor, engineSizeFactor, cifFactor, seating_capacity_factor, classification_factor, specialPurposeFactor = 0;
let idAmount, etAmount, cscAmount, vatAmount, surchargeAmount, cifec, totalDuties, totalCost= 0;
let id_w, et_w, csc_w, vs_w, vat_w, ins_val=0 ;
let fob =document.getElementById('fob');
let frt = document.getElementById('frt');
let ins = document.getElementById('ins') ;
let cif = document.getElementById("cif");
let hd = document.getElementById("hs");
let seating = document.getElementById("seats");
let v_age = document.getElementById("age");
let cc = document.getElementById("cc_s");
let tonnage = document.getElementById("weight");
let option = document.getElementById("options");
let source =document.getElementById("source");



let _date = new Date();
let stringDate = _date.toString();
let theDate = stringDate.slice(0,15);
  
   document.getElementById("datelabel").innerHTML = theDate;

   let title = document.getElementById("titlelabel");
   title.style.textAlign="center";

let moneyfm = new Intl.NumberFormat("en-VC", {style:"currency", currency: "XCD"});

document.getElementById("importer").focus();

document.getElementById("importer").addEventListener("keyup",e=>{
      
     document.getElementById("importer").value = 
     document.getElementById("importer").value.toUpperCase();
      
})

document.getElementById("importer").addEventListener("keydown",(e)=>{
     if(e.key === 'Enter') {
      document.getElementById("fob").focus();
     }       
 })

function getTotal() { 
  cif = document.getElementById("cif"); 
            if(Number(fob.value) < 0){
                  fob.value = "";
                  document.getElementById("fob").focus();
                  return;
            } else if(document.getElementById("currency").value === ""){
                  document.getElementById("currency").focus();
                  return;
            } else if(terms.value === ""){
                  document.getElementById("terms").focus();
                  return;
            }else{
                  if(currency.value === "xcd"){
                        if(terms.value === "cif"){
                              cifec =Number(fob.value) * 1.00;
                    
                        }else if(terms.value ==="cfr"){
                              cifec = (Number(fob.value) + Number(ins.value))*1.00;

                        }else{
                              cifec = (Number(fob.value)  + Number(frt.value) + Number(ins.value)) * 1.00;

                        }
                  }else{
                        if(terms.value === "cif"){
                              cifec = Number(fob.value) * 2.717 ;

                        }else if(terms.value ==="cfr"){
                              cifec =(Number(fob.value) + Number(ins.value)) * 2.717;
                        } else{
                              cifec = (Number(fob.value)  + Number(frt.value) + Number(ins.value)) * 2.717;
                        }
                  }
            }
                  cif.value = moneyfm.format(cifec);

      }
 
      




document.getElementById("fob").addEventListener("keyup",e=>{
      getTotal();
      resetAllDuties();
      
 }) 

document.getElementById("fob").addEventListener("keydown",e=>{
    if(e.key === 'Enter'){
         document.getElementById("fob").value = Number(fob.value).toFixed(2) ;
         if(terms.value === "cif"){
                document.getElementById("total_button").focus();
          } else if (terms.value ==="cfr"){
                document.getElementById("ins").focus();
          }else {
                document.getElementById("frt").focus();
          }
    }
})

 document.getElementById("frt").addEventListener("keyup", e =>{
getTotal();
resetAllDuties();
})
 
document.getElementById("ins").addEventListener("keyup", e =>{
      getTotal();
      resetAllDuties();
      })

 document.getElementById("frt").addEventListener("keydown", e =>{
 if(e.key === 'Enter'){
   document.getElementById("frt").value = Number(frt.value).toFixed(2)
   getTotal();
   document.getElementById("ins").focus();
 }
 })

function autoInsurance(){
      if(document.getElementById("autoIns").checked == false) {
            ins.value = "";
            document.getElementById('cif').value = "";
            resetAllDuties();
            return;
      } else{
	      if(terms.value === "cif" || ins.value != ""){
		      return;
	      }else if(terms.value === "cfr" ){
		      ins_val = Number(fob.value) * 0.01;
	      }else if(terms.value === "fob" && fob.value != ""){
		      ins_val = (Number(fob.value) + Number(frt.value)) * 0.01;
	      }
                  document.getElementById('ins').value = ins_val.toFixed(2); 

      }
      getTotal();
 }
	

document.getElementById("ins").addEventListener("keydown", e =>{
      if(e.key === 'Enter'){
        let insv = Number(document.getElementById("ins").value);
      ins.value = insv.toFixed(2);
        document.getElementById("total_button").focus();
      }
      })
      

document.getElementById("terms").addEventListener("change",e =>{
  getTotal();
  resetAllDuties();
 })

document.getElementById("currency").addEventListener("change",e=>{
  getTotal();
  resetAllDuties()
})

function termsFN(){
if(terms.value === "cif"){
    document.getElementById("frt").disabled = true;
    document.getElementById("ins").disabled = true;
    document.getElementById("frt").value = "";
    document.getElementById("ins").value = "";
    document.getElementById("cif").value = "";
    document.getElementById("autoIns").disabled = true;
}
else if(terms.value === "cfr"){
  document.getElementById("frt").disabled = true;
  document.getElementById("ins").disabled = false;
  document.getElementById("frt").value = "";
  document.getElementById("autoIns").disabled = false;

}
else{
  document.getElementById("fob").disabled = false;
  document.getElementById("frt").disabled = false;
  document.getElementById("ins").disabled = false;
  document.getElementById("autoIns").disabled = false;
}
}

 function resetValues(){
  let valueInput= document.querySelectorAll(".value_Input");
  valueInput.forEach((e)=>{
    e.value = "";
  })
  terms.value ="fob";
  currency.value = "xcd";
  document.getElementById("importer").value = "";
  document.getElementById("fob").disabled = false;
  document.getElementById("frt").disabled = false;
  document.getElementById("ins").disabled = false;
  document.getElementById("autoIns").disabled = true;
  document.getElementById("autoIns").checked = false;
  
  resetAllDuties();
  resetSpecs();
  check_waiver();

 }  

 function resetSpecs() {
 let specsInput = document.querySelectorAll(".specs_Inp");
  specsInput.forEach((b)=>{
    b.value = "";
  })
  resetAllDuties();
  }

  document.getElementById("make").addEventListener("keyup",e =>{
      document.getElementById("make").value = 
      document.getElementById("make").value.toUpperCase();
      
     })

 document.getElementById("make").addEventListener("keydown",e =>{
  if(e.key === 'Enter'){
    document.getElementById("model").focus();
  }
 })

 document.getElementById("model").addEventListener("keyup",(e) =>{
      document.getElementById("model").value = 
      document.getElementById("model").value.toUpperCase();
      
     })

  document.getElementById("model").addEventListener("keydown",e =>{
  if(e.key === "Enter"){
    document.getElementById("chassis").focus();

  }
 })

 document.getElementById("chassis").addEventListener("keyup",(e)=>{ 
      document.getElementById("chassis").value = 
      document.getElementById("chassis").value.toUpperCase();

     })

 document.getElementById("chassis").addEventListener("keydown",e =>{
  if(e.key === "Enter"){
    document.getElementById("year").focus();
  }
 })

 
 document.getElementById("year").addEventListener("keyup",(e) =>{
  if(document.getElementById("year").value.length === 4){
      
    let thisYear = Number(_date.getFullYear());    
    let vehicleYear = Number(document.getElementById("year").value);

    if(vehicleYear > thisYear) {
      alert("Invalid Data!");
      year.value = "";
      document.getElementById("year").focus();
    } else{
          let vehicleAge = thisYear-vehicleYear;
          if(vehicleAge > 12) {
             alert("Invalid data!");
             alert("Vehicle cannot be over 12 years.");
             year.value = "";
             document.getElementById("year").focus();
          } else {
                 age.value = vehicleAge;

                 document.getElementById("hs").value = "select";
                 resetAllDuties();
                 document.getElementById("source").focus();
                  }
          }

 } 

})


 document.getElementById("source").addEventListener("change",e =>{
     document.getElementById("hs").value = "select";
     resetAllDuties();
     document.getElementById("cc_s").focus();
  
 })

 document.getElementById("cc_s").addEventListener("keyup",e =>{
         resetAllDuties();
      
     })

 document.getElementById("cc_s").addEventListener("keydown",e =>{
  if(e.key === "Enter"){
     document.getElementById("hs").focus();
     resetAllDuties();
  }
 })


 document.getElementById("seats").addEventListener("keydown", e =>{
  if(e.key === "Enter"){
    document.getElementById("hs").focus();
    resetAllDuties();
  }
 })

 document.getElementById("seats").addEventListener("keyup", e =>{
      resetAllDuties();
 });

 document.getElementById("weight").addEventListener("keyup", e =>{
      resetAllDuties();
      
     })

 document.getElementById("weight").addEventListener("keydown", e =>{
  if(e.key === "Enter"){
    resetAllDuties();
    document.getElementById("hs").focus();
  }
 })

 document.getElementById("options").addEventListener("change", e =>{
    resetAllDuties();
    document.getElementById("hs").focus();
  
 });
/*
document.getElementById("reset_Duties").addEventListener("onclick",e =>{
      resetAllDuties();
     document.getElementById("hs").focus();
  
 });
 */
 function resetAllDuties(){
  let w_duty = document.querySelector(".waiver");
  w_duty.checked =false;
  document.getElementById("hs").value = "";
  let duties =document.querySelector(".duty-div");
  let allInput = duties.querySelectorAll("input");
  allInput.forEach((e)=>{
    e.value="";
  });
  document.getElementById("waiver").disabled = true;
  }

function resetAmounts(){
      document.getElementById("iduty_Amount").value = "" ;
      document.getElementById("etax_Amount").value = "";
      document.getElementById("csc_Amount").value = "";
      document.getElementById("vs_Amount").value = "";
      document.getElementById("vat_Amount").value = "" ;
  
      document.getElementById("total_DutiesInp").value = "" ;
}

function calculateAll(){
      if(hd.value === ""){
            document.getElementById("waiver").disabled = true;
      } else{
            if(hd.value ==="8701"){
                  if(v_age.value === "" || cif.value === ""){
                        alert("Customs value and Vehicle age are required for heading 8701.");
                        hs.value = "";
                        document.getElementById("waiver").disabled = true;
                        resetAllDuties();
                        document.getElementById("year").focus();
                        return;
                  }
            }else if(hd.value ==="8702"){
                  if(Number(seating.value) < 1 || v_age.value === "" || cif.value === ""){
                        alert("Customs value ,Vehicle age and seating capacity are required for heading 8702.");
                        resetAllDuties();
                        document.getElementById("seats").focus();
                        return;
            
                  }else if(Number(seating.value) < 10){
                        alert("\"8702\" carries a seating capacity of 10 or more.");
                        resetAllDuties();
                        document.getElementById("seats").focus();
                        return;
                  }
            }else if (hd.value === "8703"){
                  if(v_age.value === "" || cif.value === "" || source.value === "" || cc.value === ""){
                        alert("Customs value, vehicle age, source and cc's are required for heading 8703.");
                        hs.value = "";
                        resetAllDuties();
                        document.getElementById("cc_s").focus();
                        return;
                  }
            }else if (hd.value === "8704"){
                  if(v_age.value === "" || cifec < 1 || Number(tonnage.value) <= 0 || source.value === ""){
                        alert("Customs value, vehicle age, source and tonnage are required for heading 8704.");
                        hs.value = "";
                        resetAllDuties();
                        document.getElementById("weight").focus();
                        return;
                  }
            }else if (hd.value === "8705"){
                  if(Number(v_age.value) < 0 || cif.value === "" || option.value === ""){
                        alert("Customs value, vehicle age and an option are required for heading 8705.");
                        hs.value = "";
                        resetAllDuties();
                        document.getElementById("options").focus();
                        return;
                  }
            }


            }
            heading_Duty();
            calculateDuties();
      }





function heading_Duty(){
     
	document.getElementById("vs_Amount").value = calculateSurcharge();
    
      if(hd.value ==="8701"){
            if(source.value === "electric" || source.value === "hybrid"){
                  baseIDRate = 5.00;
                  baseETRate = 35.00;
                  baseCSCRate = 6.00;
                  baseVATBase = (cifec *baseIDRate/100) + (cifec *baseETRate/100) + (cifec * baseCSCRate/100) +
                                     baseSurcharge + cifec;
                  baseVATRate = 16.00;

            }else{
                  baseIDRate = 5.00;
                  baseETRate = 55.00;
                  baseCSCRate = 6.00;
                  baseVATBase = (cifec *baseIDRate/100) + (cifec *baseETRate/100) + (cifec * baseCSCRate/100) +
                                     baseSurcharge + cifec;
                  baseVATRate = 16.00;

            } 
      }else if(hd.value ==="8702"){
                  if(source.value === "electric" || source.value === "hybrid"){
                        baseIDRate = 10.00;
                        baseETRate = 35.00;
                        baseCSCRate = 6.00;
                        baseVATBase = (baseIDRate * cifec/100) + (baseETRate*cifec/100) + (baseCSCRate*cifec/100) +  
                                baseSurcharge + cifec;
                        baseVATRate = 16.00;

                  } else{
                        baseIDRate = 10.00;
                        baseETRate = 45.00;
                        baseCSCRate = 6.00;
                        baseVATBase = (baseIDRate * cifec/100) + (baseETRate*cifec/100) + (baseCSCRate*cifec/100) +  
                                      baseSurcharge + cifec;
                        baseVATRate = 16.00;
      
                  }
      }else if (hd.value === "8703"){
                  if(source.value === "electric" || source.value === "hybrid"){
                        baseIDRate = 20.00;
                        baseETRate = 20.00;
                        baseCSCRate = 6.00;
                        baseVATBase = (baseIDRate * cifec/100) + (baseETRate*cifec/100) + (baseCSCRate*cifec/100) + baseSurcharge +
                        cifec;
                        baseVATRate = 16.00;

                  }else if(source.value === "other"){
                        baseIDRate = 30.00;
                        baseETRate = 30.00;
                        baseCSCRate = 6.00;
                        baseVATBase = (baseIDRate * cifec/100) + (baseETRate*cifec/100) + (baseCSCRate*cifec/100) + baseSurcharge +
                         cifec;
                        baseVATRate = 16.00;

                  }else {
                              let x = gas_diesel8703.findLastIndex((vehicle) => vehicle.ccs <= Number(cc.value)); 
    
                              baseIDRate = gas_diesel8703[x].rates[0];
                              baseETRate = gas_diesel8703[x].rates[1];
                              baseCSCRate = 6.00;
                              baseVATBase = (baseIDRate * cifec/100) + (baseETRate*cifec/100) +
                                             (baseCSCRate*cifec/100) + baseSurcharge + cifec;
                              baseVATRate = 16.00;
                              
                  }                                          
      }else if (hd.value === "8704"){
                  if(source.value ==="electric" || source.value === "hybrid"){
                        baseIDRate = 10.00;
                        baseETRate = 30.00;
                        baseCSCRate = 6.00;
                        baseVATBase = (baseIDRate * cifec/100) + (baseETRate*cifec/100) + baseSurcharge +
                              (baseCSCRate * cifec/100) + cifec;
                        baseVATRate = 16.00;
    
                  } else if (source.value === "other") {
                        baseIDRate = 10.00;
                        baseETRate = 60.00;
                        baseCSCRate = 6.00;
                        baseVATBase = (baseIDRate * cifec/100) + (baseETRate*cifec/100) + (baseCSCRate*cifec/100) +
                                       baseSurcharge + cifec;
                        baseVATRate = 16.00;

                  }else{
                              let t = cargo_8704.findLastIndex((vehicle) => vehicle.ton <= Number(tonnage.value));
         
                              baseIDRate = cargo_8704[t].rates[0];
                              baseETRate = cargo_8704[t].rates[1];
                              baseCSCRate = 6.00
                              baseVATBase = (baseIDRate * cifec/100) + (baseETRate  * cifec/100) + 
                                          (baseCSCRate * cifec/100) + baseSurcharge + cifec;
                              baseVATRate = 16.00
                        
                  }               
      }else if (hd.value === "8705"){
                  if (option.value === "fire_fighting") {
                        baseIDRate = 0
                        baseETRate = 0
                        baseCSCRate = 6.00
                        baseVATBase = (baseIDRate * cifec/100) + (baseETRate  * cifec/100) +
                                      (baseCSCRate  * cifec/100) + baseSurcharge + cifec;
                        baseVATRate = 16.00
    
                  } else {
                        baseIDRate = 5.00
                        baseETRate = 0
                        baseCSCRate = 6.00
                        baseVATBase = (baseIDRate * cifec/100) + (baseETRate  * cifec/100) +
                                      (baseCSCRate  * cifec/100) + baseSurcharge + cifec;
                        baseVATRate = 16.00

                  }           
      }
            document.getElementById("iduty_Rate").value = baseIDRate +"%";
            document.getElementById("etax_Rate").value = baseETRate +"%";
            document.getElementById("csc_Rate").value = baseCSCRate + "%";
            document.getElementById("vat_Rate").value = baseVATRate +"%";
            document.getElementById("vb_Amount").value = moneyfm.format(baseVATBase); //baseVATBase.toFixed(2);
    
            document.getElementById("waiver").disabled = false;
    
}
  


  function calculateSurcharge(){
      if(hd.value === "8701"){
            baseSurcharge = 0;

      }else if(hd.value === "8702") {
            let a = ageFactors8702_8704.findLastIndex((vehicle) => vehicle.age <=Number(v_age.value));
            let s = seatingFactors8702.findLastIndex((vehicle) => vehicle.seats <= Number(seating.value));
            let c = cifMatrix8702.findIndex((vehicle) => vehicle.cif <= cifec);

            age_factor = ageFactors8702_8704[a].factor;
            seating_capacity_factor = seatingFactors8702[s].factor;
            cifFactor = cifMatrix8702[c].factors[a];
     
            baseSurcharge = surcharge_base * age_factor * seating_capacity_factor * cifFactor;
     

      } else if(hd.value=== "8703"){     
            let a = ageFactors8703.findLastIndex((vehicle) => vehicle.age <= Number(v_age.value));
            let c = cifMatrix8703.findIndex((vehicle) => vehicle.cif <= cifec); 
      
            cifFactor = cifMatrix8703[c].factors[a]; 
       
            if(source.value === "gas" || source.value === "diesel") {
                  let c = engineSizeFactors8703.findLastIndex((vehicle) => vehicle.ccs <= Number(cc.value));

                  engineSizeFactor = engineSizeFactors8703[c].factor;
                  age_factor = ageFactors8703[a].factor; 

                  baseSurcharge = surcharge_base * age_factor * engineSizeFactor * cifFactor;

            } else if (source.value === "electric" || source.value === "hybrid") {
                  let r = rangeFactors8703.findIndex((vehicle) => vehicle.range <= Number(cc.value)); 

                  range_factor = rangeFactors8703[r].factor; 
                  age_factor = ageFactors8703Electric[a].factor;

                  baseSurcharge = surcharge_base * age_factor * range_factor * cifFactor;
           
            } else if (source.value === "other") {
                  classification_factor = 0.75;
                  age_factor = ageFactors8703Electric[a].factor;

                  baseSurcharge = surcharge_base * age_factor * classification_factor * cifFactor;    

            }
      } else if (hd.value === "8704") {
            let a = ageFactors8702_8704.findLastIndex((vehicle) => vehicle.age <= Number(v_age.value));
            let t = tonnageFactors8704.findLastIndex((vehicle) => vehicle.tons <= Number(tonnage.value));
            let c = cifMatrix8704.findIndex((vehicle) => vehicle.cif <= cifec);

            age_factor = ageFactors8702_8704[a].factor;
            tonnage_factor = tonnageFactors8704[t].factor;
            cifFactor = cifMatrix8704[c].factors[a];

            baseSurcharge = surcharge_base * age_factor * tonnage_factor * cifFactor;

      } else if (hd.value === "8705") {
            if (option.value === "fire_fighting"){
                  let a = ageFactors8705.findLastIndex((vehicle) => vehicle.age <= Number(v_age.vage));
                  let c = cifMatrix8705.findIndex((vehicle) => vehicle.cif <= cifec);
    
                  age_factor = ageFactors8705[a].factor;
                  specialPurposeFactor = " None" //there is no special purpose factor
                  cifFactor = cifMatrix8705[c].factors[a];

                  baseSurcharge = surcharge_base * age_factor * cifFactor;
    
            } else {
                  let a = ageFactors8705.findLastIndex((vehicle) => vehicle.age <=Number(v_age.value));
                  let c = cifMatrix8705.findIndex((cif) => cif <= cifec);

                  age_factor = ageFactors8705[a].factor;
                  specialPurposeFactor = 1.00
                  cifFactor = cifMatrix8705[c].factors[a];

                  baseSurcharge = surcharge_base * age_factor * specialPurposeFactor * cifFactor;
   
            }
      }    
            return baseSurcharge.toFixed(2);
  
  }


  function calculateDuties(){
      if(document.getElementById("hs").value === ""){
            return;
      } else{
            apply_Waiver();

            let idRate = document.getElementById("iduty_Rate").value;
            let IDRATE = Number(idRate.substr(0,idRate.length-1))/100;
    
            let etRate = document.getElementById("etax_Rate").value;
            let ETRATE = Number(etRate.substr(0,etRate.length-1))/100;
  
            let cscRate = document.getElementById("csc_Rate").value;
            let CSCRATE =Number(cscRate.substr(0,cscRate.length-1))/100;
    
            let vatRate = document.getElementById("vat_Rate").value;
            let VATRATE = Number(vatRate.substr(0,vatRate.length-1))/100;

            idAmount = cifec * IDRATE;
            etAmount = cifec *ETRATE ;
            cscAmount = cifec * CSCRATE;
            vatAmount = baseVATBase * VATRATE;

            document.getElementById("iduty_Amount").value = idAmount.toFixed(2);
            document.getElementById("etax_Amount").value = etAmount.toFixed(2);
            document.getElementById("csc_Amount").value = cscAmount.toFixed(2);
            document.getElementById("vat_Amount").value = vatAmount.toFixed(2); 
       
            let  ID = Number( document.getElementById("iduty_Amount").value) ;
            let ET = Number(document.getElementById("etax_Amount").value) ;
            let CSC = Number(document.getElementById("csc_Amount").value) ;
            let VS = Number(document.getElementById("vs_Amount").value);
            let VAT = Number(document.getElementById("vat_Amount").value) ; 

            totalDuties = ID + ET + CSC + VS + VAT;
            totalCost = totalDuties + cifec;

    document.getElementById("total_DutiesInp").value = moneyfm.format(totalDuties); //totalDuties.toFixed(2);
    document.getElementById("overAllCost").value = moneyfm.format(totalCost);
      
  }
}

 document.getElementById("iduty_Waiver").addEventListener("keyup", e =>{apply_Waiver(); calculateDuties();})
 document.getElementById("etax_Waiver").addEventListener("keyup", e =>{apply_Waiver();calculateDuties();})
 document.getElementById("csc_Waiver").addEventListener("keyup", e =>{apply_Waiver();calculateDuties();})
 document.getElementById("vs_Waiver").addEventListener("keyup", e =>{apply_Waiver();calculateDuties();})
 document.getElementById("vat_Waiver").addEventListener("keyup", e =>{apply_Waiver();calculateDuties();})
			   
	 
  
  document.getElementById("iduty_Waiver").addEventListener("keydown", e =>{
      if(e.key === "Enter"){
            let idw =Number(document.getElementById("iduty_Waiver").value) 
            if(idw < 0 || idw > 100){
                  alert("Invalid Data!");
                  document.getElementById("iduty_Waiver").focus();
                  document.getElementById("iduty_Waiver").value = "";
                  return;
            } else {
       document.getElementById("etax_Waiver").focus();

      }}})

     document.getElementById("etax_Waiver").addEventListener("keydown", e =>{
      if(e.key === "Enter"){
            let etw =Number(document.getElementById("etax_Waiver").value) 
            if(etw < 1 || etw > 100){
                  alert("Invalid Data!");
                  document.getElementById("etax_Waiver").focus();
                  document.getElementById("etax_Waiver").value = "";
                  return;
            } else {
        document.getElementById("csc_Waiver").focus();

            }}})

     document.getElementById("csc_Waiver").addEventListener("keydown", e =>{
            if(e.key === "Enter"){
                  let csw =Number(document.getElementById("csc_Waiver").value) 
            if(csw < 1 || csw > 100){
                  alert("Invalid Data!");
                  document.getElementById("csc_Waiver").focus();
                  document.getElementById("csc_Waiver").value = "";
                  return;
            } else {
                  document.getElementById("vs_Waiver").focus();

            }}})


     document.getElementById("vs_Waiver").addEventListener("keydown", e =>{
      if(e.key === "Enter"){
            let vsw =Number(document.getElementById("vs_Waiver").value) 
            if(vsw < 1 || vsw > 100){
                  alert("Invalid Data!");
                  document.getElementById("vs_Waiver").focus();
                  document.getElementById("vs_Waiver").value = "";
                  return;

            } else {   
                  document.getElementById("vat_Waiver").focus();

            }}})

            document.getElementById("vat_Waiver").addEventListener("keydown", e =>{
                  if(e.key === "Enter"){
                        let vtw =Number(document.getElementById("vat_Waiver").value) 
                        if(vtw < 1 || vtw > 100){
                              alert("Invalid Data!");
                              document.getElementById("vat_Waiver").focus();
                              document.getElementById("vat_Waiver").value = "";
                              return;
            
                        }}})
            


    

     function apply_Waiver(){
      id_w = document.getElementById("iduty_Waiver").value;
      et_w = document.getElementById("etax_Waiver").value;
      csc_w = document.getElementById("csc_Waiver").value;
      vs_w = document.getElementById("vs_Waiver").value;
      vat_w = document.getElementById("vat_Waiver").value;
      if(id_w != ""){
            let IDWRate = baseIDRate * (100-id_w)/100 //console.log("id waiver is : " + id_w);
            document.getElementById("iduty_Rate").value = IDWRate.toFixed(2) +"%";

            }else {
            document.getElementById("iduty_Rate").value = baseIDRate +"%";

            } 

            if(et_w != ""){
            let ETWRate = baseETRate * (100-et_w)/100 //console.log("id waiver is : " + id_w);
            document.getElementById("etax_Rate").value = ETWRate.toFixed(2) +"%";
            }else{
            document.getElementById("etax_Rate").value = baseETRate +"%";

            }

            if(csc_w != ""){
            let CSCWRate = baseCSCRate * (100-csc_w)/100 //console.log("id waiver is : " + id_w);
            document.getElementById("csc_Rate").value = CSCWRate.toFixed(2) +"%";
            }else {
            document.getElementById("csc_Rate").value = baseCSCRate + "%";

            }

      if(hs.value === "8701"){
            document.getElementById("vs_Amount").value = 0;
      }else{
            if(vs_w != ""){
                  let VSWAmount = baseSurcharge * (100-vs_w)/100 //console.log("id waiver is : " + id_w);
                  document.getElementById("vs_Amount").value = VSWAmount.toFixed(2);

            }else {
                  document.getElementById("vs_Amount").value = baseSurcharge.toFixed(2); 

            }
      }

            if(vat_w != ""){
            let VATWRate = baseVATRate * (100-vat_w)/100 //console.log("id waiver is : " + id_w);
            document.getElementById("vat_Rate").value = VATWRate.toFixed(2) +"%";
            }else {
            document.getElementById("vat_Rate").value = baseVATRate + "%";

            }
      }

     

     function check_waiver(){
            let checkWaiver =  document.getElementById("waiver");
            let inputs =  document.getElementsByClassName("tax_Waiver");
            if(checkWaiver.checked == true){
                  for(let i = 0; i <inputs.length; i++){
                        inputs[i].disabled = false;
                  }
            }else{
                  if(checkWaiver.checked == false){
                  for(let i = 0; i <inputs.length; i++){
                        inputs[i].disabled = true;
                        inputs[i].value = "";

                  }}
                  resetAllDuties();
            }     
      }

  document.getElementById("printButton").addEventListener("click",(e) =>{
      if(document.getElementById("overAllCost").value === ""){
            alert("You may not print at this time. Please complete calculation.")
      } else{
      pleasePrint();
      }
  });

 function pleasePrint(){
      window.print();
  }  

document.onkeydown = function (e) {
      if(e.key == "F12"){
         return false;
     }
};

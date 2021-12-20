import { logDOM } from "@testing-library/react";
import React, { useState, useEffect } from "react"

function Converter(){

    const [amount, setAmount] = useState("")
    const [convert, setConvertRate] = useState("Naira Equivalent")
    const [eventValue, setEventValue] = useState("CURRENCY");
    const values = ["USD", "AED", "GHS", "RWF"]
    


    function handleChange(event) {
        let amt = event.target.value
        setAmount(amt);
        
       
    }

    // Conversion function for dropdown
    function handleConverter(event){
        let selectedValue = event.target.value
            if(selectedValue === "USD"){
                let usdd = amount * 500;
                setConvertRate(usdd.toLocaleString());
            }else if(selectedValue === "AED"){
                let aedd = amount * 111.67;
                setConvertRate(aedd.toLocaleString());
            }else if(selectedValue === "GHS"){
                let aedd = amount * 66.32;
                setConvertRate(aedd.toLocaleString());
            }else if(selectedValue === "RWF"){
                let aedd = amount * 0.41;
                setConvertRate(aedd.toLocaleString());
            }else{
                setConvertRate("Amount")
            }
     }
    //  conversion function ends here

    //Monitors value change based on array and dropdown selection
    function handleEventValue(event){
       setEventValue(event.target.value)
       console.log(eventValue)
    }


    //This function makes 'Enter' button function as a trigger for calculator
     function handleKey(event) {
         if (event.keyCode == 13){
        if (eventValue === "USD"){
                let usddd = amount * 500;
                setConvertRate(usddd.toLocaleString());
            
        
                console.log("US Dollars")
            }else if (eventValue === "AED"){
                let aedd = amount * 111.67;
                setConvertRate(aedd.toLocaleString());
            
        
                console.log("UAE currency")
        }else if (eventValue === "GHS"){
            let ghss = amount * 66.32;
            setConvertRate(ghss.toLocaleString());
        
    
            console.log("Ghanian Currency")
        }else if (eventValue === "RWF"){
            let rwff = amount * 0.41;
            setConvertRate(rwff.toLocaleString());
        
    
            console.log("Rwandan Currency")
        }
    }
        }

        //functions end here          
            

    return(
        
        <div className = "container">


            {/* Currency */}
            <div className="currency">
                <select
                onChange={handleConverter, handleEventValue} 
                name="currency">
                <option value="currency">Currency</option>
                    <option 
                    value={values[0]}>USD 🇺🇸</option>
                    <option
                    value={values[1]}>AED 🇦🇪</option>
                    <option value={values[2]}>GHS 🇬🇭</option>
                    <option value={values[3]}>RWF 🇷🇼</option>
                </select>
            </div>
            {/* Currency */}



{/* This field handles conversions */}
            <div className="child">
            <p className="ngn">{eventValue}</p>
            
            
                <input 
                onKeyDown ={handleKey}
                onChange = {handleChange}
                className="input-form"
                type="text" name="NairaAmount"
                placeholder="Enter Amount" 
                value = {amount}
                />
                <p className="instruction">Please avoid using commas, it won't work😉</p>
                

                <div className="result">
                    <p className="ngn">NGN</p>
                    <h1 className="usd">{convert}</h1>
                </div>
            </div>

{/* Conversion field ends here */}
            
        </div>
    )
}

export default Converter;
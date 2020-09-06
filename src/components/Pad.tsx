import * as React from 'react';
import logo from '../images/R Logo.svg';

interface PadProps {
    // define Prop interface here

}

interface PadState {
    // define State interface here
    
}

export default class Pad extends React.Component<PadProps, PadState> {
    validateForm = (event: any) => {
        // validate your form here
        


        return true
    }
    submitForm = (event: any) => {
        if(this.validateForm(event)){
            alert("Mistakes were made!")
        }
        else{
            let URL:string = (process.env.NODE_ENV !== 'production')? "  " : "https://script.google.com/macros/s/AKfycbxZpsmMPTPgZb5oR_AQ423crtShqgVZ10QInsqwoM4D95BTq_8/exec"
            let requestParameters = { "Content-Type" : "application/x-www-form-urlencoded", }
            
            //handle form , POST content type as URLencoded form data




            alert( "form submitted!")
        }
    }
    constructor(props: PadProps){
        super(props);
        this.submitForm = this.submitForm.bind(this);
    }
  public render() {
    return (
      <div className="PatientApplicationForm">
          <img className="logoHospital" src={logo} alt="R logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <br />

        {/* Insert your method here */}
        <form onSubmit={this.submitForm}>
            <fieldset className="inputFieds">
                <legend>Patient Name:</legend>
                <input type="text" id="fname" name="fname" value="Full name" /><br />
            </fieldset>
            <fieldset className="inputFieds" >
                <legend>Problem Description:</legend>
                <textarea id="pname" name="pname" value="Description of your Problem" /><br />
            </fieldset>
            <input type="submit" className="submitButton" value="Submit" />
        </form>
      </div>
    );
  }
}

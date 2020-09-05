# Prescribe Interview Assignment

This assignment is meant to assess the basic concepts of React like development of reusable components components and implementing them following well-known React.js workflows (such as Flux or Redux) and optimizing components for maximum performance across a vast array of web-capable devices and browsers.

You'll be given an existing react application. 
This Assignment reqires you to understand the `starter code` and build on it.
Have a look at `/components/Pad.tsx: 15L`. This will be, most of what you'll be doing.

    submitForm = (event: any) => {
        if(this.validateForm(event)){
            alert("Mistakes were made!")
        }
        else{
            let URL:string = (process.env.NODE_ENV == 'production')? " URL given in starter code " : ""

            //handle form
            // Extend with your solution


            alert( "form submitted!")
        }
    }


## Problem Statement

The created React application collects data for patient registration. The `starter code` contains the implementation of a similar functionality but a basic version.
The problem statement of this assignment is to build on this `starter code`, into a **multistep form submit**. This involves submitting data to an external API, wait for a callback,and save data from response into the browser.

`From` The currently existing UI ( `starter code` ) looks like below.

![current Homepage](https://github.com/adhi729/test-app/blob/master/src/images/Current%20Homepage.png)

`To` This needs to be upgraded to collect data across different consultancy categories available.

![New Homepage](https://github.com/adhi729/test-app/blob/master/src/images/New%20Homepage.png)

The following Assignment judges the submission based on their ability to
+ [ ] Attain high fidelity of the developed application to design.
+ [ ] Handle form data.
+ [ ] Implement re-usable components
+ [ ] Efficiently manage states and props of components
+ [ ] Follow coding conventions

### Task Breakup

**The userflow of the application can be seen [here](https://xd.adobe.com/view/95b0322f-6582-468b-aebe-4522c550fa37-c0e3/).**

The following is a brief task summary.

#### Task 1: Update Patient Registration Form Component `<Pad />`

All the necessary data to get started with this project already exists. Please have a look at current implementation of the  Registration form.

Running `npm start` should fire up `localhost:3000` with the following page.


![current Homepage](https://github.com/adhi729/test-app/blob/master/src/images/Current%20Homepage.png)

Place your code in ` /components/Pad.tsx:48L` 

#### Task 2: Input Component `<InputFieldComponent />`

Construct a Common theme, functional components for all inputs in `/components/`

![new Homepage](https://github.com/adhi729/test-app/blob/master/src/images/New%20Homepage.png)

And Corresponding Responsive layout.

![New Mobile Homepage](https://github.com/adhi729/test-app/blob/master/src/images/New%20Mobile%20Homepage.png)


#### Task 3: Multistep Form Methods

Figure out how you communicate with components.
+ Input fields must be able send data to their parent.
+ Data from the input fields should be shown in the result screen. Plan Accordingly.
+ Follow naming conventions.

![new Homepage Dropdown](https://github.com/adhi729/test-app/blob/master/src/images/New%20Homepage%20Dropdown.png)

Upon clicking `Paediatrician`, the following form fields needs to be rendered.

![new Paediatrician Page](https://github.com/adhi729/test-app/blob/master/src/images/New%20Paediatrician%20Page.png)

And Corresponding Responsive layout.

![New Mobile Paediatrician Page](https://github.com/adhi729/test-app/blob/master/src/images/New%20Mobile%20Paediatrician%20Page.png)

And upon clicking `Physician`, a different set of forms fields needs to be rendered.

![new Physician Page](https://github.com/adhi729/test-app/blob/master/src/images/New%20Physician%20Page.png)

#### Task 4: Form handling

##### Form Validation and submit JSON

Required input fields and input validation.

On `submit` form, form data should be validated and should send JSON stringified data to the URL used in the current application.
This results in a callback with a random `tokenNumber: number` which should be stored in local storage for retrieving session after browser refresh.

    interface PaediatricianRequestJSON 
    {
        consultancy: number,
        childName: string,
        age: number,
        parentName: string,
        role: number
    }

    
![new Paediatrician  Result](https://github.com/adhi729/test-app/blob/master/src/images/New%20Paediatrician%20Result.png)

And Corresponding Responsive layout.

![New Mobile Paediatrician Result](https://github.com/adhi729/test-app/blob/master/src/images/New%20Mobile%20Paediatrician%20Result.png)

Note: submit JSON have different compositions

    interface PhysicianRequestJSON 
        {
            consultancy: number,
            patientName: string,
            age: number,
            parentName: string,
            role: number
        }
        

![new Physician  Result](https://github.com/adhi729/test-app/blob/master/src/images/New%20Physician%20Result.png)





This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## For Further Clarification

Contact : 

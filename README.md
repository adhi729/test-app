## Problem Statement

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
The currently existing UI looks like below.


This react application should be upgraded into a multistep form submit.
The userflow of the application can be seen [here](https://xd.adobe.com/view/95b0322f-6582-468b-aebe-4522c550fa37-c0e3/).

![New Mobile Homepage](https://github.com/adhi729/test-app/blob/master/src/images/New%20Mobile%20Homepage.png)
![New Homepage](https://github.com/adhi729/test-app/blob/master/src/images/New%20Homepage.png)

<br />


### Task 1: Update Patient Registration Form Component `<Pad />`

All the necessary data to get started with this project already exists. Please have a look at current implementation of the  Registration form.

Running `npm start` should start `localhost:3000` with the following page.


![current Homepage](https://github.com/adhi729/test-app/blob/master/src/images/Current%20Homepage.png)

### Task 2: Input Component `<InputFieldComponent />`

Use of common theme functional components for input. 

![new Homepage](https://github.com/adhi729/test-app/blob/master/src/images/New%20Homepage.png)


### Task 3: Multistep Form Methods

Figure out how you communicate with components.
+ Input fields must be able send data to its parent.
+ Data from the input fields should be shown in the result screen. Plan Accordingly.

![new Homepage Dropdown](https://github.com/adhi729/test-app/blob/master/src/images/New%20Homepage%20Dropdown.png)

Upon clicking `Paediatrician`, the following form fields to be rendered.

![new Paediatrician Page](https://github.com/adhi729/test-app/blob/master/src/images/New%20Paediatrician%20Page.png)

And upon clicking `Physician`,

![new Physician Page](https://github.com/adhi729/test-app/blob/master/src/images/New%20Physician%20Page.png)

### Task 4: Form handling

#### Form Validation and submit JSON

Required input fields and input validation.
<br />
On submitting form, form data should be validated and send JSON stringified data to the URL used in the current application.
This results in a callback with a random `tokenNumber: number` which should be stored in local storage for retrieving session.

    interface PaediatricianRequestJSON 
    {
        consultancy: number,
        childName: string,
        age: number,
        parentName: string,
        role: number
    }

    
![new Paediatrician  Result](https://github.com/adhi729/test-app/blob/master/src/images/New%20Paediatrician%20Result.png)

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



<br />

The following text judges the submission based on their ability to
+ adw
+ awdwd
+ adwdwawdd
+ adwdadw
+ awdadw

<br />









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

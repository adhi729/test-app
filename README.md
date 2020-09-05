## Problem Statement

The currently existing UI looks like below.

![current Homepage](https://github.com/adhi729/test-app/blob/master/src/images/Current%20Homepage.png)

This react application should be upgraded into a multistep form submit.

The userflow of the application can be seen [here](https://xd.adobe.com/view/95b0322f-6582-468b-aebe-4522c550fa37-c0e3/).
<br />

Or following images can be used for a quick reference.

![new Homepage](https://github.com/adhi729/test-app/blob/master/src/images/New%20Homepage.png)
![new Homepage Dropdown](https://github.com/adhi729/test-app/blob/master/src/images/New%20Homepage%20Dropdown.png)

Upon clicking Paediatrician, the following form fields to be rendered.

![new Paediatrician Page](https://github.com/adhi729/test-app/blob/master/src/images/New%20Paediatrician%20Page.png)

And upon clicking Physician,

![new Physician Page](https://github.com/adhi729/test-app/blob/master/src/images/New%20Physician%20Page.png)

which results in  the final Result page render as,

![new Paediatrician  Result](https://github.com/adhi729/test-app/blob/master/src/images/New%20Paediatrician%20Result.png)
![new Physician  Result](https://github.com/adhi729/test-app/blob/master/src/images/New%20Physician%20Result.png)

<br />
The following text judges the submission based on their ability to
+ adw
+ awdwd
+ adwdwawdd
+ adwdadw
+ awdadw

<br />

## Task 1: Update Patient Registration Form

All the necessary data to start with this project is already present. Please have a look at current implementation of the form.

## Task 2: Multistep Form Methods

Figure out how you communicate with components.

## Task 3: Input Component

Use of common theme for input components either by common components  

## Task 4: Form handling

### Form Validation and submit JSON

    interface PaediatricianRequestJSON 
    {
        consultancy: number,
        childName: string,
        age: number,
        parentName: string,
        role: number
    }

    interface PhysicianRequestJSON 
    {
        consultancy: number,
        patientName: string,
        age: number,
        parentName: string,
        role: number
    }







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

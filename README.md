# learning-angular
A test project used to learn angular before actually starting the project for Riskchallenger.

#definitions
Workspace: A collection of Angular projects typically in the same git repository.

# install angular cli, so we can create a workspace
```npm install -g @angular/cli```
it will ask if you want to share anonymous data, agree if you want or not if you dont.

### creating the workspace
```ng new riskchallenger-test```
It will ask for some settings you would like to use, for now just accept the defaults. 
This command can take a while.

Now cd into it. 

### starting the server
``ng serve --open``
after that is done you should now see a browser window open with the app running on port 4200. 

On this page you see a lot of next steps, that might be interesting for you, check out for example the components and testing. 

### generate components
``ng generate component COMPONENT_NAME``
When generating components, angular adds the the component to the app.module.ts file.

And its creates the files needed for the component, such as the css file and html file and the js file. 
It also adds a test for the created component.


## using components
We can pass data from the parent component to the child component using this syntax:
``<child-component [text]="'text'"></child-component``

In this example we are passing in a text attribute with the literal value of 'text'. 
The component can then use this by asigning a property to its class object like this: 

```  
@Input()
text = 'default text';
```

Here we are using the input decorator, which you can get using:
```
import { Input } from '@angular/core';
```
At the top of your file where you are also most likely importing Component.

Now we can use this test attribute in the html file using the {{ and }} like this: ```{{text}}```.
Which will output the value of the input variable to the screen.

We can listen for click events like this: ```<div (click)="onCounterMinus()"></div>```.
Here we have a event listener for the click event and its gonna call onCounterMinus on the component when clicked.
Examples of this can be found in the counter component.


# Angular Readme

# RiskchallengerTest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
 

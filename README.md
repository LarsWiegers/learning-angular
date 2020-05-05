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
It also adds a test for the created componet
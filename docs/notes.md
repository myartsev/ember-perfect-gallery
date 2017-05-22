Create the add-on package:  
TODO: https://github.com/ember-cli/ember-cli.github.io/issues/144  
`sudo ember addon perfect-gallery`

Install dependencies:  
`npm install perfect-layout --save`

Create a component:  
`ember g component ember-perfect-gallery`

Add some text to the template and test if we can import the addon to an existing ember app.

`ember new foo && cd foo`  
`ember install https://github.com/myartsev/ember-perfect-gallery.git
`  

TODO: what does this mean?
```
NPM: Installed https://github.com/myartsev/ember-perfect-gallery.git
WARNING: Could not figure out blueprint name from: "https://github.com/myartsev/ember-perfect-gallery.git". Please install the addon blueprint via "ember generate <addon-name>" if necessary.
Installed addon package.
```

Serve the newly generated project:
`ember s`

TODO: what does this mean?
```
Addon templates were detected, but there are no template compilers registered for `ember-perfect-gallery`. Please make sure your template precompiler (commonly `ember-cli-htmlbars`) is listed in `dependencies` (NOT `devDependencies`) in `ember-perfect-gallery`'s `package.json`.

```

Try again:  
`ember install https://github.com/myartsev/ember-perfect-gallery.git
`  
`ember s`

It runs! Let's try to see if we can use the addon to see our placeholder text from earlier.  
*application.hbs*  
```
<div>Hello from Ember!</div>
{{ember-perfect-gallery}}
{{outlet}}
```

It works!  
![](1.png)

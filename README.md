# Base Gulp template for Front-End development

This template contains a minimal set of npm packages that allow you to quickly develop a project, and in the end, optimally build it

List of used npm packages:

#### For ease of development
- SASS (resulting in minified CSS)
- BrowserSync


#### For optimal project build
- imagemin (сompresses images without loss of quality)
- uglify (minifies your JS code) 

## How to use: 

1. Clone this repository into your project folder
2. Run "gulpBasic.command" if you use MacOS. This is a set of commands for the terminal that will receive the necessary npm packages.

	If you see this message:

	![Screenshot](https://user-images.githubusercontent.com/42819751/62331375-6dc92800-b4c4-11e9-9d1d-f175279c3b8a.png)
	
	Make sure that the properties of the file indicate that it should open through terminal
	
	![Screenshot](https://user-images.githubusercontent.com/42819751/62331558-ed56f700-b4c4-11e9-806e-cdd9d2a115ee.png)
	
	Then open the terminal in the folder where the .command file is located, and write down the following command:

	```sudo chmod -R 775 gulpBasic.command```
		
	This will change the file permissions and it will be able to execute
		
	If you use Windows, rename file extension to ".bat" and delete the first line of code in it ( ```cd "$(dirname "$0")"``` )
		
	I recommend to run with administrator rights

3. When all packages have been received, add the project folder to your code editor
4. Then open the terminal again in the project folder and write the command "```gulp```"
5. When the project is ready, it remains only to assemble it. There is a task "```gulp build```" for this.
6. Then it remains only to change the way to styles; scripts; pictures and other in the "```index.html```" file in the production folder

If you want to rename some folders in the project, do not forget to rename the variables in "```gulpfile.js```" file.

This is on line 11 and 12:
	
```javascript
// Name of workspace folders
const developmentDir = './development/';
const productionDir = './production/';
```

---

For all questions: [romanenko15091999@icloud.com](mailto:romanenko15091999@icloud.com)

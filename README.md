<h1>Base Gulp template for Front-End development</h1>
<p>This template contains a minimal set of npm packages that allow you to quickly develop a project, and in the end, optimally build it</p>
<p>List of used npm packages:</p>
<ul>
	<lh>For ease of development</lh>
	<li>SASS (resulting in minified CSS)</li>
	<li>BrowserSync</li>
</ul>
<ul>
	<lh>For optimal project build</lh>
	<li>imagemin (сompresses images without loss of quality)</li>
	<li>uglify (minifies your JS code)</li>
</ul>
<h2>How to use:</h2>
<ol>
	<li>Clone this repository into your project folder</li>
	<li>Run "gulpBasic.command" if you use MacOS. This is a set of commands for the terminal that will receive the necessary npm packages.
		<br>
		If you see this message 
		<br>
		If you use Windows, rename file extension to ".bat" and delete the first line of code in it (<code>cd "$(dirname "$0")"</code>)
		<br>
		I recommend to run with administrator rights
	</li>
</ol>
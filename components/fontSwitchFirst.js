
import Webfont from "./webfontloader";


const fonts = [
	'Roboto', 
	'Open Sans', 
	'Raleway', 
	'Georama', 
	'Poppins', 
	'Josefin Sans', 
	'Fjalla One', 
	'Comfortaa', 
	'Righteous', 
	'Public Sans', 
	'Concert One', 
	'Economica', 
	'Droid Sans', 
	'PT Mono', 
	'Viga',
	'Cabin Condensed',
	'Palette Mosaic',
	'Coda',
	'Fredericka the Great',
	'Averia Serif Libre',
	'Nova Round',
	'Press+Start+2P',
	'Audiowide',
	'Lemonada',
	'Jolly Lodger',
	'Grandstander',
	'Grenze Gotisch',
	'MuseoModerno',
	'Skranji',
	'Megrim',
	'Sulphur Point',
	'Nova Flat',
	'Akronim'
];

  Webfont.load({
    google: {
      families: fonts
    }
  });



  export default function FontSwitch({ children }) {
	const rand = fonts[Math.floor(Math.random() * fonts.length)];
	return (
		<span style={{fontFamily:  rand }}>{children}</span>
	)
  }


// function fontSwitch(){
//   let h1 = document.querySelector(".hero"); // Get reference to the h1
// 	let text = h1.textContent.split("");                 // Get the text content into an array

// let result = ""; // Will hold output

  
// // Loop over the array
// text.forEach(function(char){
  
//    var rand = fonts[Math.floor(Math.random() * fonts.length)];
//   // Append a new span only if the current char is not a space
//   result += (char.trim() === "") ? "" : "<span style='font-family:" + rand + ";'>" + char + "</span>";
// });

// h1.innerHTML = result;  // Reset the h1's content

// // console.log(h1.outerHTML); // Test
// }


// setInterval(fontSwitch,50);

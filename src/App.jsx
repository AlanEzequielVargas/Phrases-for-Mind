import "./App.css";
import QuoteBox from "./components/QuoteBox";
import { useState } from 'react';
import quotes from "./quotes.json";

function App() {
   //frase aleatoria al cargar pagina
   const randomNumberForPhrase = Math.floor(Math.random()* quotes.length - 1);
   const [phrase , setPhrase]= useState(quotes[randomNumberForPhrase].quote)
   const [author , setAuthor]= useState(quotes[randomNumberForPhrase].author)
   //color aleatorio al cargar pagina
   const colors = ['rgb(218, 202, 64)','green','#4b5beb','rgb(224, 147, 226)','red','brown','turquoise','orange'];
   const randomNumberForColor = Math.floor(Math.random()* colors.length);
   const [color , setColor]= useState(colors[randomNumberForColor])

   
   //funcion para cambiar frase y color
   function change(){
      //cambiar frase
      const randomNumberForPhrase = Math.floor(Math.random()* quotes.length - 1);
      setPhrase(quotes[randomNumberForPhrase].quote)
      setAuthor(quotes[randomNumberForPhrase].author)
      //cambiar color
      const randomNumberForColor = Math.floor(Math.random()* colors.length);
      setColor(colors[randomNumberForColor])
   }
   document.body.style = `background: ${color}`
   


	return (
		<>
			<QuoteBox color={color} phrase={phrase} author={author} fn={change}/>
		</>
	);
}

export default App;

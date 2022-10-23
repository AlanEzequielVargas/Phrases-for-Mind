
const QuoteBox = ({phrase,author,fn,color}) => {


   return (
      <div className='box'>
         <i className="fa-solid fa-quote-left" style={{color}}></i>
         <p className='phrase' style={{color}}>{phrase}</p>
         <p className='author' style={{color}}>-{author}</p>
         <button className='switch-phrase-button' style={{color}} onClick={fn}><i className="fa-solid fa-shuffle" id="iconos"></i></button>
      </div>
   );
};

export default QuoteBox;
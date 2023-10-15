
import { useState } from 'react';
import './App.css';
import Cards from './Cards';

function App() {
  const [holderName, setHolderName] = useState('')
  const [cardNumber, setCardNumber] = useState('')
  const [expMonth, setExpMonth] = useState('')
  const [expYear, setExpYear] = useState('')
  const [cvc, setCVC] = useState('')
  const [error, setError] = useState(false)
  function handleClick() {
    console.log(holderName, cardNumber)
    setError(true)
  }

  return (
    
      <div id="mainDiv">


        <div className="AppLeft">
        <div id='cardDiv'>
        <Cards
          name={holderName}
          number={cardNumber}
          expMonth={expMonth}
          expYear={expYear}
          cvc={cvc} />
      </div>
          <svg id='svgMain' xmlns="http://www.w3.org/2000/svg" >
            <path d="M0 0H400V903H0V0Z" fill="url(#paint0_linear_2_50)" />
            <path d="M0 0H400V903H0V0Z" fill="url(#paint1_radial_2_50)" fillOpacity="0.2" />
            <defs>
              <linearGradient id="paint0_linear_2_50" x1="-35.5" y1="-149" x2="635.495" y2="1449.56" gradientUnits="userSpaceOnUse">
                <stop offset="0.171237" stop-color="#3B0E46" stopOpacity="0.98" />
                <stop offset="0.233073" stop-color="#380C4A" />
                <stop offset="0.25376" stop-color="#3B0E46" />
                <stop offset="0.277227" stop-color="#3D0F42" />
                <stop offset="0.315832" stop-color="#441436" />
                <stop offset="0.350216" stop-color="#33254E" />
                <stop offset="0.386028" stop-color="#2B2D59" />
                <stop offset="0.415202" stop-color="#292654" />
                <stop offset="0.442183" stop-color="#271F4F" />
                <stop offset="0.508969" stop-color="#240D37" />
                <stop offset="0.589617" stop-color="#22052D" />
                <stop offset="0.801339" stop-color="#22052D" />
                <stop offset="0.968006" stop-color="#22052D" />
                <stop offset="0.968106" stop-color="#22052D" />
              </linearGradient>
              <radialGradient id="paint1_radial_2_50" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(210.559 221.006) rotate(-37.852) scale(136.086 77.7416)">
                <stop stopColor="#4E1A45" />
                <stop offset="0.142857" stop-color="#45142B" />
                <stop offset="0.285714" stop-color="#45142B" />
                <stop offset="0.428571" stop-color="#3D0E12" />
                <stop offset="0.571429" stop-color="#3D0D0F" />
                <stop offset="0.714286" stop-color="#3D0D0F" />
                <stop offset="0.857143" stop-color="#3D0D0F" />
                <stop offset="1" stopColor="#3C0D0D" />
              </radialGradient>
            </defs>
          </svg>

        </div>
        <div className="AppRight">
          <div id='inputDiv'>
            <label>CARDHOLDER NAME</label>
            <input placeholder='e.g. Jane Appleseed' onChange={e => setHolderName(e.target.value)}></input>
            {error && holderName.length == 0 ? <label className='errorLabel'>Name required</label> : ""}


            <label>CARD NUMBER</label>
            <input type="number" placeholder='e.g. 1234 5678 9123 0000' onChange={e => setCardNumber(e.target.value)}></input>
            {error && cardNumber.length == 0 ? <label className='errorLabel'>Card number required</label> : ""}
            <div className='horizDiv'>
              <div id='exDate' >

                <div className='bottomInput'>
                  <label>EXP. DATE(MM/YY)</label>
                </div>

                <div className='horizDiv'>
                  <input id='month' className='bottom' type="number" placeholder='MM' onChange={e => setExpMonth(e.target.value)}></input>

                  <input id='year' className='bottom' type="number" placeholder='YY' onChange={e => setExpYear(e.target.value)}></input>
                </div>

              </div>
              <div id='cvcDiv' className='bottomInput'>
                <label>CVC</label>
                <input type="number" max="3" placeholder='e.g. 123' onChange={e => setCVC(e.target.value)}></input>
              </div>

            </div>
            {error && expMonth.length == 0 ? <label className='errorLabel'>Month required</label> : ""}
            {error && expMonth.length > 2 ? <label className='errorLabel'>Month not in correct format</label> : ""}
            {error && expYear.length == 0 ? <label className='errorLabel'>Year required</label> : ""}
            {error && expYear.length > 2 ? <label className='errorLabel'>Year not in correct format</label> : ""}
            {error && cvc.length == 0 ? <label className='errorLabel'>CVC required</label> : ""}
            {error && cvc.length != 3 ? <label className='errorLabel'>CVC not in correct format</label> : ""}
            <button id='submitBtn' onClick={handleClick}>Confirm</button>
          </div>

        </div>
      </div>

  );
}

export default App;

import React , {useState} from 'react'
import './Home.css';
import SweatLogo from '../../assets/images/sweatlogo.png';

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [montant,setMontant] = useState(0);
    const [montantTnd,setMontantTnd] = useState(0);
    const [phone,setPhone] = useState('');
    const [errorMontant,setErrorMontant] = useState(false);
    const [errorPhone,setErrorPhone] = useState(false);

    const handleChange = (e) => {
        const swt = e.target.value;
        setMontant(swt);
        const tnd = Math.round(swt / 15);
        setMontantTnd(tnd);
    }

    const handleClick = () => {
        if(phone !== '' && montant !== 0){
            if(phone.length !== 8 ){
                setErrorPhone(true);
                alert('Veuillez entrer un numéro de téléphone valide');
                return;
                
            }else{
                if(phone.charAt(0) === '2' || phone.charAt(0) === '5' || phone.charAt(0) === '9' )
                setIsLoading(true);
                else{
                    setErrorPhone(true);
                    alert('Veuillez entrer un numéro de téléphone valide');
                    return;
                }
            }
            if(montant < 100 || montant > 10000){
                setErrorMontant(true);
                alert('Veuillez entrer un montant entre 100 et 10000 SWT');
                setIsLoading(false);
                
            }else{
                setIsLoading(true);
            }
      
        }else
        {
            alert('Veuillez remplir tous les champs');
        }
        
    }

  return (
    <div className='Home__main'>
       <div className="Home__navbar">
           <div className='Home__logo'>
           <img style={{width:'40px' , height:'45px' ,filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)'}} alt='Sweatcoin Tunisie' src={SweatLogo}></img>
              <h2>Sweatcoin Tunisie</h2>
            </div>
            <div className='Home__navbar__links'>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/'>About</a>
                        </li>
                        <li>
                            <a href='/'>Contact</a>
                        </li>
                    </ul>
            </div>
       </div>
       <div className='Home__landing'>
              <div className='Home__landing__content'>
                  {isLoading && <div className='Home__popup_sender_wrapper' >
                  <div className='Home__popup_sender'>
                        <h2>Envoyer {montant} SWT au "swt.tunisie"</h2>
                        <div>
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                        </div>
                        <p>En attente du SWT envoyé</p>
                        <p>S'il vous plaît, assurez-vous d'entrer les données correctes </p>
                        <p>Lorsque le montant est reçu, {montantTnd} TND sera livré au +216 {phone}</p>
                  </div>
                  </div>}
                  <div className='Home__info'>
                    <h1>Bienvenue a Sweatcoin Tunisie</h1>
                    <p>
                      Sweatcoin est une solution de cryptomonnaie qui vous permet de gagner de l'argent en faisant des transactions de cryptomonnaies.
                      Vous pouvez echanger les tokens Sweatcoin en Dinar Tunisien avec D17 ou bien avec Soubflous.
                    </p>
                   
                    </div>
                    <div className='Home__sender'>
                    <h2>Echanger un montant</h2>
                    <div className='Home__form'>
                        <div style={{display:'flex',flexDirection:'row',width:'105%',gap:'1rem'}}>
                        <input type='text'  style={{border:errorMontant && '1px solid red'}} onChange={handleChange} placeholder='(min 100SWT)'></input>
                        <input type='text' disabled value={montantTnd > 0 ? montantTnd+' TND' : '0 TND'}></input>
                        </div>
                        <input type='text' style={{border:errorPhone && '1px solid red'}} maxLength={8} onChange={(e)=> setPhone(e.target.value)} placeholder='Votre numero d17'></input>
                        <button className='Home__envoyer' onClick={handleClick}>Echanger</button>
                    </div>

                </div>
                </div>
              

       </div>
    </div>
  )
}

export default Home
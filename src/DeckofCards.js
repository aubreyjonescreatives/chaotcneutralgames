import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Card, Button, CardMedia} from '@material-ui/core'
import LazyLoad from 'react-lazyload'
import './css/cardStyles.css'



const Loading = () => (
<div>
<h4>Loading...</h4>

</div>


)


const DeckofCards = () => {


const [deckData, setDeckData] = useState({
loading: false, 
decks: []

})

const fetchCards = () => {
axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
.then(function (response){
setDeckData({
loading: false, 
decks: response.data.cards    

})
})
}


useEffect(() => {
    fetchCards()
}, [])




return (
    <div class="main-1">
     <h1>Card Sorting</h1>
     <h2>Can You Make a Full Suit?</h2>
     <h2>Hints: Start with an Ace and Count Upwards</h2>
    {deckData.decks.map((card) => {
     return (
    <Card className="card-container">
    <Button>
    <LazyLoad placeholder={<Loading></Loading>}> 
     <CardMedia className="CardMedia"
     component="img"
     alt={'Card'}
     image={card.image}
     >
 
     </CardMedia>
     </LazyLoad>
     </Button>
     </Card>
    
    )
    
     })
     }
     
   
   </div>

)}
  
export default DeckofCards 
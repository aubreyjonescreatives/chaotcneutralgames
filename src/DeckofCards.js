import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Card, IconButton, CardMedia, Typography, Container, 
    Dialog, Button, DialogTitle, DialogContent, DialogContentText, 
    DialogActions, TextField} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/Add';
import LazyLoad from 'react-lazyload'
import './css/cardStyles.css'



const Loading = () => (
<div>
<h4>Loading...</h4>

</div>


)


const DeckofCards = () => {


const [deckData, setDeckData] = useState([])

const [restartdeckData, restartsetDeckData] = useState([])


const [deleteOpen, setDeleteOpen] = useState(false)
const [selectedCard, setSelectedCard] = useState(null)

const handleClickDeleteOpen = (card) => {
    console.log('You clicked to delete')
    console.log(card.card._id)
    setSelectedCard(card.card)
    setDeleteOpen(true)
}

const handleCloseDelete = () => {
    setDeleteOpen(false)
}

const handleDelete = async () => {
    setDeleteOpen(false)
    console.log(selectedCard._id)
    try {
        await axios.delete(`http://localhost:5000/card/delete`, { 
        data: {   
        cardId: selectedCard._id
        }
    })
    fetchCards()
    } catch (err) {
        console.error(err)
    }
}


const fetchCards = async () => {
try {
const cards = await axios.get(`http://localhost:5000/card/`)
setDeckData(cards.data)
console.log(cards.data)
} catch (err) {
    console.log(err)
}
}






useEffect(() => {
    fetchCards()
   
}, [])


function hintButton() {
    document.getElementById('gameHints').textContent = 'Hint: Add Cards or Press Restart'
    let hints = document.getElementById('gameHints') 
    if (hints.style.display === 'none') {
        hints.style.display = 'block'; 
    } else {
        hints.style.display = 'none'
    }
    
}


function restartButton() {

    
const fetchCardsRestart = async () => {
    try {
    const cards = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/?count=52`)
    restartsetDeckData(cards.data)
    console.log(cards.data)
    document.getElementById('restartGame').textContent = cards.data
    } catch (err) {
        console.log(err)
    }
    
    }

    fetchCardsRestart()
  
}



return (
    <div className="main-1">
     <h1>Card Sorting</h1>
     <h2>How Fast Can You Make a Full Suit?</h2>
    
    <button className="buttonHint" onClick={hintButton}>Show Hint</button>
    <button className="buttonHint" onClick={restartButton}>Restart</button>
     <h2 id="gameHints"></h2>
     <div></div>
     <form>
         <TextField placeholder='Search' />
         <IconButton aria-label='search'>
             <SearchIcon />
             </IconButton>
             <IconButton aria-label='add card'>
                <AddCircleIcon/>
             </IconButton>
     </form>
    {deckData.map((card) => {
     return (
    <Card className="card-container" key={card._id}>
    <LazyLoad placeholder={<Loading></Loading>}> 
     <CardMedia className="CardMedia"
     component="img"
     alt={'Card'}
     image={card.image}
     >
 
     </CardMedia>
     <Typography>{card.value}</Typography>
     <Typography>OF</Typography>
     <Typography>{card.suit}</Typography>
     <IconButton aria-label='edit'> <EditIcon/></IconButton>
     <IconButton aria-label='delete' onClick={() => handleClickDeleteOpen({card})}><DeleteIcon/></IconButton>
     </LazyLoad>
     </Card>
    
    )
    
     })
     }
    <div id="restartGame"></div>


     <form>
     <Container>
        <Dialog open={deleteOpen} onClose={handleCloseDelete}>
        <DialogTitle>Delete Card</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Are you sure you want to delete this card?
            </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCloseDelete}>Cancel</Button>
            <Button onClick={handleDelete}>Delete</Button>
        </DialogActions>
        </Dialog>
     </Container>


     </form>
     
   
   </div>

)}
  
export default DeckofCards 
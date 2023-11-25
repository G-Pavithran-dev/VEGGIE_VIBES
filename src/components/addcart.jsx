import { useSelector, useDispatch } from 'react-redux'
import {
  Typography,
  Grid,
  Box,
  Card,
  CardMedia,
  CardContent,
  Container,
  IconButton,
} from '@mui/material'
import { useContext, useEffect } from 'react'
import { AuthContext } from './context'
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { removeItem } from '../redux/actions';
import Dialogs from './dialog'

const Cart = () => {
  const { setBadge } = useContext(AuthContext)

  const dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cartItems)
  cartItems = cartItems.filter((item, index, self) => {
    return (
      index === self.findIndex((t) => t.id === item.id && t.name === item.name)
    )
  })

  setBadge(cartItems.length)

  const handleClick = (index) => {
    dispatch(removeItem(index))
    setBadge(cartItems.length);
  } 

  //placing items in start 
  useEffect(() => {
    document.body.style.placeItems = 'start'
  }, [])

  if (cartItems.length === 0) {
    return (
      <Box sx={{placeItems:'center'}}>
        <Typography variant='h2'>Shopping Cart</Typography>
        <Dialogs openS={true} />
      </Box>
    )
  }

  return (
    <Container maxWidth="xl">
      <Typography variant="h2">Shopping Cart</Typography>
      <Grid
        container
        direction={'row'}
        columnSpacing={6}
        rowSpacing={2}
        sx={{ marginBottom: '20px',width: '100vw' }}
      >
        {cartItems.map((items,index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card
              sx={{
                width: '100%',
                height: '100%',
                transition: 'transform 0.3s',
                '&:hover': { transform: 'scale(1.05)' },
                // backgroundColor: '#bbc0bb',
              }}
            >
              <CardMedia
                component={'img'}
                image={items.image_url}
                alt={items.name}
                height={160}
              />
              <CardContent>
                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Box paddingBottom={'15px'}>
                    <Typography variant="h4">{items.name}</Typography>
                  <Typography variant="h6">₹{items.price} per kg</Typography>
                    {/* <Typography variant="body1">{items.description}</Typography> */}
                  </Box>
                  <Box
                    display={'flex'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    sx={{ width: '100%' }}
                  >
                    <IconButton onClick={() => {handleClick(index)}}>
                      <RemoveShoppingCartIcon />
                    </IconButton>
                    <IconButton onClick={() => {}}>
                      <AddCircleIcon />
                    </IconButton>
                    <Typography variant="body2">
                      Available Stock: {items.stock}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Cart

import React from 'react'
import styled from 'styled-components'
import { PageHero} from '../components'
// extra imports
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <main>
    <PageHero title='checkout'/>
    <Wrapper className='page'>
      <h1>Thanks for shopping</h1>
      <Link to='/' className='btn'>back home</Link>
    </Wrapper>
  </main>
}
const Wrapper = styled.div``
export default CheckoutPage

import { Heading, Input } from '@chakra-ui/react'
import React from 'react'

const Contacts = () => {
  return (
    <div id="contacts">
      <Heading style={{color:"yellowgreen",textAlign:"center"}}>Contact Me</Heading>
      <form>
        <Input type={"text"} />
      </form>
    </div>
  )
}

export default Contacts
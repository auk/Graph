import React from "react"
import './Chip.css'
import DeleteChip from './DeleteChip'


const Chip = ({ Chip }) => (
<div className='chip' style={{backgroundColor:Chip.color}} >
  <span className='chipText' >{Chip.title}</span>
  <DeleteChip/>
</div>

)
export default Chip;
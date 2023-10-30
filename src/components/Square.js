import { useState } from "react";
const Square = () => {

    const [value , setValue] = useState()

    const clickHandler = () => {
        setValue('x')
    }

    return (
        <button className='border rounded-lg w-[30px] h-[30px]' onClick={clickHandler}>{value}</button>
    )
  }

  export default Square;
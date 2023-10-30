
const Square = ({value,onSquareClick}) => {

    return (
        <button className='border rounded-lg w-[30px] h-[30px]' onClick={onSquareClick}>{value}</button>
    )
  }

  export default Square;
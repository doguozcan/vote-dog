import { useDispatch } from 'react-redux'
import { incrementDislikes, fetchDog } from './dogSlice'

const DislikeButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(incrementDislikes())
    dispatch(fetchDog())
  }

  return (
    <button
      className="btn btn-primary rounded-full w-1/4"
      onClick={handleClick}
    >
      Dislike
    </button>
  )
}

export default DislikeButton

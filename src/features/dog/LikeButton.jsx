import { useDispatch } from 'react-redux'
import { incrementLikes, fetchDog } from './dogSlice'

export const LikeButton = () => {
  const dispatch = useDispatch()

  const handleClick = () => {
    dispatch(incrementLikes())
    dispatch(fetchDog())
  }

  return (
    <button
      className="btn btn-primary rounded-full w-1/4"
      onClick={handleClick}
    >
      Like
    </button>
  )
}

export default LikeButton

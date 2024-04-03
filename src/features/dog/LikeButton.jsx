import { useDispatch, useSelector } from 'react-redux'
import { incrementLikes, fetchDog } from './dogSlice'

export const LikeButton = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.dog)

  const handleClick = () => {
    if (status !== 'loading' && status !== 'error') {
      dispatch(incrementLikes())
      dispatch(fetchDog())
    }
  }

  return (
    <button
      className="btn btn-primary rounded-full w-1/4"
      onClick={handleClick}
      disabled={status === 'loading' || status === 'error'}
    >
      Like
    </button>
  )
}

export default LikeButton

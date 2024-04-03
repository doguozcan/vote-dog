import { useDispatch, useSelector } from 'react-redux'
import { incrementDislikes, fetchDog } from './dogSlice'

const DislikeButton = () => {
  const dispatch = useDispatch()
  const { status } = useSelector((state) => state.dog)

  const handleClick = () => {
    if (status !== 'loading' && status !== 'error') {
      dispatch(incrementDislikes())
      dispatch(fetchDog())
    }
  }

  return (
    <button
      className="btn btn-primary rounded-full w-1/4"
      onClick={handleClick}
      disabled={status === 'loading' || status === 'error'}
    >
      Dislike
    </button>
  )
}

export default DislikeButton

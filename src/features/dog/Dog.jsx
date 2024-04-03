import { useSelector, useDispatch } from 'react-redux'
import { fetchDog } from './dogSlice'
import { useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const Dog = () => {
  const dispatch = useDispatch()

  const { imageUrl, status, name, weight, height, breed_for } = useSelector(
    (state) => state.dog
  )

  useEffect(() => {
    dispatch(fetchDog())
  }, [dispatch])

  return (
    <div className="m-2 text-2xl">
      {status === 'loading' && (
        <div className="flex justify-center items-center">
          <ClipLoader color="orange" />
        </div>
      )}
      {status === 'success' && imageUrl && (
        <div className="flex flex-col justify-center items-center gap-2">
          <p>{name}</p>
          {weight && <p>Weight: {weight} kg</p>}
          {height && <p>Height: {height} cm</p>}
          {breed_for && <p>Breed for: {breed_for}</p>}
          <img
            className="w-96 h-96 object-cover rounded-full"
            src={imageUrl}
            alt="Dog"
          ></img>
        </div>
      )}
    </div>
  )
}
export default Dog

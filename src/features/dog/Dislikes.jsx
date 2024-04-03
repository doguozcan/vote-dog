import { useSelector } from 'react-redux'

const Dislikes = () => {
  const { dislikes } = useSelector((state) => state.dog)
  return <p className="text-2xl">Dislikes: {dislikes}</p>
}
export default Dislikes

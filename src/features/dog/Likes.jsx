import { useSelector } from 'react-redux'

const Likes = () => {
  const { likes } = useSelector((state) => state.dog)
  return <p className="text-2xl">Likes: {likes}</p>
}
export default Likes

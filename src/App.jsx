import Dog from './features/dog/Dog'
import LikeButton from './features/dog/LikeButton'
import DislikeButton from './features/dog/DislikeButton'
import Likes from './features/dog/Likes'
import Dislikes from './features/dog/Dislikes'

export default function App() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center py-5 gap-10 text-primary">
        <Likes />
        <Dislikes />
      </div>
      <Dog />
      <div className="flex justify-center gap-2">
        <LikeButton />
        <DislikeButton />
      </div>
    </div>
  )
}

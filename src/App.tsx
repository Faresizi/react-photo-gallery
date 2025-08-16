import { useState } from "react"
import "./App.css"

function App() {
  const [search, setSearch] = useState("")
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  const photos = [
    { id: 1, url: "https://picsum.photos/id/1015/300/200" },
    { id: 2, url: "https://picsum.photos/id/1016/300/200" },
    { id: 3, url: "https://picsum.photos/id/1018/300/200" },
    { id: 4, url: "https://picsum.photos/id/1020/300/200" },
    { id: 5, url: "https://picsum.photos/id/1024/300/200" },
    { id: 6, url: "https://picsum.photos/id/1025/300/200" },
  ]

  const filteredPhotos = photos.filter((photo) =>
    photo.id.toString().includes(search)
  )

  return (
    <div className="gallery">
      <h1>📸 Photo Gallery</h1>

      <input
        type="text"
        placeholder="Search by photo ID..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="grid">
        {filteredPhotos.map((photo) => (
          <img
            key={photo.id}
            src={photo.url}
            alt={`Photo ${photo.id}`}
            onClick={() => setSelectedPhoto(photo.url)}
            className="clickable"
          />
        ))}
      </div>

      {selectedPhoto && (
        <div className="modal" onClick={() => setSelectedPhoto(null)}>
          <img src={selectedPhoto} alt="Selected" className="modal-img" />
        </div>
      )}
    </div>
  )
}

export default App

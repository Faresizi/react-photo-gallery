import "./App.css"

function App() {
  const photos = [
    { id: 1, url: "https://picsum.photos/id/1015/300/200" },
    { id: 2, url: "https://picsum.photos/id/1016/300/200" },
    { id: 3, url: "https://picsum.photos/id/1018/300/200" },
    { id: 4, url: "https://picsum.photos/id/1020/300/200" },
    { id: 5, url: "https://picsum.photos/id/1024/300/200" },
    { id: 6, url: "https://picsum.photos/id/1025/300/200" },
  ]

  return (
    <div className="gallery">
      <h1>📸 Photo Gallery</h1>
      <div className="grid">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.url} alt={`Photo ${photo.id}`} />
        ))}
      </div>
    </div>
  )
}

export default App

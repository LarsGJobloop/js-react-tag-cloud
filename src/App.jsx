import { TagCloud } from "./components/TagCloud/TagCloud"

const tagElements = [
  "VSCode",
  "TypeScript",
  "React",
  "Preact",
  "Parcel",
  "Jest",
  "Next",
  "ESLint",
  "Framer Motion",
  "Three.js",
]

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tag Cloud Showcase</h1>
        <a href="https://www.npmjs.com/package/@frank-mayer/react-tag-cloud"><h2>npm</h2></a>
      </header>

      <main className="gallery">
        <TagCloud elements={tagElements} />
      </main>

      <footer>
        <h1>©Jobloop AS</h1>
      </footer>
    </div>
  )
}

export default App

import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { sampleProduct } from "./data"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>Amazona</header>
      <main>
        <ul>
          {sampleProduct.map((product) => (
            <>
              <li key={product.slug}>
                <h2>{product.name}</h2>
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <p>{product.price}</p>
              </li>
            </>
          ))}
        </ul>
      </main>
      <footer>All right reserved</footer>
    </div>
  )
}

export default App

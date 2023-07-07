import Nestedtest from "./Nestedtest";
import { Routes, Route } from 'react-router-dom'


export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, delectus vero sapiente asperiores iste magnam mollitia reprehenderit tempore odio quibusdam voluptatem rem quos similique doloremque nisi fugiat, reiciendis corrupti. Quos?</p>

      <Routes>
        <Route path='nestedtest' element={<Nestedtest />} />
      </Routes>
    </div>
  )
}

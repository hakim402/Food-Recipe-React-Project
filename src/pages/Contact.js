import { useLocation } from 'react-router-dom'

export default function Contact() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const name = queryParams.get('name')
  return (
    <div>
     {name &&<span> Hello {name} </span> } <h1> Contact us here</h1> 
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa suscipit enim recusandae, eum omnis assumenda optio dolores molestiae cum consectetur quas tenetur dolore quis nulla totam placeat nostrum. Hic, nulla?</p>
    </div>
  )
}

import {Link} from "react-router-dom"
import "./Navigation.css"
const Navigation = ()=>{
  return (
  <>
    <nav>
        <ul>
            <li>

                <img src="https://lh3.googleusercontent.com/a-/ALV-UjX9R7_4agHY4gFevscS9OfSlz4wkOktkJZ16Gs20tVetMl9U5E=s80-p"/>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/find-events">Find Events</Link>
            </li>
        </ul>
    </nav>
  </>
  )
}
export default Navigation;
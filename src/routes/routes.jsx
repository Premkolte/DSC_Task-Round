import EventList from '../Pages/EventList/EventList'
import FilterEvents from '../Pages/FilterEvents/FilterEvents'
import EventDetails from '../Pages/EventDetails/EventDetails'

export const routes = [
  {path:'/',element:<EventList/>},
  {path:'/find-events',element:<FilterEvents/>},
  {path:'/events/:id',element:<EventDetails/>}
]
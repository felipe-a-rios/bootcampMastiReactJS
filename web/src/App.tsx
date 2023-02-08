import { Course, Home } from "./pages/Home";
import "./global.css";
import { Error404 } from "./pages/Error404";

export function App(props: Course) {
  return (
     <Home
       id={props.id}
       key={props.id}
       description={props.description}
       instructor={props.instructor}
       price={props.price}
       requirements={props.requirements}
       thumbnail={props.thumbnail}
       title={props.title}
     />
    // <Error404 />
  );
}

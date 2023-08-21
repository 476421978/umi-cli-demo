import styles from "./index.css"
import Redirect from "umi/redirect"

export default function(props) {
  console.log("pages-index", props)
  return <Redirect to={{path: "/user/login", state: {type: 'login', props}}}  />
}

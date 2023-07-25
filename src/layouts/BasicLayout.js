import React from "react"
import SimpleLayout from "./SimpleLayout"
class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log("BasicLayout--------", props)
  }

  render() {
    const { children } = this.props

    // 不同的全局 layout
    if (this.props.location.pathname === "/user/login") {
      // return <div>不同布局</div>
      return <SimpleLayout></SimpleLayout>
    }

    return <div>{children}</div>
  }
}
export default BasicLayout

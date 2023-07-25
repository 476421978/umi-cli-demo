import React from "react"

class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log("BasicLayout--------", props)
  }

  render() {
    const { children } = this.props
    return <div>{children}</div>
  }
}
export default BasicLayout

import React from "react"

class SimpleLayout extends React.PureComponent {
  constructor(props) {
    super(props)
    console.log("SimpleLayout--------", props)
  }

  render() {
    const { children } = this.props
    return <div> {children} SimpleLayout组件布局 </div>
  }
}
export default SimpleLayout

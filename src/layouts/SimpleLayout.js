import React from "react"

import Login from '@/pages/user/login.js'
class SimpleLayout extends React.PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    // const { children } = this.props
    return <div> SimpleLayout组件布局 

      <Login />
    </div>
  }
}
export default SimpleLayout

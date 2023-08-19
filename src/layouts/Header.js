import React, { PureComponent, Fragment } from "react"
import { Layout, message } from "antd"
const { Header } = Layout
class HeaderView extends PureComponent {
  state = {}

  render() {
    return (
      <Fragment>
        <Header style={{ color: "#fff"}}>头部</Header>
      </Fragment>
    )
  }
}

export default HeaderView

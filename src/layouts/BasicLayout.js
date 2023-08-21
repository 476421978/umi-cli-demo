import React from "react"
import { Layout } from "antd"
import SimpleLayout from "./SimpleLayout"
import { ContainerQuery } from "react-container-query"
import classnames from "classnames"
import Header from "./Header"
import Footer from "./Footer"
import router from "umi/router"

const query = {
  a: 1,
}

const { Content, Sider } = Layout
class BasicLayout extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      type: "BasicLayout",
    }
    console.log("BasicLayout--------", props)
  }

  getContext() {
    const { location, breadcrumbNameMap } = this.props
    return {
      location,
      breadcrumbNameMap,
    }
  }

  render() {
    const { children } = this.props

    console.log("children---", children)

    // 不同的全局 layout
    if (this.props.location.pathname === "/user/login"){
      // return <div>不同布局</div>
      return <SimpleLayout {...this.props}></SimpleLayout>
    }
    // 主动跳转页面
    // router.replace("/user/login")

    const layout = (
      <Layout>
        <Sider style={{ color: "#fff" }}>侧边区</Sider>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Header />
          <Content>内容区 </Content>
          <Footer />
        </Layout>
      </Layout>
    )

    return (
      <React.Fragment>
        <ContainerQuery query={query}>{(params) => <div className={classnames(params)}>{layout}</div>}</ContainerQuery>
      </React.Fragment>
    )
  }
}
export default BasicLayout

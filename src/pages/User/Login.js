import React, { Component } from "react"
import { Form, Input, Button, Icon } from "antd"
const FormItem = Form.Item

function hasErrors(fieldsError) {
  console.log("fieldsError---", fieldsError)
  return Object.keys(fieldsError).some((field) => fieldsError[field])
}

class LoginPage extends Component {
  constructor(props) {
    super(props)
  }

  // 挂载后执行
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values)
      }
      console.log("提交表单")
    })
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form

    // Only show error after a field is touched.
    const userNameError = isFieldTouched("userName") && getFieldError("userName")
    const passwordError = isFieldTouched("password") && getFieldError("password")
    return (
      <div>
        <Form layout="horizontal" onSubmit={this.handleSubmit}>
          <FormItem style={{ marginTop: 30 }} validateStatus={userNameError ? "error" : ""} help={userNameError || ""}>
            {getFieldDecorator("userName", {
              rules: [{ required: true, message: "请输入用户名" }],
            })(<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />)}
          </FormItem>
          <FormItem style={{ marginTop: 30 }} validateStatus={passwordError ? "error" : ""} help={passwordError || ""}>
            {getFieldDecorator("password", {
              rules: [{ required: true, message: "请输入密码" }],
            })(<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="请输入密码" />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
              Log in
            </Button>
          </FormItem>
        </Form>{" "}
      </div>
    )
  }
}

export default Form.create()(LoginPage)

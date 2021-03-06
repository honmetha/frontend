import React, { Component } from 'react'
import './CreateAccount.css'
import { Row, Col, Input, Button, Radio } from 'antd'
import Axios from 'axios'
import { withRouter} from 'react-router-dom'

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      password: "",
      imageUrl: ""
    };
  }

  handleSignUp = (e) => {
    let firstN = this.state.firstName
    let lastN = this.state.lastName
    let userN = this.state.userName
    let passW = this.state.password
    let imageU = this.state.imageUrl

    if (firstN === "" || lastN === "" || userN === "" || passW === "" || imageU === "") {

    } else {
      Axios.post("http://localhost:8080/createUser", {
        username: this.state.userName,
        password: this.state.password,
        firstname: this.state.firstName,
        lastname: this.state.lastName,
        profilepic: this.state.imageUrl
      }).then(result => {
        console.log(result.data)
        this.setState({
          firstName: "",
          lastName: "",
          userName: "",
          password: "",
          imageUrl: ""
        })
        this.props.history.push('/feed')
      }).catch(err => {
        console.error(err)
      })
    }
  }

  render() {
    return (
      <Row className="createAccount">
        <Col span={3}></Col>
        <Col span={18}>
          <Row>
            <Col span={14} className="fbLoginTextPic">
              <Row className="fbLoginText">
                <span>
                  Facebook helps you connect and share with the people in your life.
                </span>
              </Row>
              <img src="fbLoginPic.png" alt="" width="100%" />
            </Col>
            <Col span={10} className="fbCreateAccount">
              <Row className="createAccountHeader">
                <span>Create an account</span>
              </Row>
              <Row className="createAccountText">
                <span>It's quick and easy.</span>
              </Row>
              <Row>
                <Col span="12" className="firstNameInput">
                  <Input onChange={e =>
                    this.setState({ firstName: e.target.value })
                  }
                    placeholder="First Name"
                    value={this.state.firstName}
                    className="createAccountInput" />
                </Col>
                <Col span="12">
                  <Input onChange={e =>
                    this.setState({ lastName: e.target.value })
                  }
                    placeholder="Surname"
                    value={this.state.lastName}
                    className="createAccountInput" />
                </Col>
              </Row>
              <Row>
                <Input onChange={e =>
                  this.setState({ imageUrl: e.target.value })
                }
                  placeholder="Image Url"
                  value={this.state.imageUrl}
                  className="createAccountInput" />
              </Row>
              <Row>
                <Input onChange={e =>
                  this.setState({ userName: e.target.value })
                }
                  placeholder="Mobile number or email address"
                  value={this.state.userName}
                  className="createAccountInput" />
              </Row>
              <Row>
                <Input.Password onChange={e =>
                  this.setState({ password: e.target.value })
                }
                  placeholder="New password"
                  value={this.state.password}
                  className="createAccountInput" />
              </Row>
              <Row className="createAccountBirthdayGender">
                <span>Birthday</span>
              </Row>
              <Row className="createAccountBirthdayGender">
                <span>Gender</span>
              </Row>
              <Row>
                <Radio.Group>
                  <Radio value={1} className="createAccountGenderRadio">Female</Radio>
                  <Radio value={2} className="createAccountGenderRadio">Male</Radio>
                  <Radio value={3} className="createAccountGenderRadio">Custom</Radio>
                </Radio.Group>
              </Row>
              <Row className="termsPolicyText">
                <span>
                  By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.
                </span>
              </Row>
              <Row type="flex" align="middle">
                <Button onClick={this.handleSignUp} type="primary" className="signUpButton">Sign Up</Button>
              </Row>
              <Row className="celebrityPage">
                <span>
                  <a href="http://localhost:3000/" className="createAPage">Create a Page</a> for a celebrity, band or business.
                </span>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col span={3}></Col>
      </Row>
    )
  }
}

export default withRouter(CreateAccount)
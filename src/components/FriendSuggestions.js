import React, { Component } from 'react'
import { Row, Col, Card } from 'antd'
import './FriendSuggestions.css'
import SuggestedFriend from './SuggestedFriend'

export default class FriendSuggestions extends Component {
  render() {
    return (
      <div>
        <Card className="friSuggestionCard">
          <Row className="friSuggestionHeader">
            <Col span={20}>
              <span className="peopleYouMayKnow">People You May Know</span>
            </Col>
            <Col span={4}>
              <Row type="flex" justify="end">
                <a href="http://localhost:3000/feed">
                  <span className="seeAll">See all</span>
                </a>
              </Row>
            </Col>
          </Row>
          <SuggestedFriend />
          <SuggestedFriend />
          <SuggestedFriend />
        </Card>
      </div>
    )
  }
}

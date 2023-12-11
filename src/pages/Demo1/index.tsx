import React from "react";
import { DebounceSelect } from "@/components/DebounceSelect";
import { Col, Row } from "antd";

interface UserValue {
  label: string;
  value: string;
}

// 防抖搜索框
const Demo1: React.FC = () => {
  /**
   * 搜索用户
   * @param username
   */
  async function fetchUserList(username: string): Promise<UserValue[]> {
    console.log('fetching user', username);

    return fetch('https://randomuser.me/api/?results=5')
      .then((response) => response.json())
      .then((body) =>
        body.results.map(
          (user: { name: { first: string; last: string }; login: { username: string } }) => ({
            label: `${user.name.first} ${user.name.last}`,
            value: user.login.username,
          }),
        ),
      );
  }

  return (
    <Row justify={'center'} style={{ marginTop: 200 }}>
      <Col>
        <DebounceSelect
          style={{ minWidth: 250, maxWidth: 350 }}
          placeholder="输入姓名搜索"
          mode="multiple"
          size={'large'}
          loading={true}
          fetchOptions={fetchUserList}
        />
      </Col>
    </Row>
  );
};

export default Demo1;

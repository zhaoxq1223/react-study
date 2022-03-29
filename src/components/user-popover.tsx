import React from "react";
import { Divider, List, Popover, Typography } from "antd";
import styled from "@emotion/styled";
import { ButtonNoPadding } from "./lib";
import { usePorjectModal } from "screens/project-list/util";
import { useUsers } from "utils/user";

export const UserPopover = () => {
  const { data: users, refetch } = useUsers();

  const content = (
    <ContentContainer>
      <Typography.Text type="secondary">组员列表</Typography.Text>
      <List>
        {users?.map((user, index) => (
          <List.Item key={index}>
            <List.Item.Meta title={user.name} />
          </List.Item>
        ))}
      </List>
      <Divider />
    </ContentContainer>
  );

  return (
    <Popover
      onVisibleChange={() => refetch()}
      placement="bottom"
      content={content}
    >
      <span>组员</span>
    </Popover>
  );
};

const ContentContainer = styled.div`
  min-width: 30rem;
`;

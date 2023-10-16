import { FC } from "react";
import { containerCommonStyle, headerContainerCommonStyle } from "./style";
import { UserOutlined } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import AuthorizationSessions from "./AuthorizationSessions";

const ProfileComponent: FC = () => {
  return (
    <>
      <div style={containerCommonStyle}>
        <div style={headerContainerCommonStyle}>
          <UserOutlined style={{ color: "#fff", fontSize: 25 }} />
          <Typography style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>
            Your profile
          </Typography>
        </div>
        <Space size={50} style={{ padding: 20 }}>
          <Space direction="vertical" size={20}>
            <Typography style={{ color: "gray", fontWeight: 500 }}>
              Your login / phone number
            </Typography>
            <Typography style={{ color: "gray", fontWeight: 500 }}>
              Display name
            </Typography>
            <Typography style={{ color: "gray", fontWeight: 500, opacity: 0 }}>
              =====
            </Typography>
          </Space>
          <Space direction="vertical" size={20}>
            <Typography
              style={{ color: "gray", fontWeight: 500, paddingTop: 25 }}
            >
              +9 (936) 343-03-38
            </Typography>
            <Input value={"Halil"} />
            <Button type="primary" style={{ background: "gray", width: 150 }}>
              Save
            </Button>
          </Space>
        </Space>
        <div
          style={{
            padding: 20,
            display: "flex",
            gap: 30,
            alignItems: "center",
            width: "100%",
          }}
        >
          <Typography style={{ color: "#000", fontWeight: 600, opacity: 0.9 }}>
            Change Password
          </Typography>
          <div
            style={{
              background: "#000",
              width: "80%",
              height: "2px",
              opacity: 0.7,
            }}
          ></div>
        </div>
        <Typography style={{ color: "gray", fontWeight: 500, padding: 20 }}>
          You use this password to log in to the Bazon system. After changing
          your password, all places where you were authorized will have to
          re-authorize with the new password.
        </Typography>
        <Space size={40} style={{ padding: 20 }}>
          <Space size={20} direction="vertical">
            <Typography style={{ color: "gray", fontWeight: 500 }}>
              Old Password
            </Typography>
            <Typography style={{ color: "gray", fontWeight: 500 }}>
              New Password
            </Typography>
            <Typography style={{ color: "gray", fontWeight: 500 }}>
              New password again
            </Typography>
            <Button type="primary" style={{ opacity: 0 }}>
              Change
            </Button>
          </Space>
          <Space size={15} direction="vertical">
            <Input.Password placeholder="input password" />
            <Input.Password placeholder="input password" />
            <Input.Password placeholder="input password" />
            <Button type="primary" style={{ background: "gray", width: 150 }}>
              Change
            </Button>
          </Space>
        </Space>
      </div>
      <AuthorizationSessions />
    </>
  );
};

export default ProfileComponent;

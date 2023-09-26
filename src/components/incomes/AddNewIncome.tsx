import {
  CameraOutlined,
  CarryOutTwoTone,
  PlusSquareOutlined,
} from "@ant-design/icons";
import {
  AutoComplete,
  Button,
  Card,
  Col,
  Drawer,
  Input,
  Row,
  Typography,
  Upload,
} from "antd";
import { FC, useState } from "react";
import {
  applicabilityBtn,
  applicabilityCard,
  autoCompleteInput,
  autoCompleteStyle,
  btnContainerBtns,
  buttonContainer,
  composeCard,
  createButton,
  descriptionTitle,
} from "./style";
import type { UploadProps } from "antd";
import { showError, showSuccess } from "../alert/Alert";

const { TextArea } = Input;

const props: UploadProps = {
  name: "file",
  action: "https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      showSuccess(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      showError(`${info.file.name} file upload failed.`);
    }
  },
};

const AddNewIncomes: FC = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  const onClose = () => {
    setIsDrawerVisible(false);
  };

  return (
    <div>
      <Button type="text" icon={<PlusSquareOutlined />} onClick={showDrawer}>
        New Goods
      </Button>
      <Drawer
        title="New Goods"
        placement="bottom"
        closable={true}
        onClose={onClose}
        visible={isDrawerVisible}
        height="100%"
        width="100%"
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
            width: "100%",
          }}
        >
          <div style={{ display: "flex", width: "50%" }}>
            <Input
              showCount
              maxLength={20}
              placeholder="Number Manufacturer"
              style={{
                height: 50,
                width: "50%",
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
            <Input
              placeholder="Manufacturer "
              style={{
                height: 50,
                width: "50%",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
          </div>
          <Input
            style={{ height: 50, width: "50%" }}
            showCount
            maxLength={20}
            placeholder="Cross-Number "
          />
        </div>
        <Typography style={descriptionTitle}>
          Description of the new spare part
        </Typography>

        <Row>
          <Col span={18}>
            <div
              style={{
                display: "flex",
                gap: 20,
              }}
            >
              <div style={buttonContainer}>
                <Button type="text" style={btnContainerBtns}>
                  Front
                </Button>
                <Button type="text" style={btnContainerBtns}>
                  Rear
                </Button>
              </div>
              <div style={buttonContainer}>
                <Button type="text" style={btnContainerBtns}>
                  Left
                </Button>
                <Button type="text" style={btnContainerBtns}>
                  Right
                </Button>
              </div>
              <Upload {...props}>
                <Button
                  style={{ height: 45, width: 200 }}
                  icon={<CameraOutlined />}
                >
                  Click to Upload
                </Button>
              </Upload>
            </div>
            <Row style={{ marginTop: 20 }}>
              <Col span={12}>
                <AutoComplete
                  style={autoCompleteStyle}
                  placeholder="Spare Part"
                />
              </Col>
              <Col span={6}>
                <AutoComplete style={autoCompleteStyle} placeholder="Marking" />
              </Col>
              <Col span={6}>
                <AutoComplete style={autoCompleteStyle} placeholder="Color" />
              </Col>
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Col span={18}>
                <TextArea
                  rows={3}
                  style={{ width: "95%" }}
                  placeholder="Note For You"
                />
              </Col>
              <Col span={6}>
                <Input placeholder="Retail Price" style={autoCompleteStyle} />
              </Col>
            </Row>
            <TextArea
              rows={3}
              style={{ marginTop: 30, width: "99%" }}
              placeholder="Note For Clients"
            />
          </Col>
          <Col span={6}>
            <Card hoverable style={composeCard}>
              <Typography
                style={{ color: "gray", fontSize: 16, marginBottom: 10 }}
              >
                To Compose Advertisiments
              </Typography>
              <div style={{ display: "flex" }}>
                <AutoComplete style={autoCompleteInput} placeholder="Brand" />
                <AutoComplete style={autoCompleteInput} placeholder="Model" />
              </div>
              <div style={{ display: "flex", marginTop: 10 }}>
                <Input style={autoCompleteInput} placeholder="Body" />
                <Input style={autoCompleteInput} placeholder="Engine" />
                <Input style={autoCompleteInput} placeholder="Year" />
              </div>
            </Card>
            <Card hoverable style={applicabilityCard}>
              <Typography
                style={{ color: "gray", fontSize: 16, marginBottom: 10 }}
              >
                Applicability not specified
              </Typography>
              <Button
                icon={<CarryOutTwoTone />}
                type="primary"
                style={applicabilityBtn}
              >
                Set applicability
              </Button>
            </Card>
            <Button type="primary" style={{ ...createButton, width: "100%" }}>
              Create a spare part
            </Button>
          </Col>
        </Row>
      </Drawer>
    </div>
  );
};

export default AddNewIncomes;

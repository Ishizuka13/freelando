import { Outlet } from "react-router-dom";
import { Card } from "../components/GlobalStyles/Card/Card";
import { Col, Row } from "react-grid-system";
import { UserSignUpProvider } from "../../context/ClientSignUp";

export const LayoutCard = () => {
  return (
    <UserSignUpProvider>
      <Row justify="center">
        <Col
          xxx={6}
          xxl={6}
          xl={6}
          lg={6}
          md={8}
          sm={12}
          style={{ margin: "70px 0" }}
        >
          <Card>
            <Outlet />
          </Card>
        </Col>
      </Row>
    </UserSignUpProvider>
  );
};

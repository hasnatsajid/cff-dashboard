import React from "react";
import { Row, Col } from "react-bootstrap";
import { FormHead, AgentSection } from "../styles/index";

const Agent = () => {
  return (
    <div className="Agent">
      <Row>
        <Col md={6}>
          <FormHead>
            <p>My Agent</p>
          </FormHead>
          <AgentSection>
            <div className="agentCard">
              <img src="./images/document.png" alt="click here" />
              <p>Justin Feaster</p>
              <p>justin@mygraymark.com</p>
              <p>123-456-7890</p>
            </div>
          </AgentSection>
        </Col>
      </Row>
    </div>
  );
};

export default Agent;

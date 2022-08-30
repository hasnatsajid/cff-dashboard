import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { GoPlus } from 'react-icons/go';
import DocumentCard from './DocumentCard';
import { DocumentsCardData1, DocumentsCardData2, DocumentsCardData3, DocumentsCardData4, DocumentsCardData5, DocumentsCardData6 } from '../data/appdata';
import { FormHead, DocumentsSection } from '../styles/index';

const Documents = (props) => {
  const handleSectionShowAndHide = () => {
    props.setState(true);
  };
  return (
    <div className="Documents">
      <a className="addBtn" href="#" onClick={handleSectionShowAndHide}>
        <GoPlus />
        Upload Document
      </a>
      <Row>
        <Col md={6}>
          <FormHead>
            <p>Declerations Page</p>
          </FormHead>
          <DocumentsSection>
            {DocumentsCardData1.map((item) => (
              <DocumentCard data={item} />
            ))}
          </DocumentsSection>
        </Col>
        <Col md={6}>
          <FormHead>
            <p>ID Cards</p>
          </FormHead>
          <DocumentsSection>
            {DocumentsCardData2.map((item) => (
              <DocumentCard data={item} />
            ))}
          </DocumentsSection>
        </Col>
        <Col md={6}>
          <FormHead>
            <p>Recent Certificates</p>
          </FormHead>
          <DocumentsSection>
            {DocumentsCardData3.map((item) => (
              <DocumentCard data={item} />
            ))}
          </DocumentsSection>
          <FormHead>
            <p>Fillings</p>
          </FormHead>
          <DocumentsSection>
            {DocumentsCardData4.map((item) => (
              <DocumentCard data={item} />
            ))}
          </DocumentsSection>
        </Col>
        <Col md={6}>
          <FormHead>
            <p>Finance Agreement</p>
          </FormHead>
          <DocumentsSection>
            {DocumentsCardData5.map((item) => (
              <DocumentCard data={item} />
            ))}
          </DocumentsSection>
          <FormHead>
            <p>Misc</p>
          </FormHead>
          <DocumentsSection>
            {DocumentsCardData6.map((item) => (
              <DocumentCard data={item} />
            ))}
          </DocumentsSection>
        </Col>
      </Row>
    </div>
  );
};

export default Documents;

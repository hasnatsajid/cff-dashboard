import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { FormSection, FormHead } from '../styles/index';
import { Button, Cascader, DatePicker, Form, Input, InputNumber, Select } from 'antd';

const Business = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="Business">
      <Row>
        <Col md={6}>
          <FormHead>
            <p>Company Information</p>
          </FormHead>
          <FormSection>
            <Form
              layout="vertical"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Row>
                <Col md={6}>
                  <Form.Item label="Company Legal Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="DBA (If applicable)">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="EIN (Optional)">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Number of years in business">
                    <InputNumber />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="DOT Number">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="MC Number">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Are you currently insured?">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Current Policy Expiration Date">
                    <DatePicker placeholder="" />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="How is your business structured?">
                    <Select>
                      <Select.Option value="lcl">LCL</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="dcd">DCD</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Business Type">
                    <Select>
                      <Select.Option value="trucker">Trucker</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="lader">Lader</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Current Bodily Injury Liability Limit?">
                    <Cascader
                      options={[
                        {
                          value: '$30k',
                          label: '$30k',
                          children: [
                            {
                              value: '$60k',
                              label: '$60k',
                            },
                          ],
                        },
                        {
                          value: 'Demo',
                          label: 'Demo',
                          children: [
                            {
                              value: 'Demo',
                              label: 'Demo',
                            },
                          ],
                        },
                        {
                          value: '$60k',
                          label: '$60k',
                          children: [
                            {
                              value: '$90k',
                              label: '$90k',
                            },
                          ],
                        },
                      ]}
                    />
                  </Form.Item>
                  <Form.Item label="Have you had at least one year of continuous insurance?">
                    <Select>
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Do any of your vehicles or loads require a hazardous material place card?">
                    <Select>
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Does your operating authority require any of these insurance filings?">
                    <Select>
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="How many accidents has your business had in last 5 years?">
                    <Select>
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Does your business do repossession?">
                    <Select>
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Does the business currently have any of the coverages below?">
                    <Select>
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Col md={6}>
                    <Form.Item label="Number of named additional insureds">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Col md={6}>
                    <Form.Item label="Number of named waiver of subrogation holders">
                      <Input />
                    </Form.Item>
                  </Col>
                  <Form.Item label="Is a blanket additional insured endorsement needed by contract?">
                    <Select>
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Are state or federal filings required?">
                    <Select>
                      <Select.Option value="yes">Yes</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="no">No</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button>Update Company</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </FormSection>
        </Col>
        <Col md={6}>
          <FormHead>
            <p>Primary Contact</p>
          </FormHead>
          <FormSection>
            <Form
              layout="vertical"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Row>
                <Col md={6}>
                  <Form.Item label="First Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Last Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Date of Birth">
                    <DatePicker placeholder="" />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Cell Phone Number">
                    <Input />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="Email Address">
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button>Update Primary</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </FormSection>

          <FormHead>
            <p>Company Mailing Address</p>
          </FormHead>
          <FormSection>
            <Form
              layout="vertical"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Row>
                <Col md={12}>
                  <Form.Item label="Address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={8}>
                  <Form.Item label="City">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={4}>
                  <Form.Item label="Zip Code">
                    <Input />
                  </Form.Item>
                </Col>
                <Col>
                  <Form.Item label="State / Prov / Region *">
                    <Select>
                      <Select.Option value="texas">Texas</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="texas">Texas</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item label="Time Zone *">
                    <Select>
                      <Select.Option value="time">Time</Select.Option>
                      <Select.Option value="demo">Demo</Select.Option>
                      <Select.Option value="time">Time</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item>
                    <Button>Update Address</Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </FormSection>

          <FormHead>
            <p>Business Owner</p>
          </FormHead>
          <FormSection>
            <Form
              layout="vertical"
              initialValues={{
                size: componentSize,
              }}
              onValuesChange={onFormLayoutChange}
              size={componentSize}
            >
              <Row>
                <Col md={6}>
                  <Form.Item label="First Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Last Name">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Date of Birth">
                    <DatePicker placeholder="" />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Cell Phone Number">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item label="Email Address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={12}>
                  <Form.Item label="Street Address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="City">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="State">
                    <Input />
                  </Form.Item>
                </Col>
                <Col md={6}>
                  <Form.Item label="Z‍ip Code">
                    <Input />
                  </Form.Item>
                </Col>
                <Form.Item>
                  <Button>Update Owner</Button>
                </Form.Item>
              </Row>
            </Form>
          </FormSection>
        </Col>
      </Row>
    </div>
  );
};

export default Business;

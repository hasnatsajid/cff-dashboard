import { Tabs } from 'antd';

import Business from '../components/Business';
import Vehicles from '../components/Vehicles';
import Drivers from '../components/Drivers';
import Coverage from '../components/Coverage';
import Documents from '../components/Documents';
import Agent from '../components/Agent';
import { MainSection } from '../styles/index';
import UploadDocument from '../components/UploadDocument';

const MainContent = ({ onChangeTab, handleSectionHideAndShow, setTabActive, tabActive }) => {
  const { TabPane } = Tabs;

  return (
    <div className="main-section">
      <MainSection>
        <h4 className="mainHeading">Contact Name</h4>
        <div className="tabs">
          <Tabs defaultActiveKey="1" onChange={onChangeTab}>
            <TabPane tab="Business" key="1">
              <Business />
            </TabPane>
            <TabPane tab="Vehicles/Trailers" key="2">
              <Vehicles />
            </TabPane>
            <TabPane tab="Drivers" key="3">
              <Drivers />
            </TabPane>
            <TabPane tab="Coverage" key="4">
              <Coverage />
            </TabPane>
            <TabPane tab={<span onClick={handleSectionHideAndShow}>Documents</span>} key="5">
              {tabActive === true ? <UploadDocument /> : <Documents setTabActive={setTabActive} />}
            </TabPane>
            <TabPane tab="Agent" key="6">
              <Agent />
            </TabPane>
          </Tabs>
        </div>
      </MainSection>
    </div>
  );
};

export default MainContent;

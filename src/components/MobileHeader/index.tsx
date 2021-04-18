import React, { useState } from 'react';
import { Link, withRouter } from 'umi';
import { Popover, NavBar, Accordion, List } from 'antd-mobile';
import logo from '../../assets/logo.svg';
import styles from './index.less';
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/close.png';
import './menu.less';


type MobileHeaderProps = {
  location: Object;
};

const MobileHeader: React.FC<MobileHeaderProps> = (props: MobileHeaderProps) => {

  const [visible, setVisible] = useState(false);
  const [langVisible, setLangVisible] = useState(false);

  var skeys: Array<string> = [];
  const path: string = props.location['pathname'].substring(1);
  if (path.indexOf('about') > -1 || path.indexOf('glossary') > -1 || 
      path.indexOf('faq') > -1 || path.indexOf('philosophy') > -1) {
    skeys.push('learn');
  }
  if (path.indexOf('announcements') > -1) {
    skeys.push('community');
  }
  skeys.push(path);
  skeys.push('english');

  const onSelect = (opt) => {
    setVisible(!visible)
  };

  const handleLangVisibleChange = (visible: boolean) => {
    setLangVisible(visible)
  };

  const onLangSelected = (lang: string) => {

  }

  const onMenuSelect = () => {
    console.log("AAAAAA");
  }

  return (
    <div className="mobile-header-wrapper">
    <NavBar
        mode="light"
        leftContent={
          <img src={logo} className={styles.logo} />
        }
        rightContent={

          <div className={styles.actions}>

            <button onClick={onSelect} className={styles.menuButton}>
              { visible ? <img src={closeIcon} /> : <img src={menuIcon} /> }
            </button>

            <Popover mask={false}
              visible={langVisible}
              overlay={[
               (<button className="lang-btn" onClick={() => { onLangSelected("en") }}>English</button>), 
               (<button className="lang-btn" onClick={() => { onLangSelected("zh") }}>Chinese</button>), 
               (<button className="lang-btn" onClick={() => { onLangSelected("sp") }}>Spanish</button>), 
              ]}
              onVisibleChange={handleLangVisibleChange}
              align={{
                overflow: { adjustY: 0, adjustX: 0 },
                offset: [0, 12],
              }}
            >
              <div className={styles.languageSwitcher}>
                English
              </div>
            </Popover>

          </div>
        }
      >
      </NavBar>
      <Accordion defaultActiveKey="0" className={"menu-accordion" + (visible ? " show" : "")}>
          <Accordion.Panel header="Community">
            <List className="my-list">
              <List.Item>Snapshot</List.Item>
              <List.Item>Medium</List.Item>
              <List.Item>Discord</List.Item>
              <List.Item><Link to="/announcements">Announcements</Link></List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Developers" className="pad">
            <List className="my-list">
              <List.Item>Docs</List.Item>
              <List.Item>Github</List.Item>
              <List.Item><Link to="/road-map">Road Map</Link></List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Learn" className="pad">
            <List className="my-list">
              <List.Item>Dabacus' Philosophy</List.Item>
              <List.Item><Link to="/about">About</Link></List.Item>
              <List.Item><Link to="/glossary">Glossary</Link></List.Item>
              <List.Item><Link to="/faq">FAQ</Link></List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Products" className="pad">
            <List className="my-list">
              <List.Item>White Paper</List.Item>
              <List.Item>World Unit of Account Index</List.Item>
              <List.Item>Exchange</List.Item>
            </List>
          </Accordion.Panel>
        </Accordion>
      </div>

  );
};

export default withRouter(MobileHeader);

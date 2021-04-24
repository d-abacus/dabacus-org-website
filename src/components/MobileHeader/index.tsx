import React, { useState } from 'react';
import { Link, withRouter, history } from 'umi';
import { Popover, NavBar, Accordion, List } from 'antd-mobile';
import logo from '../../assets/logo.svg';
import styles from './index.less';
import menuIcon from '../../assets/menu.png';
import closeIcon from '../../assets/close.png';
import earthIcon from '../../assets/ic_round-language.png';
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

  const onLinkTapped = (link: string) => {
    setVisible(false);
    history.push(link);
  }

  return (
    <div>
    <div className="mobile-header-wrapper">
    <NavBar
        mode="light"
        leftContent={
          <Link to="/"><img src={logo} className={styles.logo} /></Link>
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
                <img width="18" src={earthIcon} /> English
              </div>
            </Popover>

          </div>
        }
      >
      </NavBar>
      </div>
      <div className="mobile-submenu-wrapper">
      <Accordion className={"menu-accordion" + (visible ? " show" : "")}>
          <Accordion.Panel header="Community">
            <List className="my-list">
              <List.Item>Snapshot</List.Item>
              <List.Item>Medium</List.Item>
              <List.Item>Discord</List.Item>
              <List.Item onClick={() => onLinkTapped("/announcements")}>Announcements</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Developers" className="pad">
            <List className="my-list">
              <List.Item>Docs</List.Item>
              <List.Item>Github</List.Item>
              <List.Item onClick={() => onLinkTapped("/road-map")}>Road Map</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Learn" className="pad">
            <List className="my-list">
              <List.Item>Dabacus' Philosophy</List.Item>
              <List.Item onClick={() => onLinkTapped("/about")}>About</List.Item>
              <List.Item onClick={() => onLinkTapped("/glossary")}>Glossary</List.Item>
              <List.Item onClick={() => onLinkTapped("/faq")}>FAQ</List.Item>
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
      </div>

  );
};

export default withRouter(MobileHeader);

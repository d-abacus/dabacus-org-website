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
  const handleVisibleChange = (visible: boolean) => {
    setVisible(visible)
  };

  return (
    <div className="mobile-header-wrapper">
    <NavBar
        mode="light"
        rightContent={
          <button onClick={onSelect} className={styles.menuButton}>
              { visible ? <img src={closeIcon} /> : <img src={menuIcon} /> }
            </button>
        }
      >
      </NavBar>
      <Accordion defaultActiveKey="0" className={"menu-accordion" + (visible ? " show" : "")}>
          <Accordion.Panel header="Community">
            <List className="my-list">
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Developers" className="pad">
            <List className="my-list">
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Learn" className="pad">
            <List className="my-list">
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
        </Accordion>
      </div>

  );
};

export default withRouter(MobileHeader);

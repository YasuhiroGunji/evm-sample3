import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import { List, ListItem } from 'material-ui/List';

const GroupTree = () => (
  <List>
    <ListItem
      primaryText="GS2"
      leftCheckbox={<Checkbox />}
      initiallyOpen
      primaryTogglesNestedList={false}
      nestedItems={[
        <ListItem
          key={1}
          leftCheckbox={<Checkbox />}
          initiallyOpen
          primaryText="T1"
          nestedItems={[
            <ListItem key={1} primaryText="郡司　康弘" leftCheckbox={<Checkbox />} />,
            <ListItem key={2} primaryText="赤石　翔" leftCheckbox={<Checkbox />} />,
            <ListItem key={3} primaryText="遠藤　美波" leftCheckbox={<Checkbox />} />,
          ]}
        />,
        <ListItem
          key={2}
          primaryText="T2"
          leftIcon={<Checkbox />}
          initiallyOpen
          nestedItems={[
            <ListItem key={1} primaryText="郡司　康弘" leftCheckbox={<Checkbox />} />,
            <ListItem key={2} primaryText="赤石　翔" leftCheckbox={<Checkbox />} />,
            <ListItem key={3} primaryText="遠藤　美波" leftCheckbox={<Checkbox />} />,
          ]}
        />,
        <ListItem
          key={3}
          primaryText="T3"
          leftIcon={<Checkbox />}
          initiallyOpen
          nestedItems={[
            <ListItem key={1} primaryText="郡司　康弘" leftCheckbox={<Checkbox />} />,
            <ListItem key={2} primaryText="赤石　翔" leftCheckbox={<Checkbox />} />,
            <ListItem key={3} primaryText="遠藤　美波" leftCheckbox={<Checkbox />} />,
          ]}
        />,
      ]}
    />
  </List>
);
export default GroupTree;

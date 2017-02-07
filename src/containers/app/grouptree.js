import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import {List, ListItem} from 'material-ui/List';

import Group from 'material-ui/svg-icons/social/group';

import {grey50} from 'material-ui/styles/colors';

export const GroupTree = () => (
  <IconMenu
    iconButtonElement={
      <IconButton>
        <Group color={grey50} />
      </IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
  >
    <List>
      <ListItem
        primaryText="GS2"
        leftCheckbox={<Checkbox />}
        initiallyOpen={false}
        primaryTogglesNestedList={false}
        nestedItems={[
          <ListItem
            key={1}
            leftCheckbox={<Checkbox />}
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
            nestedItems={[
              <ListItem key={1} primaryText="郡司　康弘" leftCheckbox={<Checkbox />} />,
              <ListItem key={2} primaryText="赤石　翔" leftCheckbox={<Checkbox />} />,
              <ListItem key={3} primaryText="遠藤　美波" leftCheckbox={<Checkbox />} />,
            ]}
          />,
        ]}
      />
    </List>
  </IconMenu>
);
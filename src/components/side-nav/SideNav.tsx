import React from 'react';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import {
  ExpandMore,
  PieChart,
  BarChart,
  Settings,
  Language,
  Notifications,
  Contacts,
  Handshake,
  QueryStats,
} from '@mui/icons-material';

type SideItem = {
  header: string;
  items: Array<{
    name: string;
    icon: React.ElementType;
  }>;
};

const sideItems: SideItem[] = [
  {
    header: 'Dashboard',
    items: [
      { name: 'Statistics', icon: BarChart },
      { name: 'Reports', icon: PieChart },
      { name: 'Settings', icon: Settings },
      { name: 'Notifications', icon: Notifications },
      { name: 'Languages', icon: Language },
    ]
  },
  {
    header: 'HR',
    items: [
      { name: 'Overview', icon: BarChart },
      { name: 'People', icon: PieChart },
      { name: 'Reports', icon: PieChart },
      { name: 'Settings', icon: Settings },
    ]
  },
  {
    header: 'Accounting',
    items: [
      { name: 'Statistics', icon: BarChart },
      { name: 'Reports', icon: PieChart },
      { name: 'Settings', icon: Settings },
      { name: 'Notifications', icon: Notifications },
      { name: 'Languages', icon: Language },
    ]
  },
  {
    header: 'CRM',
    items: [
      { name: 'Overview', icon: BarChart },
      { name: 'Deals', icon: Handshake },
      { name: 'Leads', icon: QueryStats },
      { name: 'Contacts', icon: Contacts },
      { name: 'Settings', icon: Settings },
    ]
  },
  {
    header: 'Payroll',
    items: [
      { name: 'Overview', icon: BarChart },
      { name: 'People', icon: PieChart },
      { name: 'Reports', icon: PieChart },
      { name: 'Settings', icon: Settings },
    ]
  },
];

const SideNav: React.FC = () => {
  return (
    <div style={{ width: '250px' }}>
      {sideItems.map((sideItem, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>{sideItem.header}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              {sideItem.items.map((item, itemIndex) => (
                <ListItem button key={itemIndex}>
                  <ListItemIcon>
                    <item.icon />
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItem>
              ))}
            </List>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export { SideNav };
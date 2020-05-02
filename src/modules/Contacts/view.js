import React from 'react';
import { Table, TableRow, TableCell, Grid, Typography } from '@material-ui/core';

import FacebookIcon from './assets/facebookIcon.svg';
import GmailIcon from './assets/gmailIcon.svg';
import InstaIcon from './assets/instaIcon.svg';
import PhoneIcon from './assets/phoneIcon.svg';
import ViberIcon from './assets/viberIcon.svg';
import TelegramIcon from './assets/telegramIcon.svg';
import { Map } from '../Map';
import { container, mapContainer } from './styles';

export const View = ({ classes, width }) => {
  const phones = [
    { name: 'Віктор', phone: '+380976911146' },
    { name: 'Тетяна', phone: '+380976911148' },
  ];
  const contactsByPhoneNumberIcons = [PhoneIcon, TelegramIcon, ViberIcon];

  const socialNetworksInfo = {
    insta: {
      link: 'https://www.instagram.com/flowersmamka/',
      content: [
        'Напишіть нам у Instagram',
        <img className={classes.icon} src={InstaIcon} alt="phone" />,
      ],
    },
    fb: {
      link: 'https://www.facebook.com/100026793572185/',
      content: [
        'Напишіть нам у Facebook',
        <img className={classes.icon} src={FacebookIcon} alt="phone" />,
      ],
    },
  };

  const renderContactsTable = () => (
    <Table className={classes.table}>
      {phones.map((person) => (
        <TableRow className={classes.row}>
          <TableCell className={classes.td}>
            <Typography className={classes.bold}>{`${person.name}:`}</Typography>
          </TableCell>
          <TableCell className={classes.td}>
            <Typography color="primary" className={classes.bold}>
              {person.phone}
            </Typography>
          </TableCell>
          <TableCell className={classes.td}>
            <Grid container justify="space-between" wrap="nowrap">
              {contactsByPhoneNumberIcons.map((logo) => (
                <img className={classes.icon} src={logo} alt="social-logo" />
              ))}
            </Grid>
          </TableCell>
        </TableRow>
      ))}
      <TableRow>
        <TableCell className={classes.td} colSpan={3}>
          <Grid container wrap="nowrap" justify="space-between">
            <Typography className={classes.text} color="primary">
              viktor.humenchuk@gmail.com
            </Typography>
            <img className={classes.icon} src={GmailIcon} alt="phone" />
          </Grid>
        </TableCell>
      </TableRow>
      {Object.values(socialNetworksInfo).map(({ link, content }) => (
        <TableRow>
          {content.map((el) => (
            <TableCell className={classes.td} colSpan={2}>
              <a href={link} target="_blank" className={classes.link}>
                {el}
              </a>
            </TableCell>
          ))}
        </TableRow>
      ))}
    </Table>
  );

  const deliveryInfo = {
    address: {
      title: 'Наша адреса:',
      info: ['Вінницька обл., Калинівський р-н.', 'c. Павлівка, вул. Коцюбинського, 18'],
    },
    delivery: {
      title: 'Доставка:',
      info: ['Самовивіз,', 'Новою Поштою (замовлення від 1000грн)'],
    },
  };

  const renderAddressTable = () => (
    <Table className={classes.table}>
      {Object.values(deliveryInfo).map(({ title, info }) => (
        <TableRow>
          <TableCell className={classes.td} colSpan={2}>
            {title}
          </TableCell>
          <TableCell className={classes.td} colSpan={3}>
            {info.map((el) => (
              <Typography className={classes.text} color="primary">
                {el}
              </Typography>
            ))}
          </TableCell>
        </TableRow>
      ))}
    </Table>
  );
  return (
    <Grid className={`${classes[container[width]]} ${classes.container}`}>
      <div>
        {renderContactsTable()}
        {renderAddressTable()}
      </div>
      <div className={classes[mapContainer[width]]}>
        <Map />
      </div>
    </Grid>
  );
};

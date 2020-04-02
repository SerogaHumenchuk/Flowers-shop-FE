import React from 'react';
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  Typography,
} from '@material-ui/core';

import FacebookIcon from './assets/facebookIcon.svg';
import GmailIcon from './assets/gmailIcon.svg';
import InstaIcon from './assets/instaIcon.svg';
import PhoneIcon from './assets/phoneIcon.svg';
import ViberIcon from './assets/viberIcon.svg';
import TelegramIcon from './assets/telegramIcon.svg';

export const View = ({ classes }) => {
  const phones = [
    { name: 'Віктор', phone: '+380976911146' },
    { name: 'Тетяна', phone: '+380976911148' },
  ];
  const contactsByPhoneNumberIcons = [PhoneIcon, TelegramIcon, ViberIcon];

  const socialNetworksInfo = {
    insta: {
      link: 'https://www.instagram.com/flowersmamka/',
      content: ['Напишіть нам у Instagram', <img className={classes.icon} src={InstaIcon} alt="phone"/>],
    },
    fb: {
      link: 'https://www.facebook.com/100026793572185/',
      content: ['Напишіть нам у Facebook', <img className={classes.icon} src={FacebookIcon} alt="phone"/>],
    },
  };

  return (
    <div>
      <Table className={classes.table}>
        <TableBody>
          {phones.map(person => (
            <TableRow className={classes.row}>
              <TableCell className={classes.td}>
                <Typography className={classes.bold}>{`${person.name}:`}</Typography>
              </TableCell>
              <TableCell className={classes.td}>
                <Typography color="primary" className={classes.bold}>{person.phone}</Typography>
              </TableCell>
              <TableCell className={classes.td}>
                <Grid container wrap="nowrap">
                  {contactsByPhoneNumberIcons.map(logo =>
                    <img className={classes.icon} src={logo} alt="social-logo"/>,
                  )}
                </Grid>
              </TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell className={classes.td} colSpan={2}>
              <Typography className={classes.text} color="primary">
                viktor.humenchuk@gmail.com
              </Typography>
            </TableCell>
            <TableCell className={classes.td} colSpan={1}>
              <img className={classes.icon} src={GmailIcon} alt="phone"/>
            </TableCell>
          </TableRow>
          {Object.values(socialNetworksInfo).map(({ link, content }) => (
            <TableRow>
              {content.map(el => (
                <TableCell className={classes.td} colSpan={2}>
                  <a href={link} target="_blank" className={classes.link}>
                    {el}
                  </a>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table className={classes.table}>
        <TableBody>
          <TableRow>
            <TableCell className={classes.td} colSpan={1}>
              Наша адреса:
            </TableCell>
            <TableCell className={classes.td} colSpan={2}>
              <Typography className={classes.text} color="primary">Вінницька обл.</Typography>
              <Typography className={classes.text} color="primary">Калинівський р-н.</Typography>
              <Typography className={classes.text} color="primary">c. Павлівка</Typography>
              <Typography className={classes.text} color="primary">вул. Коцюбинського, 18</Typography>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.td} colSpan={1}>
              Доставка:
            </TableCell>
            <TableCell className={classes.td} colSpan={2}>
              <Typography className={classes.text} color="primary">Самовивіз</Typography>
              <Typography className={classes.text} color="primary">Новою Поштою (замовлення від 500грн)</Typography>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

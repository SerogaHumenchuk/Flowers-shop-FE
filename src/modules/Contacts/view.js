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
  return (
    <Table className={classes.table}>
      <TableBody>
        {phones.map(person => (
          <TableRow className={classes.row}>
            <TableCell className={classes.td}>
              <Typography
                className={classes.bold}
              >{`${person.name}:`}</Typography>
            </TableCell>

            <TableCell className={classes.td}>
              <Typography color="primary" className={classes.bold}>
                {person.phone}
              </Typography>
            </TableCell>
            <TableCell className={classes.td}>
              <Grid container wrap="nowrap">
                <img className={classes.icon} src={PhoneIcon} alt="phone" />
                <img className={classes.icon} src={TelegramIcon} alt="phone" />
                <img className={classes.icon} src={ViberIcon} alt="phone" />
              </Grid>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell className={classes.td} colSpan={2}>
            <Typography className={classes.mail} color="primary">
              viktor.humenchuk@gmail.com
            </Typography>
          </TableCell>
          <TableCell className={classes.td} colSpan={1}>
            <img className={classes.icon} src={GmailIcon} alt="phone" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.td} colSpan={2}>
            <a
              href="https://www.facebook.com/100026793572185"
              target="_blank"
              className={classes.link}
            >
              <Typography className={classes.writeUsMessage} color="primary">
                Напишіть нам у Facebook
              </Typography>
            </a>
          </TableCell>
          <TableCell className={classes.td} colSpan={2}>
            <a
              href="https://www.facebook.com/100026793572185"
              target="_blank"
              className={classes.link}
            >
              <img className={classes.icon} src={FacebookIcon} alt="phone" />
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.td} colSpan={2}>
            <a
              href="https://www.instagram.com/flowersmamka/"
              target="_blank"
              className={classes.link}
            >
              <Typography className={classes.writeUsMessage} color="primary">
                Напишіть нам у Instagram
              </Typography>
            </a>
          </TableCell>
          <TableCell className={classes.td} colSpan={2}>
            <a
              href="https://www.instagram.com/flowersmamka/"
              target="_blank"
              className={classes.link}
            >
              <img className={classes.icon} src={InstaIcon} alt="phone" />
            </a>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className={classes.td} colSpan={1}>
            Наша адреса:
          </TableCell>
          <TableCell className={classes.td} colSpan={2}>
             <Typography className={classes.mail} color="primary">Вінницька обл.</Typography>
            <Typography className={classes.mail} color="primary">Калинівський р-н.</Typography>
            <Typography className={classes.mail} color="primary">c. Павлівка</Typography>
            <Typography className={classes.mail} color="primary">вул. Коцюбинського, 18</Typography>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

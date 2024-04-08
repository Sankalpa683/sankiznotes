import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Nav from './nav';
import styles from './notification.module.css';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Footer from './footer';
import { siteConfig } from '@/config/siteConfig';

function Notification() {
  const [notificationData, setNotificationData] = useState([]);

  useEffect(() => {
    const currentDate = new Date();
    const examDate = new Date('2024-04-26');
    const differenceInTime = examDate.getTime() - currentDate.getTime();
    const totalDaysLeft = Math.ceil(differenceInTime / (1000 * 3600 * 24));

    const generateNotificationData = () => {
      const data = [];
      for (let i = 0; i < totalDaysLeft; i++) {
        const daysLeft = totalDaysLeft - i;
        const notification = {
          id: i + 1,
          daysLeft,
          message: `<b>Class 12 </b>Exam is within ${daysLeft === 1 ? 'a day' : daysLeft + ' days'}. Check The calendar here.`,
        };
        data.push(notification);
      }
      setNotificationData(data);
    };

    generateNotificationData();
  }, []);

  return (
    <div className={styles.html}>
      <Head>
        <title>{siteConfig.productName} - Notifications</title>
      </Head>
      <Nav />
      <br />
      <br />
      <br />
      <div className={styles.notification}>
        <div className={styles.header}>
          <h1>Notifications</h1>
        </div>
        <div className={styles.notifications}>
          {notificationData.map(notification => (
            <div key={notification.id} className={styles.notification_div}>
              <div className={styles.notification_div_img}>
                <img src='/me.jpg' />
              </div>
              <div className={styles.notification_div_text}>
                <p dangerouslySetInnerHTML={{ __html: notification.message }} />
              </div>
              <div className={styles.notification_div_app}>
                <div className={styles.notification_div_color}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default Notification;

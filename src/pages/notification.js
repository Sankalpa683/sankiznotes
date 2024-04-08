import React, { useEffect, useState } from 'react';
import Head from 'next/head.js'
import Nav from './nav.js'
import styles from './notification.module.css'
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Footer from './footer.js'
import { siteConfig } from '@/config/siteConfig.js';

function notification() {
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateDaysLeft = () => {
      const currentDate = new Date();
      const examDate = new Date('2024-04-26');
      const differenceInTime = examDate.getTime() - currentDate.getTime();
      const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
      setDaysLeft(differenceInDays);
    };

    calculateDaysLeft();
  }, []);
  return (
    <div className={styles.html}>
        <Head>
            <title>{siteConfig.productName} - Notifications</title>
        </Head>
        <Nav/>
        <br></br><br></br><br></br>
        <div className={styles.notification}>
            <div className={styles.header}>
                <h1>Notifications</h1>
            </div>
            <div className={styles.notifications}>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within {daysLeft}. Check The calendar here</p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
                <div className={styles.notification_div}>
                    <div className={styles.notification_div_img}>
                        <img src='/me.jpg'></img>
                    </div>
                    <div className={styles.notification_div_text}>
                       <p><b>Class 12 </b>Exam is within a week. Check The calander here. </p> 
                    </div>
                    <div className={styles.notification_div_app}>
                        <div className={styles.notification_div_color}></div>
                    </div>
                </div>
            </div>
        </div>
        <br></br><br></br><br></br>
        <Footer/>
    </div>
  )
}

export default notification

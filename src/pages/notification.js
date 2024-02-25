import React from 'react'
import Head from 'next/head.js'
import Nav from './nav.js'
import styles from './notification.module.css'
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import Footer from './footer.js'

function notification() {
  return (
    <div className={styles.html}>
        <Head>
            <title>SankNotes - Notifications</title>
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
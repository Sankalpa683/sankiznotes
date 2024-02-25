import React from 'react'
import Nav from './nav.js'
import Head from 'next/head.js'
import styles from './footers.module.css'
import Subject from './subject.js'

function footer() {
  return (
    <div>
        <Head>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
        </Head>
        {/* <Nav/> */}
        {/* <div className={styles.haha}>
          <Subject /><br></br><br></br><br></br>
          <div className={styles.video_div}>
            <img src='https://i.ytimg.com/vi/DZ_MYgSBnH8/hq720.jpg?sqp=-oaymwEcCK4FEIIDSEbyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXG8L7HFE9QWp5JfBVSry_o_oTPw'>
            </img>
            <div className={styles.video_text}>
              <div className={styles.video_text_icon}>
                <img src='https://yt3.ggpht.com/PepK8Ve09BuwiIuRpOkPDx6DrtveKeYjysBxp9oaYSipyBLjWuFLRb-WaI8DLqfWNlpLmG9LAg=s68-c-k-c0x00ffffff-no-rj'></img>
              </div>
              <div className={styles.video_heading}>
                <center><h1 style={{fontSize : '18px', fontWeight : '500'}}>KUNGFU KARATE | HARSH RAJPUT</h1></center>
                <div className={styles.video_subheading}>
                  <p>Harsh Rajput</p>
                  <p>4.6M views</p>
                  <p>2 months ago</p>
                </div>
              </div>
              <div className={styles.video_icon}>
              <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
              </div>
            </div>
          </div><hr></hr><  
        </div> */}
       <footer className={styles.footer}>
          <div className={styles.footers}>  
            <div className={styles.footer_home_icon}>
              <a href='/'><i class="fa fa-home" aria-hidden="true" className='now_page'></i></a>
            </div>
            <div className={styles.footer_book_icon}>
              <a href='/subject'><i class="fa fa-book" aria-hidden="true"></i></a>
            </div>
            <div className={styles.footer_plus_icon}>
              <a href='/contact'><i class="fa fa-plus-circle" aria-hidden="true"></i></a>
            </div>
            <div className={styles.footer_about_icon}>
              <a href='/about'><i class="fa fa-user-circle" aria-hidden="true"></i></a>
            </div>
            <div className={styles.footer_calendar_icon}>
              <a href='https://sankalpa683.github.io/notes/' target='_blank'><i class="fa fa-calendar" aria-hidden="true"></i></a>
            </div>
          </div>
        </footer> 
    </div>
  )
}

export default footer
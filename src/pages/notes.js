import { Main } from 'next/document'
import React from 'react'
import styles from './notes.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';

const website = () => {
  return (
    <div>
      <Head><title>SankNote - Notes</title>
      </Head>
        <div className={styles.myClass}>
          <div className='nav-logo'>
              <h1>Sank<span>Notes</span> </h1>
          </div>
          <div className={styles.navlinks}>
            <a href='/'>Home</a>
              <a href='/sank'>Notes</a>
              <a href=''>Subject</a>
              <a href=''>Schedule</a>
              <a href=''>About</a>

          </div>
          <a className="bg-blue-400 text-white font-bold py-1 px-2 rounded" href=''>Get started</a>
        </div>
        <div className={styles.header}>
          <div className={styles.header_image}>
            {/* <Image
              src="/logo.png"
              alt="Picture of the author"
              width={150}
              height={100}
            /> */}
          </div>
          <div className={styles.header_text}>
            <h1>Welcome to SankNotes</h1>
          </div>
          <div className={styles.paragraph}>
          <p><b>Sank Notes</b> by Sankalpa Dahal is an initative which provides <b>Notes, Notices, Syllabus, Question Answer and other Study Materials</b>, <br/>Resources for <b>Class 12 NEB Students</b>,etc.</p>
          </div>
          <div className={styles.header_button}>
          <button class="bg-blue-400 text-white font-bold py-2 px-4 rounded">
            Latest Materials
          </button>
          </div>
          <div className={styles.styleicon} class='scroll-icon'>
.
          </div>
        </div>
        <div className={styles.subject}>
            <div className={styles.subjects_div}>
              <div className={styles.subjectdiv_image}>
                <Image
                src='/subject.jpg'
                width='400'
                height='500'
                ></Image>
              </div>
              <div className={styles.subject_name}>
                <h1><b>Class 12 Computer Subject Notes</b></h1>
              </div>
              <div className={styles.subject_desc}>
                <p>Here are the Class 12 Computer Subject Notes which provide comprehensive coverage of advanced topics in computer science, equipping students with essential knowledge and skills.</p>
              </div>
            </div>
            <div className={styles.subjects_div}>
              <div className={styles.subjectdiv_image}>
                <Image
                src='/subject.jpg'
                width='400'
                height='500'
                ></Image>
              </div>
              <div className={styles.subject_name}>
                <h1><b>Class 12 Account Subject Notes</b></h1>
              </div>
              <div className={styles.subject_desc}>
                <p>Here are the Class 12 Accounting Notes facilitate financial understanding, helping students grasp principles for effective record-keeping and business management.</p>
              </div>
            </div>
            <div className={styles.subjects_div}>
              <div className={styles.subjectdiv_image}>
                <Image
                src='/subject.jpg'
                width='400'
                height='500'
                ></Image>
              </div>
              <div className={styles.subject_name}>
                <h1><b>Class 12 Nepali Subject Notes</b></h1>
              </div>
              <div className={styles.subject_desc}>
                <p>Here are the notes for Class 12 Nepali students in mastering their language and literature, fostering proficiency in communication and literary analysis.</p>
              </div>
            </div>
            <div className={styles.subjects_div}>
              <div className={styles.subjectdiv_image}>
                <Image
                src='/subject.jpg'
                width='400'
                height='500'
                ></Image>
              </div>
              <div className={styles.subject_name}>
                <h1><b>Class 12 Social Subject Notes</b></h1>
              </div>
              <div className={styles.subject_desc}>
                <p>Here are The Class 12 Social Notes which cover a range of topics, encouraging students to explore society's dynamics, history, and contemporary issues.</p>
              </div>
            </div>
            <div className={styles.subjects_div}>
              <div className={styles.subjectdiv_image}>
                <Image
                src='/subject.jpg'
                width='400'
                height='500'
                ></Image>
              </div>
              <div className={styles.subject_name}>
                <h1><b>Class 12 Economics Subject Notes</b></h1>
              </div>
              <div className={styles.subject_desc}>
                <p>Here are The Class 12 Economics Notes which offer insights into economic principles, nurturing students' understanding of market dynamics and policy implications.</p>
              </div>
            </div>
            <div className={styles.subjects_div}>
              <div className={styles.subjectdiv_image}>
                <Image
                src='/subject.jpg'
                width='400'
                height='500'
                ></Image>
              </div>
              <div className={styles.subject_name}>
                <h1><b>Class 12 English Subject Notes</b></h1>
              </div>
              <div className={styles.subject_desc}>
                <p>Here are The Class 12 English Notes empower students to enhance language skills and literary appreciation, promoting effective communication and critical thinking.</p>
              </div>
            </div>
            </div>
    </div>
  )
}

export default website
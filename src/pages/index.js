import Main from 'next/document'
import React, { useEffect, useState } from 'react';
import styles from './notes.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Image from 'next/image';
import Nav from './nav.js'
import Footer from './footer.js'
import Class from './component/class.js'
import { siteConfig } from '@/config/siteConfig';
import Script from 'next/script'


const website = () => {
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
    <div>
      <Head>
     <title>MozeeNotes - Comprehensive Study Notes for NEB 12th Grade Students in Nepal | MozeeeNotes </title>
    <meta name="google-site-verification" content="hgKlR-gh1kqW6e6_8xl2kSzCsHtRMiGGrqAlQAHl1w4" />
    <link rel='icon' href='/ico.png'></link>
      <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
          />
      </Head>
      <Nav/>
      <br></br><br></br> 
    
        

<section class="bg-center bg-no-repeat bg-[url('https://www.phonexia.com/wp-content/uploads/top-machine-learning-conferences-2023.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Class 12 Management Subject Notes</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here are the lists of Class 12 Management Faculty Subject Notes which provide comprehensive coverage of advanced topics in computer science, equipping students with essential knowledge and skills.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <Link href="/subject" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Views Notes
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </Link>
            <Link href="/model" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                View Model Questions
            </Link>  
        </div>
    </div>
</section>
      <div className="bg-white p-8 rounded-lg shadow-md m-4 flex flex-col flex-wrap justify-around items-center">
        <h1 className="text-3xl font-bold mb-4 text-center">Study Hard!</h1>
        <p className="text-xl mb-4 text-center">Class 12th NEB Exam Started</p>
        <div className="text-4xl font-bold text-center">{daysLeft} days ago!</div>
      </div>
        {/* <div className={styles.subject} id='subject'>
            <a href='/computer'>
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
            </a>
            <a href='/account'>
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
            </a>
            <a href='/nepali'>
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
            </a>
            <a href='/social'>
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
            </a>
            <a href='/economics'>
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
            </a>
            <a href='/english'>
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
            </a>
        </div> */}
        <br></br>
        <Class/>
        <hr></hr>
        <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
                <a href="/about" class="flex items-center">
                    <img src="/logo.png" class="mr-3 h-8" alt="MozeeeNotes Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">{siteConfig.productName}</span>
                </a>
            </div>
            <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="/about" class="hover:underline">About</a>
                        </li>
                        <li>
                            <a href="/contact" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="https://facebook.com/" class="hover:underline ">Facebook</a>
                        </li>
                        <li>
                            <a href="https://instagram.com/" class="hover:underline">Instagram</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                    <ul class="text-gray-600 dark:text-gray-400">
                        <li class="mb-4">
                            <a href="#" class="hover:underline">Notes</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Subjects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">{siteConfig.productName}</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                <a href="https://facebook.com/" target='_blank' class="text-gray-500 hover:text-blue-500 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
                </a>
                <a href="https://instagram.com/" target='_blank' class="text-gray-500 hover:text-orange-500 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
                </a>
                <a href="https://twitter.com/" target='_blank' class="text-gray-500 hover:text-purple-500 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                </a>
                <a href="https://github.com/" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </a>
            </div>
        </div>
    </div>
        </footer>
        <br></br><br></br><br></br>
        <Footer/>
        <Script defer data-domain="mozeee.com" src="https://poopup.co/js/script.js" />
    </div>
  )
}

export default website

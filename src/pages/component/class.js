import { Main } from 'next/document'
import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/siteConfig';

function subject() {
  return (
    <div>
      <Head>
        <title>{siteConfig.productName} - Subject</title>
      </Head>
      <div class="classes flex justify-around flex-wrap">
        <div class="cluss" style={{margin : '1rem 0rem'}}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <img class="rounded-t-lg" src="/class_12.png" alt="" />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class 12 Computer Subject Notes</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the Class 12 Computer Subject Notes which provide comprehensive coverage of advanced topics in computer science, equipping students with essential knowledge and skills.</p>
              <Link href="/computer" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Notes
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
        <div class="cluss" style={{margin : '1rem 0rem'}}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <img class="rounded-t-lg" src="/account.png" alt="" />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class 12 Account Subject Notes</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the Class 12 Accounting Notes facilitate financial understanding, helping students grasp principles for effective record-keeping and business management.</p>
              <Link href="/account" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Watch Videos
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
        <div class="cluss" style={{margin : '1rem 0rem'}}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <img class="rounded-t-lg" src="/eng.png" alt="" />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class 12 English Subject Notes</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are The Class 12 English Notes empower students to enhance language skills and literary appreciation, promoting effective communication and critical thinking.</p>
              <Link href="/english" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Notes
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
        <div class="cluss" style={{margin : '1rem 0rem'}}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <img class="rounded-t-lg" src="/eco.png" alt="" />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class 12 Economics Subject Notes</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are The Class 12 Economics Notes which offer insights into economic principles, nurturing students' understanding of market dynamics and policy implications.</p>
              <Link href="/economics" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Notes
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
        <div class="cluss" style={{margin : '1rem 0rem'}}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <img class="rounded-t-lg" src="/social.png" alt="" />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class 12 Social Subject Notes</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are The Class 12 Social Notes which cover a range of topics, encouraging students to explore society's dynamics, history, and contemporary issues.</p>
              <Link href="/social" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Notes
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
        <div class="cluss" style={{margin : '1rem 0rem'}}>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link href="#">
              <img class="rounded-t-lg" src="/nepali.png" alt="" />
            </Link>
            <div class="p-5">
              <Link href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Class 12 Nepali Subject Notes</h5>
              </Link>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the notes for Class 12 Nepali students in mastering their language and literature, fostering proficiency in communication and literary analysis.</p>
              <Link href="/nepali" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                View Notes
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default subject

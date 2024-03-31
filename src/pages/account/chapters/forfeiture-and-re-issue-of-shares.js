import React from 'react'
import Head from 'next/head'
import { siteConfig } from '@/config/siteConfig'

function issue_cash() {
  return (
    
    <div class='container mx-auto px-5 py-5'>
        <Head>
            <title>{siteConfig.productName} - Forfeiture and Re-issue of Shares | Class 12 Account</title>
        </Head>
    <br></br><br></br><br></br>
        <div class='p-3'>
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <a href="/account" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Account</a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">forfeiture-and-re-issue-of-shares</span>
                </div>
              </li>
            </ol>
          </nav>
        </div><br></br>
        <div className='heaading_text'>
                <h1>Forfeiture and Re-issue of Shares - Class 12 Account</h1>
            </div>
            <br></br>
        <div class='pl-3 container mx-auto px-5' id='embeds'>
        <iframe src="https://drive.google.com/file/d/1eiahr1yDbnqEms-vNw-AJCrRXcs2mN1h/preview" width="100%" height="780"></iframe>
        </div>
        <br></br><br></br><br></br></div>
  )
}

export default issue_cash

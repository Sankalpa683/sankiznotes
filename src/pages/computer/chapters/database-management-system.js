import React from 'react'
import Wow from '../../nav.js'
import styles from '../chapters.module.css';
import Head from 'next/head.js';
import Link from 'next/link.js';
import Nav from '../../nav.js'
import Footer from '../../footer.js'

const helloworld = () => {
  return (
    <div>
      <Head><title>Database management System - Computer Note | SankNotes</title>
      </Head>
      <div className={styles.chapter} style={{ padding: '1.4rem 0.7rem', }}>
        <div className={styles.chapter_breadcrumbs}>
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li class="inline-flex items-center">
                <a href="/" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  {/* <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                  </svg> */}
                  Home
                </a>
              </li>
              <li>
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <a href="/computer" class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Computer</a>
                </div>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                  </svg>
                  <span class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">database-management-system</span>
                </div>
              </li>
            </ol>
          </nav>
        </div><br></br>
        <h1 class={styles.heading}>Database Management System - Class 12</h1>
        <br></br>
        <div className={styles.chapter_about} style={{ display: 'flex',  }}>
          <div className={styles.chapter_about_image}>
            <img src='/me.jpg' style={{ width: '40px', borderRadius: '2rem' }}></img>
          </div>
          <div className={styles.chapter_about_text}>
            <p style={{ marginLeft: '0.4rem', lineHeight: '30px', fontSize: '17px' }}>By - Sankalpa Dahal</p>
          </div>
        </div><br></br><hr></hr>
        <div className={styles.chapter_section}>
          <center><img src='/chapter1.png' style={{ width: '380px' }}></img></center>
          <div className={styles.chapter_title_texts}>
            <div className={styles.chapter_title}>
              <center><h1>Short Answer Questions</h1></center>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  1. What is a Database? List the major uses Database application System?
                </summary>
                <p>A database is a structured collection of data.
                <br></br><br></br>Major uses of database application systems include data storage, retrieval, and management for
                applications such as websites, customer relationship management (CRM), and inventory systems.
              </p>
                </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  2. Differentitate between Database and DBMS?
                </summary>
               <p> A database is a collection of data, while a Database Management System (DBMS) is software that manages and organizes
                that data, providing functionalities for storage, retrieval, and manipulation of data. The database is the
                container, and the DBMS is the software that interacts with the data within that container.
              </p>
               </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  3. Define DBMS. List out the objectives od DBMS?
                </summary>
                <p>DBMS, or Database Management System, is software that facilitates the creation, organization, and management of
                databases, allowing for efficient storage, retrieval, and manipulation of data.
              </p>
                </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  4. Give two advantages of using a database rather than a number of seperates files
                </summary>
                <p>
                Two advantages of using a database rather than a number of separate files are:
                <br></br><br></br>
                <b>1. Reduced data redundancy: </b>
                Databases are designed to store data in a structured and organized way, which helps to minimize data redundancy.
                   This means that each piece of data is stored only once, rather than being duplicated in multiple files. This reduces 
                   storage space requirements and ensures data consistency.
                <br></br><br></br>
                <b>2. Improved data integrity:: </b>
                Databases incorporate data integrity constraints, such as data types, primary keys, and foreign keys, to ensure the
                   accuracy and consistency of data. These constraints prevent invalid data from being entered into the database and
                    maintain relationships between different data items. This helps to protect data from corruption and errors.
                </p>
              </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  5. What are Domains and Tuples? What are the characteristics of a good data model?
                </summary>
                <p>
                Domains and Tuples in Databases are:
                <br></br><br></br>
                <b>Domain </b>
                A domain is a set of possible values that an attribute can hold. It defines the range of valid data for a particular 
                attribute. For instance, the domain of an attribute representing age could be all positive integers.
                <br></br>
                <b>Tuples </b>
                A tuple is a single row in a database table. It represents a collection of related data values, corresponding to the 
                attributes of the table. Each tuple represents a unique record or entity. For example, a tuple in a student table might 
                contain values for student ID, name, age, and department.
                <br></br><br></br>
                <b>Characteristics of a Good Data Model:</b>
                <br></br><br></br>
                <i>1. Accuracy </i>
                <br></br>
                <i>2. Simplicity</i>
                <br></br>
                <i>3. Efficiency</i>
                <br></br>
                <i>4. Flexibility</i>
                <br></br>
                <i>5. Scalability</i>
                <br></br>
                <i>6. Maintainability</i>
                </p>
                </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                 6. What is an E-R Diagram? Explain the advantages of the E-R diagram in system design 
                </summary>
               <p>
               An E-R diagram is a graphical representation of the relationships between entities in a database. It is a conceptual data
              model that depicts the structure and organization of data in a database. E-R diagrams are widely used in system design to 
              visualize and understand the relationships between entities and their attributes.
              <br></br><br></br>
                <b>Advantages of E-R Diagrams in System Design:</b>
                <br></br><br></br>
                <i>1. Clear Representation of Relationships </i>
                <br></br>
                <i>2. Enhance Communication and Collaboration</i>
                <br></br>
                <i>3. Identifying Data Requirements</i>
                <br></br>
                <i>4. Detecting Data Anomalies</i>
                <br></br>
                <i>5. Facilitating Database Design</i>
              </p>
               </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  7. What is normalization? Example 1NF, 2NF, 3NF.
                </summary>
                <p>Database normalization is a process of organizing data in a relational database to minimize redundancy and improve data integrity. 
                  It involves dividing a database into smaller, more manageable tables and establishing relationships between them. Normalization 
                  is achieved by following a set of guidelines or rules called normal forms. There are different levels of normalization, each with 
                  its own set of rules.
                  <br></br><br></br>
                  <b>First Normal Form (1NF):</b>
                  <br></br>
                  1NF is the basic level of normalization. It ensures that each table in the database has a primary key, which is a 
                  unique identifier for each record. Additionally, each attribute in a table must be atomic, meaning it cannot be 
                  divided into smaller meaningful parts.
                  <br></br><br></br>
                  <b>Second Normal Form (2NF):</b><br></br>
                  2NF builds on 1NF by eliminating redundant non-key attributes that depend only on a part of the primary key. In other
                   words, any non-key attribute must be fully dependent on the entire primary key, not just a portion of it.
                  <br></br><br></br>
                  <b>Third Normal Form (3NF):</b><br></br>
                  3NF eliminates transitive dependencies, which occur when non-key attributes depend on other non-key attributes. In 
                  other words, all non-key attributes must be directly dependent on the primary key, not indirectly through other 
                  non-key attributes.
                  <br></br>
                  
              </p>
                </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  8. Explain the benefits of a Centralized Database.
                </summary>
                <p >
                <b>Centralized databases offer several advantages over distributed or decentralized approaches::</b>
                <br></br><br></br>
                <i>1. Simplified Data Management </i>
                <br></br>
                <i>2. Data Integrity and Consistency</i>
                <br></br>
                <i>3. Improved Performance and Scalability</i>
                <br></br>
                <i>4. Reduced Data Redundancy</i>
                <br></br>
                <i>5. Enhanced Security</i>
                </p>
              </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  9. What is data security? How it can be implemented?
                </summary>
                <p>Data security refers to the practices and measures that protect data from unauthorized access, modification, or 
                  destruction. It encompasses a wide range of techniques and procedures designed to safeguard sensitive information 
                  from a variety of threats, including cyberattacks, human error, and hardware or software failures.
                  <br></br><br></br>
                  <b>Here are some of the key reasons why data security is important:</b>
                  <br></br><br></br>
                  <i>1. Data encryption </i>
                  <br></br>
                  <i>2. Vulnerability management</i>
                  <br></br>
                  <i>3. Security awareness training</i>
                  <br></br>
                  <i>4. Up-To Date Security Patches</i>
              </p>
                </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  10. State and describe different types of data integrity
                </summary>
                <br></br>
                  <b>Logical Data Integrity</b>
                  <br></br>
                  Ensures data accuracy and consistency by adhering to predefined rules and constraints.
                  <br></br><br></br>
                  <b>Physical  Data Integrity</b><br></br>
                  Protects data from physical damage or corruption caused by hardware failures, environmental 
                  factors, or human error.<br></br><br></br>
                  <b>Temporal Data Integrity</b><br></br>
                  Maintains the integrity of data over time, ensuring that data remains accurate and consistent 
                  as it is updated, modified, or archived.<br></br><br></br>
                  <b>Origin  Data Integrity</b><br></br>
                  Verifies the authenticity and provenance of data, ensuring that it comes from a trusted source
                  and has not been tampered with.<br></br><br></br>
                  <b>Completeness  Data Integrity</b><br></br>
                  Assures that all required data is present and accounted for, preventing data loss or
                  incompleteness.<br></br>
              </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  11. What is a Database? List out the advantages of Database Management System.
                </summary>
                <p>A database is a structured collection of data that is designed to be easily accessed, managed, and updated. Databases are used 
                  in a wide variety of applications, including e-commerce, banking, and customer relationship management (CRM).
                  <br></br><br></br>
                  <b>DBMSs provide a number of advantages, such as:</b>
                  <br></br><br></br>
                  <b>1. Reduced data redundancy: </b> <i>Data is stored only once in a database, which reduces the amount of storage space required
                    and helps to ensure data consistency. </i>
                  <br></br>
                  <b>2. Improved data integrity: </b><i>DBMSs enforce data integrity constraints, such as data types, primary keys, and foreign keys, to ensure the 
                    accuracy and consistency of data.</i>
                  <br></br>
                  <b>3. Improved data management: </b><i>DBMSs provide a number of tools and features that make it easier to manage data, such as data backup and recovery,
                     and data warehousing.</i>
                  <br></br>
                  <b>4. Improved data sharing: </b><i>DBMSs make it easier to share data between different applications.</i>
              </p>
                </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                 12. What is RDBMS? List out the function of RDBMS.
                </summary>
               <p> RDBMS stands for Relational Database Management System. It is a type of database management system that stores data
                 in tables and uses relationships between tables to organize data. RDBMSs are based on the relational model, which was 
                 developed by Edgar Codd in the 1970s.
                  <br></br><br></br>
                  <b>The main functions of an RDBMS are:</b>
                  <br></br><br></br>
                  <i>1. Data Security:  </i>
                  <br></br>
                  <i>2. Data Query Language (DQL): </i>
                  <br></br>
                  <i>3. Data Integrity: </i>
                  <br></br>
                  <i>4. Data Manipulation Language (DML): </i>
              </p>
               </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  13. Define the term "DDL" & "DML"
                </summary>
                <p>Data Definition Language Or DDL defines the structure of the database, including tables, columns, and relationships.
                <br></br><br></br>   
                Data Manipulation Language Or DML is used to insert, update, and delete data in the database
                </p>
                </details>
            </div>
            <div className={styles.chapter_paragraph}>
              <details >
                <summary class="font-semibold  bg-gray-200 rounded-md py-3 px-4">
                  14. Define the term "SQL" & "Data Security".
                </summary>
                <p >
                SQL stands for Structured Query Language. It is a programming language designed to manage data in relational databases. SQL allows
                 you to create, read, update, and delete data in a database.
                  <br></br><br></br>
                  Data security refers to the practices and measures that protect data from unauthorized access, modification, or 
                  destruction. which includes measures such as encryption, access control, and data backup.
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <div class="flex justify-around mx-auto">
          <div class="flex flex-row mx-auto">
            <button type="button" class="bg-gray-800 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3">
              <div class="flex flex-row align-top">
                <svg class="w-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
                </svg>
                <p class="ml-2">Prev</p>
              </div>
            </button>
            <button type="button" class="bg-gray-800 text-white rounded-r-md py-2 border-l border-gray-200 hover:bg-red-700 hover:text-white px-3">
              <div class="flex flex-row align-middle">
                <span class="mr-2">Next </span>
                <svg class="w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
      <footer class="p-4 bg-white sm:p-6 dark:bg-gray-800 ">
        <div class="mx-auto max-w-screen-xl">
          <div class="md:flex md:justify-between">
            <div class="mb-6 md:mb-0">
              <a href="/about" class="flex items-center">
                <img src="https://cdn-icons-png.flaticon.com/512/4021/4021693.png" class="mr-3 h-8" alt="FlowBite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SankNotes</span>
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
                    <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Facebook</a>
                  </li>
                  <li>
                    <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Github</a>
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
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">SankNotes™</a>. All Rights Reserved.
            </span>
            <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" /></svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" /></svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
              </a>
              <a href="#" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
      <br></br><br></br><br></br>
      <Footer/>
    </div>
  )
}

export default helloworld
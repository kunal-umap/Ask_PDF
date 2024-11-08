// import MaxWidthWraper from "@/components/MaxWidthWraper";
// import { buttonVariants } from "@/components/ui/button";
// import { ArrowRight } from 'lucide-react'
// import Image from "next/image";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <>
//       <MaxWidthWraper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center">
//         <div className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50' >
//           <p className='text-sm font-semibold text-gray-700'>
//             Quill is now public!
//           </p>
//         </div>
//         <h1 className='max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl'>
//           Chat with your{' '}
//           <span className='text-blue-600'>documents</span>{' '}
//           in seconds.
//         </h1>
//         <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
//           Quill allows you to have conversations with any
//           PDF document. Simply upload your file and start
//           asking questions right away.
//         </p>
//         <Link
//           className={buttonVariants({
//             size: 'lg',
//             className: 'mt-5',
//           })}
//           href='/dashboard'
//           target='_blank'>
//           Get started{' '}
//           <ArrowRight className='ml-2 h-5 w-5' />
//         </Link>
//       </MaxWidthWraper>

//       <div>
//         <div className='relative isolate'>
//           <div
//             aria-hidden='true'
//             className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
//             <div
//               style={{
//                 clipPath:
//                   'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//               }}
//               className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
//             />
//           </div>

//           <div>
//             <div className='mx-auto max-w-6xl px-6 lg:px-8'>
//               <div className='mt-16 flow-root sm:mt-24'>
//                 <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
//                   <Image
//                     src='/dashboard-preview.jpg'
//                     alt='product preview'
//                     width={1364}
//                     height={866}
//                     quality={100}
//                     className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div
//             aria-hidden='true'
//             className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
//             <div
//               style={{
//                 clipPath:
//                   'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
//               }}
//               className='relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]'
//             />
//           </div>
//         </div>
//       </div>

//       <div className='mx-auto mb-32 mt-32 max-w-5xl sm:mt-56'>
//         <div className='mb-12 px-6 lg:px-8'>
//           <div className='mx-auto max-w-2xl sm:text-center'>
//             <h2 className='mt-2 font-bold text-4xl text-gray-900 sm:text-5xl'>
//               Start chatting in minutes
//             </h2>
//             <p className='mt-4 text-lg text-gray-600'>
//               Chatting to your PDF files has never been
//               easier than with Quill.
//             </p>
//           </div>
//         </div>

//         <ol className='my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0'>
//           <li className='md:flex-1'>
//             <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
//               <span className='text-sm font-medium text-blue-600'>
//                 Step 1
//               </span>
//               <span className='text-xl font-semibold'>
//                 Sign up for an account
//               </span>
//               <span className='mt-2 text-zinc-700'>
//                 Either starting out with a free plan or
//                 choose our{' '}
//                 <Link
//                   href='/pricing'
//                   className='text-blue-700 underline underline-offset-2'>
//                   pro plan
//                 </Link>
//                 .
//               </span>
//             </div>
//           </li>
//           <li className='md:flex-1'>
//             <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
//               <span className='text-sm font-medium text-blue-600'>
//                 Step 2
//               </span>
//               <span className='text-xl font-semibold'>
//                 Upload your PDF file
//               </span>
//               <span className='mt-2 text-zinc-700'>
//                 We&apos;ll process your file and make it
//                 ready for you to chat with.
//               </span>
//             </div>
//           </li>
//           <li className='md:flex-1'>
//             <div className='flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
//               <span className='text-sm font-medium text-blue-600'>
//                 Step 3
//               </span>
//               <span className='text-xl font-semibold'>
//                 Start asking questions
//               </span>
//               <span className='mt-2 text-zinc-700'>
//                 It&apos;s that simple. Try out Quill today -
//                 it really takes less than a minute.
//               </span>
//             </div>
//           </li>
//         </ol>

//         <div className='mx-auto max-w-6xl px-6 lg:px-8'>
//           <div className='mt-16 flow-root sm:mt-24'>
//             <div className='-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4'>
//               <Image
//                 src='/file-upload-preview.jpg'
//                 alt='uploading preview'
//                 width={1419}
//                 height={732}
//                 quality={100}
//                 className='rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10'
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, FileText, Upload, MessageSquare, Zap, Clock, Database, Play } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import MaxWidthWraper from "@/components/MaxWidthWraper";
import { buttonVariants } from '@/components/ui/button';

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeStep, setActiveStep] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const features = [
    { icon: Zap, title: 'Instant Answers', description: 'Get immediate responses to your questions about any document.' },
    { icon: Clock, title: 'Time-Saving', description: 'Reduce research time by up to 70% with our advanced AI technology.' },
    { icon: Database, title: 'Comprehensive Analysis', description: 'Analyze multiple documents simultaneously for deeper insights.' },
  ];
  const steps = [
    { icon: FileText, title: 'Sign Up', description: 'Create your account in seconds' },
    { icon: Upload, title: 'Upload PDF', description: 'Easily upload any PDF document' },
    { icon: MessageSquare, title: 'Start Chatting', description: 'Ask questions and get instant answers' },
  ];

  return (
    <>
      <MaxWidthWraper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50'
        >
          <p className='text-sm font-semibold text-gray-700'>
            Quill is now public!
          </p>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='max-w-4xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center bg-gradient-to-r from-gray-900 via-purple-900 to-violet-600 text-transparent bg-clip-text'
        >
          Chat with your documents in seconds.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='mt-5 max-w-prose text-base sm:text-lg text-center text-gray-600'
        >
          Quill allows you to have conversations with any
          PDF document. Simply upload your file and start
          asking questions right away.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            className={buttonVariants({
              size: 'lg',
              className: 'mt-5',
            })}
            href='/dashboard'
            target='_blank'
          >
            Get started{' '}
            <ArrowRight className='ml-2 h-5 w-5' />
          </Link>
        </motion.div>
      </MaxWidthWraper>

      <div className="bg-gradient-to-b from-white to-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Dashboard</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A smarter way to analyze your documents
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Experience the power of AI-driven document analysis with our intuitive dashboard.
            </p>
          </div>

          <div className="mt-16">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setActiveFeature(index)}
                >
                  <dt>
                    <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.title}</p>
                  </dt>
                  <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <div className="mt-16">
            <motion.div
              className="relative bg-white shadow-xl rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-50"></div>
              <div className="relative p-6 sm:p-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                  <div className="lg:col-span-1">
                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">Interactive Preview</h3>
                    <p className="mt-4 text-lg text-indigo-100">
                      See how Quill transforms your document analysis experience. Hover over or tap the features to see them in action.
                    </p>
                  </div>
                  <div className="mt-8 lg:mt-0 lg:col-span-2">
                    <div className="rounded-lg bg-white shadow-lg overflow-hidden">
                      <div className="px-4 py-5 sm:p-6">
                        <div className="h-48 sm:h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                          <p className="text-xl sm:text-2xl font-semibold text-gray-600 text-center px-4">
                            {activeFeature === 0 && "Instant Answers Visualization"}
                            {activeFeature === 1 && "Time-Saving Analytics"}
                            {activeFeature === 2 && "Comprehensive Analysis Dashboard"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className='mx-auto mb-32 mt-32 max-w-7xl px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className='text-center'
        >
          <motion.h2
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-3xl font-extrabold text-gray-900 sm:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600'
          >
            Start chatting in minutes
          </motion.h2>
          <motion.p
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='mt-4 text-xl text-gray-600 max-w-2xl mx-auto'
          >
            Quill makes chatting with your PDF files effortless and intuitive.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='mt-16 flex flex-col lg:flex-row justify-between items-center gap-12'
        >
          <div className='w-full lg:w-1/2 space-y-8'>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className='relative'
                onHoverStart={() => setActiveStep(index)}
                onHoverEnd={() => setActiveStep(null)}
                whileHover={{ scale: 1.05 }}
              >
                <AnimatePresence>
                  {activeStep === index && (
                    <motion.div
                      className='absolute -inset-4 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg'
                      layoutId='stepHighlight'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    />
                  )}
                </AnimatePresence>
                <div className='relative flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md'>
                  <step.icon className='w-8 h-8 text-indigo-600' />
                  <div>
                    <h3 className='text-lg font-semibold text-gray-900'>{step.title}</h3>
                    <p className='text-gray-600'>{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className='w-full lg:w-1/2'>
            <motion.div
              className='relative rounded-lg overflow-hidden shadow-xl'
              whileHover={{ scale: 1.05 }}
            >
              <Image
                src='/file-upload-preview.jpg'
                alt='Quill in action'
                width={700}
                height={400}
                layout='responsive'
                className='rounded-lg'
              />
              <motion.div
                className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50'
                initial={{ opacity: 0 }}
                animate={{ opacity: isVideoPlaying ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsVideoPlaying(true)}
                  className='bg-white text-indigo-600 rounded-full p-4 shadow-lg flex items-center space-x-2'
                >
                  <Play className='w-6 h-6' />
                  <span className='font-semibold'>Watch Demo</span>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='mt-16 text-center'
        >
          <a
            href='#'
            className='inline-flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-500 transition-colors'
          >
            <span>Get started now</span>
            <ArrowRight className='w-5 h-5' />
          </a>
        </motion.div>
      </div>
    </>
  );
}
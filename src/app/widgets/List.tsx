import React from 'react'
import IconBag from '../icons/IconBag'
import Chip from './Chip'

function List() {
  return (
    <>
    <div className="grid grid-cols-[0.25fr_4fr] gap-2">
        <IconBag className="w-6 h-5 -fill-tertiary-color mt-1"/>
        <div>
          <h2 className="text-lg font-semibold">Frontend Web Developer at PT. Telkom Indonesia</h2>
          <p className="text-sm text-gray-400">2022 - Present</p>
          <p className="text-sm text-gray-300">I&apos;ve honed my skills in building user-centric web applications and dashboards using ReactJS and NextJS. With a focus on code reusability and efficient workflows, I&apos;ve contributed to five web app projects. My commitment to delivering exceptional user experiences drives my design choices, backed by unit testing and real-time data updates using Firebase Cloud Messaging. </p>
        </div>
    </div>
    <div className="flex gap-2 mt-3">
      <Chip>Typescript</Chip>
      <Chip>React</Chip>
      <Chip>Next</Chip>
      <Chip>Tailwind</Chip>
      <Chip>Vite</Chip>
    </div>
    </>
  )
}

export default List
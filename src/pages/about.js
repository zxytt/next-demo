import React from 'react'

export default function About({ data }) {
  return (
    <ul>
      {
        data.map(item => <li key={item.id}>{item.name}</li>)
      }
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://directus-t.itcast.cn/items/cars')
  const { data } = await res.json()
  return {
    props: {
      data
    }
  }
}
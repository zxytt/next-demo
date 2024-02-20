import React from 'react'

export default function About({ data }) {
  return (
    <ul>
      {
        data.map(item => <li key={item.id}>{item.title}</li>)
      }
    </ul>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://39.101.67.62:8055/items/news')
  const { data } = await res.json()
  return {
    props: {
      data
    }
  }
}
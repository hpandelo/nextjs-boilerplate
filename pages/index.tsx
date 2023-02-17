import { Container } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS 13 Boilerplate</title>
      </Head>

      <Container>
        <h1>NextJS 13 Boilerplate</h1>
      </Container>
      <h3>
        <Link href='/#'>It Works!</Link>
      </h3>
    </div>
  )
}

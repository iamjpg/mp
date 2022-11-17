import Head from 'next/head';
import { Container } from '@mantine/core';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mini Palomar</title>
        <meta
          name='description'
          content='Retrieval of JSON data with display.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container size={500}>
        <h1>Mini Palomar</h1>
        <main>Content here...</main>
      </Container>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/gyermich/6ca0c6601932bae50d3c6eb75481d302/raw/416ab16e087fbc14c0a517aa8da7a9873c38dd1e/companies.json'
  );

  const companies = await res.json();

  console.log(companies);

  return {
    props: {
      companies,
    },
  };
};

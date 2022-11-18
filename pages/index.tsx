import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Container, Skeleton } from '@mantine/core';
import { Company } from '../types/company';
import Companies from '../components/companies';

export default function Home() {
  const stateCompanies: Array<Company> = [];
  const [companies, setCompanies] = useState(stateCompanies);

  const fetchCompanyData = async () => {
    const res = await fetch(
      'https://gist.githubusercontent.com/gyermich/6ca0c6601932bae50d3c6eb75481d302/raw/416ab16e087fbc14c0a517aa8da7a9873c38dd1e/companies.json'
    );

    const json: Array<Company> = await res.json();

    // Alphabetize array by company name.
    json.sort((a, b) => a.company_name.localeCompare(b.company_name));

    setCompanies(json);
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

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
        {companies.length > 0 ? (
          <main>
            <Companies companies={companies} />
          </main>
        ) : (
          <>
            <Skeleton width={500} height={232} mt={10} />
            <Skeleton width={500} height={232} mt={10} />
            <Skeleton width={500} height={232} mt={10} />
            <Skeleton width={500} height={232} mt={10} />
            <Skeleton width={500} height={232} mt={10} />
          </>
        )}
      </Container>
    </>
  );
}

import { useEffect, useState } from 'react';
import { Company } from '../types/company';
import { formatNumber } from '../utils';
import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react';
import {
  Button,
  Card,
  Collapse,
  Divider,
  Flex,
  TextInput,
  SimpleGrid,
  Text,
} from '@mantine/core';
import styles from '../styles/Companies.module.css';

const { moreInfo } = styles;

const Companies = ({ companies }: { companies: Array<Company> }) => {
  const stateArray: Array<number> = [];
  const [defaultOpened, setDefaultOpened] = useState(false);
  const [opened, setOpened] = useState(stateArray);

  const handleOpenedArray = (index: number) => {
    // Clone array.
    const a = [...opened];
    if (a.includes(index)) {
      // Remove
      const arrIndex = a.indexOf(index);
      a.splice(arrIndex, 1);
    } else {
      // Add
      a.push(index);
    }

    setOpened(a);
  };

  const filterCompaniesByNam = (event: any) => {
    const elems: NodeListOf<Element> =
      document.querySelectorAll('.company-card');

    const { value } = event.currentTarget;

    Array.from(elems).forEach((elem: any) => {
      const name = elem.dataset.companyName;
      if (!name?.includes(value.toUpperCase())) {
        elem.style.display = 'none';
      } else {
        elem.style.display = 'block';
      }
    });
  };

  useEffect(() => {
    if (companies.length > 0) {
      setDefaultOpened(true);
    }
  }, [companies]);

  return (
    <>
      <TextInput
        placeholder='Filter Results By Name'
        onKeyUp={filterCompaniesByNam}
      />
      {companies.map((company: Company, index: number) => {
        const {
          company_name,
          company_state,
          employee_count,
          plan_year,
          premium_sum,
          participants_sum,
          broker_commission_sum,
        } = company;

        return (
          <Card
            className='company-card'
            data-testid='company-node'
            data-company-name={company_name.toUpperCase()}
            shadow='sm'
            p='lg'
            radius='md'
            mt={10}
            key={`${company_name}-${index}`}
            withBorder
          >
            <Text fw={700} my={16} ta='center' data-testid='company-name'>
              {company_name}
            </Text>
            <SimpleGrid cols={3} verticalSpacing='xs'>
              <Text fw={500} ta='center'>
                State
              </Text>
              <Text fw={500} ta='center'>
                Employees
              </Text>
              <Text fw={500} ta='center'>
                Year
              </Text>
              <Text ta='center' fz='sm'>
                {company_state}
              </Text>
              <Text ta='center' fz='sm'>
                {employee_count}
              </Text>
              <Text ta='center' fz='sm'>
                {plan_year}
              </Text>
            </SimpleGrid>
            <Divider my='lg' />
            <Flex justify='center' align='center'>
              <Button
                onClick={() => {
                  handleOpenedArray(index);
                }}
                variant='subtle'
                rightIcon={
                  opened.includes(index) ? (
                    <ArrowCircleUp size={22} />
                  ) : (
                    <ArrowCircleDown size={22} />
                  )
                }
              >
                {opened.includes(index) ? 'Show Less' : 'Show More'}
              </Button>
            </Flex>
            <Collapse in={opened.includes(index)}>
              {defaultOpened && (
                <div className={moreInfo}>
                  <Text fz='sm'>
                    <strong>Premium:</strong> {formatNumber(premium_sum)}
                  </Text>
                  <Text fz='sm'>
                    <strong>Participants:</strong> {participants_sum}
                  </Text>
                  <Text fz='sm'>
                    <strong>Broker Commissions:</strong>{' '}
                    {formatNumber(broker_commission_sum)}
                  </Text>
                </div>
              )}
            </Collapse>
          </Card>
        );
      })}
    </>
  );
};

export default Companies;

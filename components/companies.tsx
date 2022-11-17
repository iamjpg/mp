import { Company } from '../types/company';
import { formatNumber } from '../utils';
import {
  Button,
  Card,
  Collapse,
  Divider,
  Flex,
  SimpleGrid,
  Text,
} from '@mantine/core';
import styles from '../styles/Companies.module.css';

const { moreInfo } = styles;

const Companies = ({ companies }: { companies: Array<Company> }) => {
  return (
    <>
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
          <Card shadow='sm' p='lg' radius='md' mt={10} withBorder>
            <Text fw={700} my={16} ta='center'>
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
              <Button variant='subtle'>Show More</Button>
            </Flex>
            <Collapse in={true}>
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
            </Collapse>
          </Card>
        );
      })}
    </>
  );
};

export default Companies;

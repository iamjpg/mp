import { Company } from '../types/company';
import { Card, Text } from '@mantine/core';

const Companies = ({ companies }: { companies: Array<Company> }) => {
  return (
    <>
      {companies.map((company: Company, index: number) => {
        const { company_name } = company;

        return (
          <Card shadow='sm' p='lg' radius='md' mt={10} withBorder>
            <Text fw={700} my={16} ta='center'>
              {company_name}
            </Text>
          </Card>
        );
      })}
    </>
  );
};

export default Companies;

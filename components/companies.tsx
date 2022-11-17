import { Company } from '../types/company';
import { Card } from '@mantine/core';

const Companies = ({ companies }: { companies: Array<Company> }) => {
  console.log(companies);
  return (
    <>
      {companies.map((company: Company, index: number) => {
        return (
          <Card shadow='sm' p='lg' radius='md' mt={10} withBorder>
            I'm card # {index}
          </Card>
        );
      })}
    </>
  );
};

export default Companies;

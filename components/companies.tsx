import { Company } from '../types/company';

const Companies = ({ data }: { data: Array<Company> }) => {
  console.log(data);
  return <>Hello from companies component.</>;
};

export default Companies;

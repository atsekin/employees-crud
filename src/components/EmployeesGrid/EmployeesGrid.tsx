import { Grid } from '@mui/material';

import { Employee } from '../../types/employees';

import { EmployeeCard } from '../EmployeeCard/EmployeeCard';

type CardsGridProps = {
  cards: Employee[];
}

const CardsGrid = ({
  cards,
}: CardsGridProps) => {
  return (
    <Grid container columns={3} columnGap={4.5} rowGap={6}>
      {cards.map((card) => (
        <Grid item key={card.id}>
          <EmployeeCard
            id={card.id}
            name={card.name}
            status={card.status}
            img={card.img}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardsGrid;

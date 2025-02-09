import { Grid } from '@mui/material';

import { Employee } from '../../types/employees';

import { EmployeeCard } from '../EmployeeCard/EmployeeCard.tsx';

type CardsGridProps = {
  cards: Employee[];
}

const CardsGrid = ({
  cards,
}: CardsGridProps) => {
  return (
    <Grid container spacing={2} columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}>
      {cards.map((card) => (
        <Grid item xs={1} key={card.id}>
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

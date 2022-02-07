import { Container, Button } from "@mui/material";
import Balance from "../Balance/balance";
import s from "./portfolio.module.scss";
import ListOfCoins from "../ListOfCoins/ListOfCoins";
const Portfolio = () => {
  return (
    <section>
      <Container
        className={s.header}
        sx={{
          bgcolor: "#e2e9eb",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Balance></Balance>
        <Button variant="contained" size="large">
          Add new coin
        </Button>
      </Container>
      <ListOfCoins></ListOfCoins>
    </section>
  );
};

export default Portfolio;

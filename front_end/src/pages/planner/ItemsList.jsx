import { List, ListItem, ListIcon } from "@chakra-ui/react";

const IncomeList = ({ itemsInput }) => {
  return (
    <List spacing={3}>
      {itemsInput.map((input) =>
        input.type ? (
          <ListItem>
            <ListIcon color="peachpuff" />
            {`Type: ${input.type}, Name: ${input.name}, Amount: ${input.amount}, Importance: ${input.importance}`}
          </ListItem>
        ) : (
          <ListItem>
            <ListIcon color="peachpuff" />
            {`Source: ${input.source}, Amount: ${input.amount}`}
          </ListItem>
        )
      )}
    </List>
  );
};

export default IncomeList;

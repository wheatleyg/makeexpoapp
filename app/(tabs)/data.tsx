import * as React from "react";
import { useWindowDimensions } from "react-native";
import { DataTable } from "react-native-paper";

const MyComponent = () => {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0],
  );
  const { width } = useWindowDimensions();
  const hideVitC = width < 800;
  const hideCalcium = width < 700;
  const hideIron = width < 600;
  const hideProtein = width < 500;

  const [items] = React.useState([
    {
      key: 1,
      name: "Cupcake",
      calories: 356,
      fat: 16,
      carbs: 24,
      protein: 4,
      iron: 2,
      calcium: 10,
      vitC: 5,
    },
    {
      key: 2,
      name: "Eclair",
      calories: 262,
      fat: 16,
      carbs: 23,
      protein: 6,
      iron: 22,
      calcium: 15,
      vitC: 10,
    },
    {
      key: 3,
      name: "Frozen yogurt",
      calories: 159,
      fat: 6,
      carbs: 20,
      protein: 4,
      iron: 1,
      calcium: 5,
      vitC: 2,
    },
    {
      key: 4,
      name: "Gingerbread",
      calories: 305,
      fat: 3.7,
      carbs: 67,
      protein: 4,
      iron: 8,
      calcium: 20,
      vitC: 0,
    },
  ]);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
        <DataTable.Title numeric>Carbs</DataTable.Title>
        {!hideProtein && <DataTable.Title numeric>Protein</DataTable.Title>}
        {!hideIron && <DataTable.Title numeric>Iron</DataTable.Title>}
        {!hideCalcium && <DataTable.Title numeric>Calcium</DataTable.Title>}
        {!hideVitC && <DataTable.Title numeric>Vitamin C</DataTable.Title>}
      </DataTable.Header>

      {items.slice(from, to).map((item) => (
        <DataTable.Row key={item.key}>
          <DataTable.Cell>{item.name}</DataTable.Cell>
          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
          <DataTable.Cell numeric>{item.carbs}</DataTable.Cell>
          {!hideProtein && (
            <DataTable.Cell numeric>{item.protein}</DataTable.Cell>
          )}
          {!hideIron && <DataTable.Cell numeric>{item.iron}</DataTable.Cell>}
          {!hideCalcium && (
            <DataTable.Cell numeric>{item.calcium}</DataTable.Cell>
          )}
          {!hideVitC && <DataTable.Cell numeric>{item.vitC}</DataTable.Cell>}
        </DataTable.Row>
      ))}

      <DataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={"Rows per page"}
      />
    </DataTable>
  );
};

export default MyComponent;

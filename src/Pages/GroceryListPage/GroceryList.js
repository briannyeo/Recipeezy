import "./GroceryList.css";
import { useOutletContext } from "react-router-dom";

export default function GroceryList() {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();
  console.log(plannedRecipes);

  // const sortedData = {};
  // const sortData = (data) => {
  //   plannedRecipesData.map(el=> {
  //    el.ingredients.map(el=> if (sortedData.el), add on whatever , else sortedData.el.measurements = { })
  // });
  // };
  // Sorted Data ==> {
  // {scallions: {measurements: [{bunch: 2}, {ounce: 3}], recipes: ["burntscallion fish", "grilledFIhs"]}},
  // {butter: {tablespoon: 8}}}
  //ingredient = []

  return (
    <table>
      <tr>
        <th>Ingredients</th>
      </tr>

      {plannedRecipes.map((el) =>
        el.ingredientLines.map((e) => (
          <tr>
            <td>{e}</td>
          </tr>
        ))
      )}
    </table>
  );
}

// const covertSetsToData = (sets) => {
//   const transformed = {
//     label: [],
//     sets: [],
//   };
//   sets.forEach(function (e) {
//     transformed.label.push(e.code);
//     transformed.sets.push(e.code);
//   });

//   return transformed; // data
// };

// import * as React from "react";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { useOutletContext } from "react-router-dom";

// const columns = [
//   { id: "name", label: "Name", minWidth: 170 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
//   {
//     id: "population",
//     label: "Population",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "size",
//     label: "Size\u00a0(km\u00b2)",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "density",
//     label: "Density",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
// ];

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

// const rows = [
//   createData("India", "IN", 1324171354, 3287263),
//   createData("China", "CN", 1403500365, 9596961),
//   createData("Italy", "IT", 60483973, 301340),
//   createData("United States", "US", 327167434, 9833520),
//   createData("Canada", "CA", 37602103, 9984670),
//   createData("Australia", "AU", 25475400, 7692024),
//   createData("Germany", "DE", 83019200, 357578),
//   createData("Ireland", "IE", 4857000, 70273),
//   createData("Mexico", "MX", 126577691, 1972550),
//   createData("Japan", "JP", 126317000, 377973),
//   createData("France", "FR", 67022000, 640679),
//   createData("United Kingdom", "GB", 67545757, 242495),
//   createData("Russia", "RU", 146793744, 17098246),
//   createData("Nigeria", "NG", 200962417, 923768),
//   createData("Brazil", "BR", 210147125, 8515767),
// ];

// export default function GroceryList() {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(10);

//   const [plannedRecipes, setPlannedRecipes] = useOutletContext();

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };

//   return (
//     <Paper sx={{ width: "100%", overflow: "hidden" }}>
//       <TableContainer sx={{ maxHeight: 440 }}>
//         <Table stickyHeader aria-label="sticky table">
//           <TableHead>
//             <TableRow>
//               {columns.map((column) => (
//                 <TableCell
//                   key={column.id}
//                   align={column.align}
//                   style={{ minWidth: column.minWidth }}
//                 >
//                   {column.label}
//                 </TableCell>
//               ))}
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows
//               .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//               .map((row) => {
//                 return (
//                   <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
//                     {columns.map((column) => {
//                       const value = row[column.id];
//                       return (
//                         <TableCell key={column.id} align={column.align}>
//                           {column.format && typeof value === "number"
//                             ? column.format(value)
//                             : value}
//                         </TableCell>
//                       );
//                     })}
//                   </TableRow>
//                 );
//               })}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <TablePagination
//         rowsPerPageOptions={[10, 25, 100]}
//         component="div"
//         count={rows.length}
//         rowsPerPage={rowsPerPage}
//         page={page}
//         onPageChange={handleChangePage}
//         onRowsPerPageChange={handleChangeRowsPerPage}
//       />
//     </Paper>
//   );
// }

// {
//   calories: 1896.422150240477,
//   carbs: 156.5229500255765,
//   fats: 128.82823320997989,
//   id: "weak-key-41",
//   ingredientLines: (10)[
//     ("1/2 to 2 fish heads, depending on size, about 5 pounds total",
//     "2 tablespoons vegetable oil",
//     "1/4 cup red or green thai curry paste",
//     "3 tablespoons fish sauce or anchovy sauce",
//     "1 tablespoon sugar",
//     "1 can coconut milk, about 12 ounces",
//     "3 medium size asian eggplants, cut int 1 inch rounds",
//     "Handful of bird's eye chilies",
//     "1/2 cup thai basil leaves",
//     "Juice of 3 limes")
//   ],
//   ingredients: (10)[
//     ("fish",
//     "vegetable oil",
//     "curry paste",
//     "fish sauce",
//     "sugar",
//     "coconut milk",
//     "eggplants",
//     "chilies",
//     "thai basil",
//     "limes")
//   ],
//   instructions:
//     "http://www.seriouseats.com/recipes/2011/04/fish-head-curry-recipe.html",
//   measure: (10)[
//     ("<unit>",
//     "tablespoon",
//     "cup",
//     "tablespoon",
//     "tablespoon",
//     "can",
//     "<unit>",
//     "handful",
//     "cup",
//     "<unit>")
//   ],
//   protein: 72.89773412069614,
//   quantity: (10)[(1.25, 2, 0.25, 3, 1, 1, 3, 1, 0.5, 3)],
//   title: "Fish Head Curry",
//   url: "https://www.edamam.com/web-img/453/45377df0aa09dfc2b19bdaad0dda0683.jpg",
// },

// const plannedRecipesData = [
//   {
//     calories: 1322.2806752000001,
//     carbs: 16.65656,
//     fats: 100.28143028999997,
//     id: "weak-key-40",
//     ingredientLines: (3)[
//       ("2 bunches scallions", "8 tbsp. butter", "2 8-oz. fish filets")
//     ],
//     ingredients: (3)[("scallions", "butter", "fish filets")],
//     instructions: "http://www.saveur.com/article/Recipes/Burnt-Scallion-Fish",
//     measure: (3)[("bunch", "tablespoon", "ounce")],
//     protein: 96.182747896,
//     quantity: (3)[(2, 8, 16)],
//     title: "Burnt-Scallion Fish",
//     url: "https://www.edamam.com/web-img/a96/a967fbe797803dbe8418a668cf304b53.jpg",
//   },
//   {
//     calories: 1896.422150240477,
//     carbs: 156.5229500255765,
//     fats: 128.82823320997989,
//     id: "weak-key-41",
//     ingredientLines: (10)[
//       ("1/2 to 2 fish heads, depending on size, about 5 pounds total",
//       "2 tablespoons vegetable oil",
//       "1/4 cup red or green thai curry paste",
//       "3 tablespoons fish sauce or anchovy sauce",
//       "1 tablespoon sugar",
//       "1 can coconut milk, about 12 ounces",
//       "3 medium size asian eggplants, cut int 1 inch rounds",
//       "Handful of bird's eye chilies",
//       "1/2 cup thai basil leaves",
//       "Juice of 3 limes")
//     ],
//     ingredients: (10)[
//       ("fish",
//       "vegetable oil",
//       "curry paste",
//       "fish sauce",
//       "sugar",
//       "coconut milk",
//       "eggplants",
//       "chilies",
//       "thai basil",
//       "limes")
//     ],
//     instructions:
//       "http://www.seriouseats.com/recipes/2011/04/fish-head-curry-recipe.html",
//     measure: (10)[
//       ("<unit>",
//       "tablespoon",
//       "cup",
//       "tablespoon",
//       "tablespoon",
//       "can",
//       "<unit>",
//       "handful",
//       "cup",
//       "<unit>")
//     ],
//     protein: 72.89773412069614,
//     quantity: (10)[(1.25, 2, 0.25, 3, 1, 1, 3, 1, 0.5, 3)],
//     title: "Fish Head Curry",
//     url: "https://www.edamam.com/web-img/453/45377df0aa09dfc2b19bdaad0dda0683.jpg",
//   },
// ];

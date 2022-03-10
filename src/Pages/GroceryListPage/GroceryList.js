import "./GroceryList.css";
import { useOutletContext } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";

export default function GroceryList() {
  const [plannedRecipes, setPlannedRecipes] = useOutletContext();

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

  // console.log(plannedRecipes);

  return (
    <>
      {plannedRecipes.length !== 0 ? (
        <Table className="tablelist" striped bordered hover size="sm">
          <thead>
            <tr className="tableheader">
              <th
                style={{ fontFamily: "Raleway, sans-serif", color: "black" }}
                scope="col"
              >
                #
              </th>
              <th
                style={{
                  fontFamily: "Raleway, sans-serif",
                  color: "black",
                }}
                scope="col"
              >
                INGREDIENTS
              </th>
            </tr>
          </thead>
          <tbody>
            {plannedRecipes.map((el) =>
              el.ingredientLines.map((e, index) => (
                <tr>
                  <th key={index} scope="row">
                    {index + 1}
                  </th>
                  <td>{e}</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      ) : (
        <div></div>
      )}
    </>
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

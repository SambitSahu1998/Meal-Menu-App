import { Text, View, StyleSheet } from "react-native";
import { useContext } from "react";
import MealsList from "../components/MealsList/MealList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorites-context";

function FavoriteScreen() {
  const favoriteMealsCtx = useContext(FavoriteContext);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have No Favourite Meal Yet.</Text>
      </View>
    );
  }

  return <MealsList items={favoriteMeals} />;
}
export default FavoriteScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});

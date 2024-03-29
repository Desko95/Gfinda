import { Image, StyleSheet, Text, View, FlatList } from "react-native";
import Colors from "@/src/constants/Colors";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

const product = products[1];



export default function HomeScreen() {
  return (
    <FlatList
      data={products}
      renderItem={( { item } ) => <ProductListItem product={item} /> }
      numColumns={2}
      contentContainerStyle={{ gap:10, padding:10 }}
      columnWrapperStyle={{ gap:10 }}
    />
  );
}















const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    aspectRatio: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});



// const ProductListItem = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={{ uri: product.image }} style={styles.image} />

//       <Text style={styles.title}>Home</Text>
//     </View>
//   );
// };
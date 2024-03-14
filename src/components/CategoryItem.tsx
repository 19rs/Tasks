import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet, Text } from "react-native";
import { Category } from "../types/Task";

interface Props {
    category: Category;
    handleSelectCategory: (value: string) => void;
    selectedCategory: string;
}

const CategoryItem = ({ category, handleSelectCategory, selectedCategory}: Props) => {
    const styles = StyleSheet.create({
        categoryItem: {
            backgroundColor: category.color
        }
    });

    return (
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => {
            handleSelectCategory(selectedCategory)}}
        >
          <Text>{ category.label }</Text>
        </TouchableOpacity>
    );
};


export default CategoryItem;
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
            backgroundColor: category.color,
            paddingHorizontal: 10,
            paddingVertical: 12,
            marginRight: 10,
            width: 100,
            borderRadius: 50,
        },
        label: {
            color: '#fff',
            textAlign: 'center',
            alignContent: 'center',
        }
    });

    return (
        <TouchableOpacity
          style={styles.categoryItem}
          onPress={() => {
            handleSelectCategory(selectedCategory)}}
        >
          <Text style={styles.label}>{ category.label }</Text>
        </TouchableOpacity>
    );
};


export default CategoryItem;
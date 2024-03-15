import { SafeAreaView } from "react-native-safe-area-context";
import { Task, Text, TextInput, StyleSheet, View, FlatList } from "react-native";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import "react-native-get-random-values";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DropDownPicker from "react-native-dropdown-picker";
import { categories } from "../utils/data";
import CategoryItem from "../components/CategoryItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showError } from "../components/Toast";
import ItemCard from "../components/ItemCard";

const Home = () => {
    const { user, getUser } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [categoryValue, setCategoryValue] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [taskInput, setTaskInput] = useState("");
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [filteredTasks,setFilteredTask] = useState<Task[]>([]);


    const getTasks = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem("@tasks");
            const tasksData = jsonValue !== null ? JSON.parse(jsonValue) : null;
            setTaskList(tasksData);
        } catch (error) {
            showError("Não foi possível recuperar o carrinho");
        }
    };

    useEffect(() => {
        const getData = async () => {
          try {
            await getTasks();
            await getUser();
          } catch (error) {
            showError("Não foi possível recuperar a lista de tarefas");
          }
        };
        getData();
        console.log(taskList);
      }, []);


    const handleSelectCategory = (type: string) => {
        setSelectedCategory(type)
    };

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.hello}>Hello {user?.firstName} ! :D</Text>
            <TextInput
                style={styles.input}
                placeholder="Escreva a tarefa"
                onChangeText={setTaskInput}
            />

            <View style={styles.viewSelectCategory}>
                <DropDownPicker
                    open={open}
                    value={categoryValue}
                    items={categories.filter(
                        (c) => c.value !== "all" && c.value !== "done"
                    )}
                    setOpen={setOpen}
                    setValue={setCategoryValue}
                    placeholder="Escolha uma categoria"
                    theme="DARK"
                    placeholderStyle={{
                        color: "#fff",
                        fontSize: 16,
                    }}
                    listItemLabelStyle={{
                        color: "#fff",
                        fontSize: 16,
                        paddingLeft: 15,
                    }}
                    dropDownContainerStyle={{
                        backgroundColor: "#11212D",
                    }}
                    selectedItemContainerStyle={{
                        backgroundColor: "#1c2541",
                    }}
                    selectedItemLabelStyle={{
                        fontWeight: "bold",
                        fontSize: 16,
                        color: "#fff",
                    }}
                />
                <MaterialCommunityIcons name="send-circle-outline" size={45} color="#fff" />
            </View>

            <FlatList 
                horizontal
                data={categories}
                renderItem={({ item }) => (
                    <CategoryItem 
                        category={item} 
                        handleSelectCategory={handleSelectCategory} 
                        selectedCategory={selectedCategory} 
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />

            {/* <FlatList
                data={taskList}
                renderItem={({ item }) => (
                    <ItemCard
                        task={item}
                        handleRemoveTask={handleRemoveTask}
                        handleDoneTask={handleDoneTask}
                    />
                )}
            /> */}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#252525',
        justifyContent: 'center',
        paddingHorizontal: 30,
        rowGap: 20,
    },
    hello: {
        color: '#fff',
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold', 
    },
    input: {
        backgroundColor: '#292D3E',
        color: '#fff',
        padding: 10,
        minHeight: 50,
    },
    viewSelectCategory: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        columnGap: 20,
        marginBottom: 20,
    },
});

export default Home;
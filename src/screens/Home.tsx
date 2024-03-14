import { SafeAreaView } from "react-native-safe-area-context";
import { Task, Text, TextInput } from "react-native";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Home = () => {
    const { user } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [categoryValue, setCategoryValue] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [taskInput, setTaskInput] = useState("");
    const [taskList, setTaskList] = useState<Task[]>([]);
    const [filteredTasks,setFilteredTask] = useState<Task[]>([]);

    return(
        <SafeAreaView>
            <Text>Home</Text>
            <TextInput/>
        </SafeAreaView>
    );
};

export default Home;
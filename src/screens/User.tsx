import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { showError } from "../components/Toast";

const User = () => {
  const { user, getUser, logout } = useContext(UserContext);

  // useEffect(() => {
  //   getUser()
  // }, []);

  useEffect(() => {
    const getData = async () => {
      try {
        await getUser();
      } catch (error) {
        showError("Não foi possível recuperar os dados do usuário");
      }
    };
    getData();
  }, []);

  return (
    <SafeAreaView style={ styles.container }>
      <View style={ styles.viewImg }>
        <Image
            resizeMode="contain"
            style={{ width: 250, height: 250 }}
            source={{ uri: user?.image }}
        />
        </View>
        <View style={ styles.viewUsername }>
          <Text style={ styles.username }>{user?.username}</Text>
        </View>
        <Text>{user?.firstName}</Text>
        <Text>{user?.lastName}</Text>
        
        <Text>{user?.email}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => logout()}
        >
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    rowGap: 10,
    alignItems: 'center',
  },
  viewImg: {
    width: 350,
    height: 350,
    borderRadius: 350/2,
    backgroundColor: '#f8fafc',
    borderWidth: 3,
    borderColor: '#e2e8f0',
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewUsername: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    // borderRadius: 5,
    shadowColor: '#ccc',
    shadowOpacity: 0.5,
    },
    username: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    button: {
      width: "80%",
      height: 50,
      backgroundColor: "#606060",
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 12,
    },
    buttonText: {
      color: "#fff",
    },
});

import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import {
  useCameraPermissions,
  getMediaLibraryPermissionsAsync,
  requestMediaLibraryPermissionsAsync,
  launchImageLibraryAsync,
} from "expo-image-picker";
import { useState } from "react";
import styles from "./styles";

export default function ImagePicker({
  setCreateAccountData,
  createAccountData,
}) {
  const [status, requestPermission] = useCameraPermissions();
  const [uri, setUri] = useState("");

  const selectImage = async () => {
    if (!status.granted && status.canAskAgain) {
      const permission = await requestMediaLibraryPermissionsAsync();
    } else if (!status.granted) {
      Alert.alert("No se han concedido los permisos necesarios");
      return;
    }
    const hasPermission = await getMediaLibraryPermissionsAsync();
    if (hasPermission.granted) {
      try {
        const image = await launchImageLibraryAsync();
        if (!image.assets.length)
          return Alert.alert("Hubo un error al cargar la imágen");
        else {
          setUri(image.assets[0].uri);
          setCreateAccountData({
            ...createAccountData,
            picture: image.assets[0].uri,
          });
        }
      } catch (error) {
        console.log("Error al cargar la imáger", error.message);
        return Alert.alert("Hubo un error al cargar la imágen");
      }
    }
  };
  const removeImage = () => {
    setUri("");
    setCreateAccountData({ ...createAccountData, picture: "" });
  }; //a

  return (
    <View style={styles.container}>
      <Image
        style={styles.profilePicture}
        source={
          uri
            ? {
                uri,
              }
            : require("../../assets/no-user-photo.png")
        }
      ></Image>
      {!uri && (
        <TouchableOpacity
          onPress={selectImage}
          style={styles.smallContainerFor1}
        >
          <Text style={styles.onlyTextButton}>Agregar imágen</Text>
        </TouchableOpacity>
      )}
      {uri && (
        <View style={styles.smallContainerFor2}>
          <TouchableOpacity onPress={selectImage}>
            <Text style={styles.onlyTextButton}>Cambiar imágen</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={removeImage}>
            <Text style={styles.onlyTextButton}>Desechar imágen</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

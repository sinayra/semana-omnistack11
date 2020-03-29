import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import { composeAsync } from "expo-mail-composer";

import logoImg from "../../assets/logo.png";
import style from "./style";

export default function Details() {
  const navigation = useNavigation();
  const message = `Olá ONG, estou entrando em contato porque quero ajudar no caso "Título do caso" com o valor R$120,00.`;

  function navigateBack() {
    navigation.goBack();
  }

  function sendMail(){
    composeAsync({
      subject: "Heroi do caso: Título do caso",
      recipients: ["nayra@hotmail.co.jp"],
      body: message
    });
  }

  function sendWhatsapp(){
    Linking.openURL(`whatsapp://send?phone=000000000&t=${message}`)
  }

  return (
    <View style={style.container}>
      <View style={style.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={style.incident}>
        <Text style={[style.incidentProperty, { marginTop: 0 }]}>ONG: </Text>
        <Text style={style.incidentValue}>Nome da ong</Text>

        <Text style={style.incidentProperty}>CASO: </Text>
        <Text style={style.incidentValue}>Título do caso</Text>

        <Text style={style.incidentProperty}>VALOR: </Text>
        <Text style={style.incidentValue}>R$120,00</Text>
      </View>

      <View style={style.contactBox}>
        <Text style={style.heroTitle}>Salve o dia!</Text>
        <Text style={style.heroTitle}>Seja o heroi desse caso.</Text>

        <Text style={style.heroDescription}>Entre em contato</Text>
        <View style={style.actions}>
          <TouchableOpacity style={style.action} onPress={sendWhatsapp}>
            <Text style={style.actionText}>WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.action} onPress={sendMail}>
            <Text style={style.actionText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

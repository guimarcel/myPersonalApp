import React from "react";
import { Linking, ScrollView, Text, SafeAreaView } from "react-native";
import ProfileImage from "./components/ProfileImage";
import styles from "./styles/profileStyles";
import BioText from "./components/BioText";
import SocialButton from "./components/SocialButton";
import ServiceCard from "./components/ServiceCard";

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <ProfileImage imageUrl="https://media.licdn.com/dms/image/C4D03AQGesxEZ_YuwSg/profile-displayphoto-shrink_400_400/0/1660356502031?e=1723680000&v=beta&t=b3oWcU3B3JylIzo-k6cTkF-jKRXiMwfVKG0To93lk-M" />
        <Text style={styles.name}>Guilherme Marcel</Text>
        <BioText
          text="Trabalho como desenvolvedor fullstack há cinco anos, no qual colaboro
          com o desenvolvimento de módulos para portais (sites internos
          empresariais) com funcionalidades distintas. Para isso, trabalho
          realizando implementações no frontend, backend e banco de dados. Desde
          estruturação das tabelas, desenvolvimento do backend ao layout das
          telas, para entregar novas funcionalidades para o site. Atualmente desenvolvi 
          um aplicativo do maior fórum de reparadores da ámerica latina em react native que 
          foi publicado para Android e iOS, seu nome é Oficina Brasil | Fórum"
        />
        <SocialButton
          title="GitHub"
          onPress={() => Linking.openURL("https://github.com/guimarcel")}
          color="#007AFF"
        />
        <SocialButton
          title="LinkedIn"
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/guilherme-marcel/")
          }
          color="#6D41F8"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

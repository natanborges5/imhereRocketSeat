import { Text , View, TextInput, TouchableOpacity, FlatList, Alert} from "react-native"
import {styles} from "./styles"
import { Participant } from "../../components/Participant"

export default function Home(){
   const participants = ["Natan Borges", "Victor", "Desiree", "Vanessa", "Bruno", "Jack", "Batman", "Bruce", "Joao", "Ana"]

  function handleParticipantAdd(){
    if(participants.includes("Ana")){
      return Alert.alert("Participante existe", "Ja existe um participante na lista com esse nome")
    } 
  }
  function handleParticipantRemove(name: string){
    Alert.alert("Remover", `Deseja remover o participante ${name}?`,[
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: "Não",
        style: "cancel"
      }
    ])
  }
  return(
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2023</Text>

      <View style={styles.form}>
        <TextInput placeholder="Nome do participante" placeholderTextColor="#6B6B6B" style={styles.input}/>
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}/>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença;
          </Text>
        )}
      />
    </View>
    
  )
}
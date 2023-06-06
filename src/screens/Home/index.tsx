import { Text , View, TextInput, TouchableOpacity, ScrollView} from "react-native"
import {styles} from "./styles"
import { Participant } from "../../components/Participant"

export default function Home(){
   const participants = ["Rodrigo", "Natan Borges", "Victor", "Desiree", "Ana", "Bruno", "Jack", "Batman", "Bruce", "Joao"]

  function handleParticipantAdd(){
    console.log("Voce clicou no botao adicionar")
  }
  function handleParticipantRemove(name: string){
    console.log(`Voce clicou para remover o participante ${name}`)
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
      <ScrollView showsVerticalScrollIndicator={false}>
        {
          participants.map(participant => (
            <Participant 
              key={participant}
              name={participant}
              onRemove={() => handleParticipantRemove(participant)}/>
          ))
        }
      </ScrollView>
      
    </View>
    
  )
}
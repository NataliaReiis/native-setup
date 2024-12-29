import { View, Text } from "react-native";

import { s } from "./styles";
import { Step } from "../step";
import { IconMapPin, IconQrcode, IconTicket } from "@tabler/icons-react-native";

export function Steps() {
  return (
    <View style={s.container}>
      <Text style={s.title}>Veja como funciona: </Text>
      <Step
        icon={IconMapPin}
        title="Encontre o estabelecimento"
        description="Veja locais perto que tem parceria com a Nearby"
      />
      <Step
        icon={IconQrcode}
        title="Ative o seu cupon"
        description="Ecaneie o codigo para usar o beneficio"
      />
      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de voce"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
      />
    </View>
  );
}

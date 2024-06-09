import { useAudioStore } from '@stores/audio'
import { useAuth } from '@stores/auth'
import useClientStore from '@stores/client'
import { useIssueStore } from '@stores/issues'
import useAttendanceStore from '@stores/websocket/useChat'
import reactotronZustand from 'reactotron-plugin-zustand'
import Reactotron from 'reactotron-react-native'

declare global {
  interface Console {
    tron: any
  }
}

const tron = Reactotron.configure({
  name: 'C3PO'
  /**
   * ## Conectando ao Emulador do Android via IP
   *
   * ### Problema
   *
   * Se você estiver usando o emulador do Android e não conseguir se conectar normalmente, você pode tentar usar o IP do seu computador para se conectar.
   *
   * ### Solução
   *
   * 1. Utilize o seguinte comando:
   * adb reverse tcp:9090 tcp:9090
   *
   * 2. **Observações:**
   *    * Se a variável `adb` não estiver configurada no PATH, execute o comando completo do diretório da pasta `platform-tools`.
   *    * ~/<local_pasta_Android>/Sdk/plataform-tools/adb reverse tcp:9090
   *
   * ### Ajuda
   *
   * Se o problema persistir após seguir as etapas acima, você precisará redirecionar as portas no ADB do Android. Consulte a documentação oficial para obter mais informações.
   *  https://docs.infinite.red/reactotron/
   */
  // ** host: 'seu-ip',
})
  .useReactNative()
  .use(
    reactotronZustand({
      stores: [
        { name: 'auth', store: useAuth },
        { name: 'websocket', store: useAttendanceStore },
        { name: 'issues', store: useIssueStore },
        { name: 'audioRecord', store: useAudioStore },
        { name: 'client', store: useClientStore }
      ]
    })
  )
  .connect()

console.tron = tron

tron.clear()

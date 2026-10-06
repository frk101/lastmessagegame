/**
 * Telefonun kök bileşeni. Hikâyeyi başlatır ve aktif uygulamayı gösterir.
 * M0: yalnızca Mesajlar. M1'de kilit ekranı, ana ekran ve uygulama yönlendirme (A-21, A-22, A-25).
 */
import { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import storyJson from '../../assets/story/story.json';
import { Conversation } from '../apps/messages/Conversation';
import { Director } from '../engine/Director';
import { colors } from '../theme';
import { PhoneStatusBar } from './StatusBar';

export function Phone() {
  const insets = useSafeAreaInsets();
  const director = useRef<Director | null>(null);

  useEffect(() => {
    if (!director.current) {
      director.current = new Director(storyJson);
      void director.current.run();
    }
  }, []);

  return (
    <View style={[styles.root, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <PhoneStatusBar />
      <Conversation onChoose={(i) => void director.current?.choose(i)} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.bg },
});

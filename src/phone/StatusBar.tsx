/**
 * Oyunun kendi (sahte) durum çubuğu. Cihazın gerçek çubuğu App.tsx'te gizlenir.
 * M0: saat. A-20'de sinyal, şarj ve arama şeridi eklenecek.
 */
import { StyleSheet, Text, View } from 'react-native';
import { useGameStore } from '../state/gameStore';
import { colors, fonts, space } from '../theme';

export function PhoneStatusBar() {
  const time = useGameStore((s) => s.clock);
  return (
    <View style={styles.bar}>
      <Text style={styles.time}>{time}</Text>
      <Text style={styles.icons}>▂▄▆ 82%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 28,
    paddingHorizontal: space(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  time: { color: colors.text, fontFamily: fonts.uiBold, fontSize: 14 },
  icons: { color: colors.text, fontFamily: fonts.ui, fontSize: 12 },
});

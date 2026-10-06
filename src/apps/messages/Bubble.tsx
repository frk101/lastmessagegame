import { StyleSheet, Text, View } from 'react-native';
import type { Message } from '../../state/gameStore';
import { colors, fonts, space } from '../../theme';

export function Bubble({ message }: { message: Message }) {
  if (message.from === 'system') {
    return <Text style={styles.system}>{message.text}</Text>;
  }
  const mine = message.from === 'me';
  return (
    <View style={[styles.row, mine ? styles.rowMine : styles.rowTheirs]}>
      <View style={[styles.bubble, mine ? styles.mine : styles.theirs]}>
        <Text style={styles.text}>{message.text}</Text>
        <Text style={styles.time}>{message.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginVertical: space(1) },
  rowMine: { justifyContent: 'flex-end' },
  rowTheirs: { justifyContent: 'flex-start' },
  bubble: {
    maxWidth: '78%',
    paddingHorizontal: space(3),
    paddingVertical: space(2),
    borderRadius: 16,
  },
  mine: { backgroundColor: colors.bubbleOut, borderBottomRightRadius: 4 },
  theirs: { backgroundColor: colors.bubbleIn, borderBottomLeftRadius: 4 },
  text: { color: colors.text, fontFamily: fonts.ui, fontSize: 16, lineHeight: 22 },
  time: {
    color: colors.textDim,
    fontFamily: fonts.mono,
    fontSize: 10,
    alignSelf: 'flex-end',
    marginTop: 2,
  },
  system: {
    color: colors.textDim,
    fontFamily: fonts.mono,
    fontSize: 12,
    textAlign: 'center',
    marginVertical: space(2),
  },
});

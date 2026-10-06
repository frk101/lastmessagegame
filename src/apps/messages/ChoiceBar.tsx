import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, fonts, space } from '../../theme';

interface Props {
  choices: string[];
  onChoose: (index: number) => void;
}

/** Klavye alanında duran seçim butonları (A-33). ">" ile başlayan seçimler eylem butonudur. */
export function ChoiceBar({ choices, onChoose }: Props) {
  if (!choices.length) return null;
  return (
    <View style={styles.bar}>
      {choices.map((c, i) => (
        <Pressable
          key={`${i}-${c}`}
          onPress={() => onChoose(i)}
          style={({ pressed }) => [styles.choice, pressed && styles.pressed]}
          accessibilityRole="button"
        >
          <Text style={styles.text}>{c.replace(/^>/, '')}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    padding: space(3),
    gap: space(2),
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
  choice: {
    paddingVertical: space(3),
    paddingHorizontal: space(4),
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.accent,
  },
  pressed: { backgroundColor: colors.surfaceHigh },
  text: { color: colors.text, fontFamily: fonts.uiMedium, fontSize: 15, textAlign: 'center' },
});

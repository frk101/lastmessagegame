/**
 * Konuşma ekranı (M0 sürümü).
 * A-30/A-31'de FlashList, balon animasyonu ve "yeni mesaj" rozeti ile değiştirilecek.
 */
import { useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { CONTACTS } from '../../data/contacts';
import { tr } from '../../i18n/tr';
import { useGameStore } from '../../state/gameStore';
import { useUiStore } from '../../state/uiStore';
import { colors, fonts, space } from '../../theme';
import { Bubble } from './Bubble';
import { ChoiceBar } from './ChoiceBar';

export function Conversation({ onChoose }: { onChoose: (i: number) => void }) {
  const contactId = useGameStore((s) => s.activeContact);
  const messages = useGameStore((s) => s.conversations[contactId]) ?? [];
  const typing = useUiStore((s) => s.typing[contactId] ?? false);
  const choices = useUiStore((s) => s.choices);
  const scroll = useRef<ScrollView>(null);
  const contact = CONTACTS[contactId];

  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.name}>{contact.defaultName}</Text>
        {!contact.showLastSeen && <Text style={styles.sub}>{tr.lastSeenHidden}</Text>}
      </View>
      <ScrollView
        ref={scroll}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        onContentSizeChange={() => scroll.current?.scrollToEnd({ animated: true })}
      >
        {messages.map((m) => (
          <Bubble key={m.id} message={m} />
        ))}
        {typing && <Text style={styles.typing}>{tr.typing}</Text>}
      </ScrollView>
      <ChoiceBar choices={choices} onChoose={onChoose} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  header: {
    paddingVertical: space(3),
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  name: { color: colors.text, fontFamily: fonts.uiBold, fontSize: 16 },
  sub: { color: colors.textDim, fontFamily: fonts.ui, fontSize: 11, marginTop: 2 },
  list: { flex: 1 },
  listContent: { padding: space(3), paddingBottom: space(6) },
  typing: {
    color: colors.textDim,
    fontFamily: fonts.ui,
    fontStyle: 'italic',
    fontSize: 13,
    marginTop: space(2),
  },
});

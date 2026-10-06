import { parseLine } from '../../src/engine/speakers';

describe('parseLine', () => {
  it('gelen mesajı kişiye bağlar', () => {
    expect(parseLine('Bilinmeyen Numara: Bunu okuyorsan eve dönme.')).toMatchObject({
      kind: 'incoming',
      contactId: 'bilinmeyen',
      text: 'Bunu okuyorsan eve dönme.',
    });
    expect(parseLine('M.: Sana yalan söyledi.')).toMatchObject({ kind: 'incoming', contactId: 'm' });
  });

  it('metindeki saat iki noktasını konuşmacı sanmaz', () => {
    expect(parseLine("Bilinmeyen Numara: Ama 23:17'yi hatırlıyorsun.").text).toBe(
      "Ama 23:17'yi hatırlıyorsun.",
    );
    expect(parseLine('Saat 23:17 olur.').kind).toBe('direction');
  });

  it('Emir ve özel konuşmacıları ayırır', () => {
    expect(parseLine('Emir: Kimsin?').kind).toBe('outgoing');
    expect(parseLine('Emir — Not: 23:17 bir tesadüf değil.').kind).toBe('inner');
    expect(parseLine('Emir — Video: Bunu izliyorsan…').kind).toBe('caption');
    expect(parseLine('Deniz — Kayıt: Hangi seferinde?').kind).toBe('caption');
    expect(parseLine('Sistem: Bu konum 6 ay önce kaydedildi.').kind).toBe('system');
    expect(parseLine("Eski Not: 17'yi bul. Ama kapıyı çalma.").kind).toBe('note');
  });
});

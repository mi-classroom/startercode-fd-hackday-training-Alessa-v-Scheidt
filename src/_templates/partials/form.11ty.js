exports.html = `
<div>
  <h3>Metadaten zur Abbildung</h3>
  <form class="form-field" data-js-validate="true">
    <input type="text" name="dateiart" id="dateiart" required>
    <label for="dateiart">Dateiart</label>
    <textarea name="beschreibung" id="beschreibung" required></textarea>
    <label for="beschreibung">Beschreibung</label>
    <input type="text" name="rechte" id="rechte" required>
    <label for="rechte">Abbildung Rechte</label>
    <input type="text" name="quelle" id="quelle" required>
    <label for="quelle">Abbildung Quelle</label>
    <input type="date" name="datum" id="datum" required>
    <label for="datum">Datum</label>
    <div class="buttons">
      <button class="form-field__button" type="reset">abbrechen</button>
      <button class="form-field__button" type="submit">speichern</button>
    </div>
  </form>
</div>
`;
import { FormControl } from '@angular/forms'

export function restrictedWords(words) { // If sending in parameters are validation returns a function.
  return (control: FormControl): { [key: string]: any } => // Object type defined on the fly.  It's got a key property.
  {
    if (!words) return null; // Passes

    var invalidWords = words
      .map(w => control.value.includes(w) ? w : null) // Copy array but with different values
      .filter(w => w != null); // filter out values from array.

    return invalidWords && // Make sure not null
      invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(', ') } : null;
  }
}

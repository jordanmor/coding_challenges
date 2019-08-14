// Source: 	freeCodeCamp - "JavaScript Algorithms and Data Structures Certification"

// ***** Convert HTML Entities *****

/* 
Convert the characters &, <, >, " (double quote), and ' (apostrophe), 
in a string to their corresponding HTML entities.
*/

// Solution #1
function convertHTML(str) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "\'": "&apos;"};
  return str.replace(/[&<>"']/g, (entityMatch) => entities[entityMatch]);
}

console.log(convertHTML2('Stuff in "quotation marks" & other stuff < than or > than this'));
// Result: Stuff in &quot;quotation marks&quot; &amp; other stuff &lt; than or &gt; than this

// ============== OTHER SOLUTIONS ============== //

// Solution #2
function convertHTML2(str) {
  function replacer(entityMatch) {
    switch(entityMatch) {
      case '&': return '&amp;'; 
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&apos;';
    }
  }
  return str.replace(/[&<>"']/g, replacer);
}
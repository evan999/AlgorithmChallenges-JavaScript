function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  str = str
          .replace(/([a-z])([A-Z])/g, '$1-$2')
          .replace(/\s/g, '-')
          .replace(/_/g, '-')
					.toLowerCase();
					    
  return str;
}

spinalCase('This Is Spinal Tap');
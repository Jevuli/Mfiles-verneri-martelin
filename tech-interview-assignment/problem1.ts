// There are two possible ways of solving this problem.

// First by fixing the function itself, so that it allows strings to be passed as arguments.
// However this is not the way this should be fixed ever.
function suggestionElementPreparation(
  suggestionElemClass: string,
  suggestionClickEvent: string
  ) {
  const suggestionElem = document.getElementById( "mf-suggestion-event" );
  const functionName: string = suggestionClickEvent.split( "(" )[0];
  const firstArgument: boolean = suggestionClickEvent.split( "(" )[1].split( "," )[0].trim() === 'true';
  const secondArgument: boolean = suggestionClickEvent.split( "(" )[1].split( "," )[1].split( ")" )[0].trim() === 'true';
  suggestionElem!.onclick = window[functionName](firstArgument, secondArgument);
}

// Second by fixing the way the function is called so that it passes the function instead of a string.
suggestionElementPreparation( "mf-web-suggestionicon-text-mobile", webURLPreparation( true, false ) );
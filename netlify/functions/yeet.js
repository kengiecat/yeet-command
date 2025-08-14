// netlify/functions/yeet.js
// Minimal test version

exports.handler = async (event, context) => {
  const destinations = ["debug", "the void", "2007"];
  
  const destination = destinations[Math.floor(Math.random() * destinations.length)];
  const message = `yeeted into ${destination}`;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
    body: message
  };
};

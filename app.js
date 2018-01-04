/**
 * Responds to any HTTP request that can provide an "image" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */

// Imports the Google Cloud client library
//const vision = require('@google-cloud/vision');

// Creates a client
//const client = new vision.ImageAnnotatorClient();

//const api_key = 'AIzaSyBsAfSPmjvzXOFvYJV1qQprOeQxRmBJOxk';

exports.scanImage = function scan(req, res) {  

  res.status(200).send("Hello")
  // client
  //   .imageProperties(req.body.image)
  //   .then(results => {
  //     const properties = results[0].imagePropertiesAnnotation;
  //     const colors = properties.dominantColors.colors;    
  //     res.setHeader('Content-Type', 'application/json');
  //     res.status(200).send(JSON.stringify({ colors: colors }));
  //   })
  //   .catch(err => {
  //     console.error('ERROR:', err);
  //     res.status(500).send("Error, sorry");
  //   });
};

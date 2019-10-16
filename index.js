// curl  <your functions url> -H "Content-Type:application/json"  -d '{"id":"UfrzsHppV9gfbQXs56YDcshPBF83_Rithesh"}'


var admin = require("firebase-admin");
const { Storage } = require('@google-cloud/storage');
const storage = new Storage();

var config = {
    "<your configuration from serviceAccountKey.json>"
}

admin.initializeApp({
    credential: admin.credential.cert(config),
    databaseURL: '<your database link>'
});

exports.getStudentDocuments = async (studentId, res) => {
    let bucketName = [];
    let links = [];
    let sid = studentId.query.id || studentId.body.id ; 

    await storage.getBuckets().then(results => {
        var buckets = results[0];
        console.log('Buckets:');
        buckets.forEach(bucket => {
            bucketName.push(bucket.name);
        });
    }).catch(e => {
        console.log(e);
    });
    console.log(bucketName[1]);
    const bucket = storage.bucket(bucketName[1]);
    const [files] = await bucket.getFiles({ prefix: "/"});
    console.log('Files:');
    files.forEach(file => {
        links.push(file.metadata.mediaLink);
    });

    console.log(links.length);
    res.send(links);
}



// in php curl

// //API URL
// $url = '<your values>';

// //create a new cURL resource
// $ch = curl_init($url);

// //setup request to send json via POST
// $data = array(
//     'username' => 'codexworld',
//     'password' => '123456'
// );
// $payload = json_encode(array("user" => $data));

// //attach encoded JSON string to the POST fields
// curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

// //set the content type to application/json
// curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

// //return response instead of outputting
// curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

// //execute the POST request
// $result = curl_exec($ch);

// //close cURL resource
// curl_close($ch);

# Hello developers  :clap:

Code to fetch the data from storage bucket of GCP

##### Functionality of  Code {<>}
This code takes following as a input.

- URL from the gcp bucket.
- Required data to the NodeJS.

Using these as inputs for the code the network fetches the data from GCP.


##### About Code {<>}
This code is written with following language.
- Cloud functions are written using NodeJS and the backend URL parsing is cURL.


##### Code Snippets{<>}


```` JavaScript

    await storage.getBuckets().then(results => {
        var buckets = results[0];
        buckets.forEach(bucket => {
            bucket = buckets.name;
        });
    }
````
##### getBuckets( ) {<>}
The function getBuckets() is used to get the buckets available in GCP.

- This return the bucket object.
- Traverse using forEach loop to get the bucket names using buckets.name.
    
    
````JavaScript

const [files] = await bucket.getFiles({ prefix: "/"});
    files.forEach(file => {
        links.push(file.metadata.mediaLink);
    });
    res.send(links);

````
##### getFiles( ) {<>}

The function getFiles() is used to get the files inside a particular directories.

- getFiles() gives the details of all the available files inside the bucket.
- It travels recursively through all the directories and sub directories.
- Fetch the details required.

##### Installation {<>}
Its mandatory to install NodeJS in the system

- Installation:

```` Terminal
- npm init
- npm install --save firebase-admin
- npm install @google-cloud/storage
- firebase login
- firebase init

````










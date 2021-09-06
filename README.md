# Host My Img (Front-End)

A basic and simple web app for hosting images (.png, .jpg, .gif) online. 

Built with Angular and Angular CLI.

This front-end uses the following API: [Host My Img Web Server](https://github.com/samantafluture/hostmyimg-server). 

## Features

- Upload by clicking or drag and dropping
  - Add one or multiple files
  - Formats: png, jpg and gif
  - Maximum size: 2M per file
- Show upload progress to the user
- Retrieve a URL from each file
  - Frow Amazon S3 Bucket
- Remove it from the upload queue
- Return visual errors if:
  - Web Server is down
  - File is too big
  - There's too many files selected at once (more than 5)
  - File formats not accepted

## Built with

- Angular
- Angular CLI
- Ngx-Dropzone
- Material Icons
- Material Circular Progress Bar

CND for hosting images online: Amazon AWS S3.

Deploy: Vercel.

## Screens

Returning the thumbnail, an "ok" and the link for the hosted imagen in the CDN.

![upload-image-ok]()

Returning an error when trying to upload a file format that is not accepted.

![upload-image-error]()

## Under Construction

Please feel free to contribute! This web app is still under development :coffee:

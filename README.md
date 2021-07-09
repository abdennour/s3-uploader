# S3 uploader
A single REST API which uploads image to an S3 bucket

# Preqruisites:
- docker (20.10.7 +)

# Getting Started

- **config it** 
  - make sure you create AWS S3 bucket and an IAM user who has access to that bucket
  - Or rely on the containers which mimics AWS S3.

  - `cp .env.example .env` then assign values in `.env` file if you will go with AWS S3 bucket


- **starting app** `docker-compose up -d`

- Validate it: `curl -F image=@img.png http://$(docker-compose port app 8080)/image`
- Check your S3 bucket content. it should include that image.

# Author
- Abdennour

# License

MIT
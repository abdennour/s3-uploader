# S3 uploader
A single REST API which uploads image to an S3 bucket

# Preqruisites:
- docker (20.10.7 +)

# Getting Started

- **config it** `cp .env.example .env` then check values in `.env` file.

- **starting app** `docker-compose up -d`

- Validate it: `curl -F image=@img.png http://$(docker-compose port app 8080)/image`

# Author
- Abdennour

# License

MIT
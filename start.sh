docker-compose down

docker build -t backend-escolawilliams:latest ./backend 
docker build -t frontend-escolawilliams:latest ./frontend

docker-compose up --build --force-recreate --remove-orphans
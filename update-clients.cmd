@ECHO OFF
CALL rm ./src/grpc -r
CALL docker-compose up
CALL docker-compose down --rmi local -v --remove-orphans
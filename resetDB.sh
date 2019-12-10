echo "### Dropping leadsales"
docker exec -it mariadb.local.thegodstack.com /bin/sh -c "mysql -uroot -pthegodstackpass -hlocalhost -e 'DROP DATABASE thegodstack'"
echo "### Creating leadsales"
docker exec -it mariadb.local.thegodstack.com /bin/sh -c "mysql -uroot -pthegodstackpass -hlocalhost -e 'CREATE DATABASE thegodstack'"
echo "### RollingBack"
docker exec -it api.local.thegodstack.com knex migrate:rollback --all
echo "### Migrating"
docker exec -it api.local.thegodstack.com knex migrate:latest
echo "### Seeding"
docker exec -it api.local.thegodstack.com yarn seedDb
# Докер

[Вернуться на главную](/README.md) | [Окружение](./README.md)

## Содержание

1. [Команды](#команды)

## Команды

Вывести информацию о запущенных контейнерах:

```shell script
docker ps
```

Развернуть контейнер:

```shell script
docker-compose -f <исполняющий_файл_контейнера> up --build
```

Развернуть базу данных:

```shell script
# Создать базу данных

docker exec -i <имя_контейнера> mysql -e 'create database <название_базы_данных>' -u root -p1

# Развернуть базу данных

zcat <название_архива_дампа_базы_данных> | docker exec -i <имя_контейнера> mysql -u root -p1 <название_базы_данных>
```

Применить миграции для базы данных:

```shell script
docker exec -it <имя_контейнера> bash
php yii migrate
```

Обновить node.js зависимости:

```shell script
docker exec -it <имя_контейнера> bash
npm i
```

Запустить контейнер:

```shell script
docker-compose -f <исполняющий_файл_контейнера> up
```

[К содержанию](#содержание)

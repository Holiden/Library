# Докер

[Вернуться на главную](/README.md) | [Окружение](./README.md)

## Содержание

1. [Docker CLI](#docker-cli)
   1.1 [docker exec](#docker-exec)
   1.2 [docker ps](#docker-ps)
2. [Docker Compose CLI](#docker-compose-cli)
   2.1 [docker-compose up](#docker-compose-up)
3. [Использование](#использование)
   3.1 [Развернуть контейнер](#развернуть-контейнер)
   3.2 [Развернуть базу данных](#развернуть-базу-данных)
   3.3 [Применить миграции для базы данных](#применить-миграции-для-базы-данных)
   3.4 [Обновить node.js зависимости](#обновить-node.js-зависимости)
   3.5 [Запустить контейнер](#запустить-контейнер)
   3.6 [Остановить контейнер](#остановить-контейнер)

## Docker CLI

### docker exec

Запустить команду в запущенном контейнере

```shell script
docker exec [options] container command

# Options:
# -i (--interactive) - держать STDIN (поток, зарезервированный для чтения команд пользователя или входных данных) открытым
# -t (--tty) - псевдо TTY (терминал)
```

### docker ps

Список контейнеров

```shell script
docker ps [options]

# Options:
# -q (--quiet) - отобразить только ID контейнеров
```

[К содержанию](#содержание)

## Docker Compose CLI

```shell script
docker-compose [options] [commands]

# Options:
# -f (--file) - исполняющий файл контейнера [-f <arg>]
```

### docker-compose up

Собрать, создать и запустить контейнер

```shell script
docker-compose up [options]

# Options:
# -d (--detach) - запустить контейнер в фоновом режиме
# --build - собрать образ перед запуском контейнера
```

[К содержанию](#содержание)

## Использование

### Развернуть контейнер

```shell script
docker-compose -f <исполняющий_файл_контейнера> up --build
```

### Развернуть базу данных

```shell script
# Создать базу данных

docker exec -i <имя_контейнера> mysql -e 'create database <название_базы_данных>' -u root -p1

# Развернуть базу данных

zcat <название_архива_дампа_базы_данных> | docker exec -i <имя_контейнера> mysql -u root -p1 <название_базы_данных>
```

### Применить миграции для базы данных

```shell script
docker exec -it <имя_контейнера> bash
php yii migrate
```

### Обновить node.js зависимости

```shell script
docker exec -it <имя_контейнера> bash
npm i
```

### Запустить контейнер

```shell script
docker-compose -f <исполняющий_файл_контейнера> up
```

### Остановить контейнер

```shell script
docker ps -q | xargs docker stop
```

[К содержанию](#содержание)

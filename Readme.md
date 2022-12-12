# Задание

Тестовое задание на позицию Junior DevOps
Создать репозиторий на гитхаб с простым бекендом на node.js (либо
скопировать https://github.com/eMahtab/node-express-hello-world)
В репозитории сделать 2 ветки - master и development (код в них будет
идентичен)
### Сделать jenkins pipeline который:
1) запускается на каждый новый коммит в ветке
2) подменяет порт приложения (app.js 12 строка)
master => 4200
development => 4201
3) собирает докер контейнер. для изображения добавить версию (на каждую
новую сборку она увеличивается)
4) сделать для этого контенера папку (содержимое которой не будет
удаляться при перезапуске контейнера)
5) запускать контейнер локально

#### Важно:
1) В один момент времени может быть запущен только 1 контейнер для
каждой ветки
#### Дополнительно (будет плюсом) :
1) Добавить простой фронтенд (как отдельный контейнер)
2) Добавить прокси сервер (nginx/traefic)
3) Организовать работу контейнеров таким образом Front -> ProxyServer ->
Backend 

# Реализация

## Обязательное

1) Для запуска скриптов на каждый новый коммит в ветке использовал webhook на github
2) Подмену порта осуществил с помощью переменной окружения, которая достается при запуске docker-compose
3) При сборке контейнеров, чтобы присвоить тег с номером сборки записал переменную jenkins: BUILD_NUMBER в переменные окружения и она также присвается при запуске docker-compose
4) Для папки снаружи контейнера использовал docker volume
5) docker-compose up -d

## Важное

При запуске с помощью docker-compose не может быть запущено более одного экземпляра контейнера

## Дополнительное

1) Добавил простой фронтенд на React.js, который делает запрос на бэкэнд и получает некоторый текст
2) В качестве прокси использовал nginx
3) Не настраивал прокси раньше, сходу не получилось понять как это сделать


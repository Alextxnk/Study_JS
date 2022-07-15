'use strict';

// однострочный коммент

/* многострочный 
коммент */

// горячие клавиши ctrl + / - для комментирования выбранной области

// alert(1); // выводит модальное окно
// console.log(2);

// переменные 
// let book = 10;
// const pi = 3.14;


// GIT
// git config --list - информация, настройки 
// git config --global user.name "Alextxnk"
// git config --global user.email "alexsolov766@gmail.com"
// 6 min начало работы с репозиторием 
// git config --global core.autocrlf true
// git init инициализация репозитория
// git status
// git add index.html
// git add . все файлы из проекта
// git add script/script.js style/style.css - можем указывать по несколько файлов 
// git commit -m "First Commit"
// git commit -m "Изменил title"
// clear - почистить консоль

// САМОЕ ГЛАВНОЕ!!!!!!!!!!!!!!! КАК ДЕЛАТЬ КОММИТЫ
// git commit -a -m 'поменял комменты в js файле' - вот так делаются коммиты, если уже второй и далее

// git diff изменения в отличие от предыдущего коммита
// q - чтобы выйти 
// git log история коммитов
// git show 915adffa11ddb413d0cc8d1f4603e3c5f9740a0a необязательная штука 
// git checkout index.html - откат файла до закоммиченного места (все новое удаляется, остается только коммит)
// git checkout style/style.css - полностью прописываем путь, таким способом можно не только вернуть
// к коммиту, но и восстановить удаленный файл
// если хотим откать к конкретному коммиту сначала набираем git log копируем хэш коммита и далее 
// git checkout da99bff600fc76226ac7eb451f11103528eb4031 - откатит весь проект при этом коммите
// git checkout da99bff600fc76226ac7eb451f11103528eb4031 index.html (style/style.css) - 
// откатит только файл при этом коммите

// git log --oneline
// git checkout 98ca165 (da99bff) - откатит весь проект при этом коммите
// у последнего коммита метка master и к ней мы всегда можем вернуться - git checkout master

// git checkout -b 'js_build'
// git checkout master (git checkout js_build) - переключение между ветками
// git log --oneline --all - чтоб вывести все дерево, со всеми ветками
// git log --oneline --all --graph - рисует граф 
// git checkout -b html_css da99bff - создаст новую ветку в нужном хэше



// запушить на Гит
// git remote add origin https://github.com/Alextxnk/Study_JS.git
// git branch -M main
// пушим строчкой ниже
// git push -u origin main
// git push -u origin master (любая другая ветка)
// git push origin main


// git checkout -b lesson03 - переход на новую ветку
// git add. - добавим в отслеживаемое новые файлы 
// git commit -m 'Создали новый файл'
//  lesson03

// на 32 минуте Макс рассказывает как запулить проект - скачать его из гита
// сделал скрин в беседу 
// git pull origin lesson03
// так можно работать с проектами на нескольких компьютерах



// игнорирование папки
// git update-index --assume-unchanged academy-php-VS/node_modules/*

// чтоб сразу всю папку отслеживать
// git add Lesson_2_types_and_functions/*
'use strict'; 


// переменная - это участок в памяти, который имеет имя и хранит какое-то значение 

// для обявления переменной мы пишем ключевое слово var, после пишем идентификатор, который является именем 
// переменной и сразу можем присвоить перменной какое-то значение 


var myVar = 10; // для имени переменной лучше использовать существительное и всегда имя долно быть со смыслом

// имя переменных можт начинаться с букв: (a-z), $ или _ 
// не может начинаться с цифры, но может содержать ее  
// также нельзя использовать в имени операторы и зарезервированные ключевые слова  

// javascript чувствителен к регистру и поэтому переменные названные в разном регистре будут разными 

// стиль написания переменных - camelCase, является хорошим тоном 

// переменные необходимо называть английскими словами без использования транслита 
// лучше использовать переводчик 



// в современном стандарте появились два новых способа объявления переменных: let и const 

// let - избавляет от ошибок которые могли возникнуть у var 
// const - с ее помощью объявляют константы 

// var - видна в коде везде и до обявления и снаружи, если она объявлена внутри блока кода 

// let и const видны только после объявления, такое поведение называется всплытие, это помогает избежать 
// множество ошибок, поэтому лучше использовать их
// также их использование улучшает оптимизацию и ускоряет код

// еще let и const видны только внутри блока кода, ограниченного фигурными скобками 

// var видна везде 

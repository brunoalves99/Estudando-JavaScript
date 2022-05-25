// 5 Objetos nativos
Object
String
Array
Function
Number

// 5 objetos do browser
window
history
Document
HTMLCollection
NodeList

if(typeof document.onwebkitanimationend !== 'undefined') {
    console.log('Exite');
} else {
    console.log('Não existe');
}
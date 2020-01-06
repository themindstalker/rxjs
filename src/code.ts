import {Observable} from "rxjs/observable";

import {fromEvent} from 'rxjs/observable/fromEvent'
import {from} from 'rxjs/observable/from';
import {interval} from 'rxjs/observable/interval';
import {switchMap} from 'rxjs/operator/switchMap';
import {map} from 'rxjs/operator/map';
import {pluck} from 'rxjs/operator/pluck';
import { Subject } from "rxjs";

// var observable = fromEvent(document,'mousemove')

// // setTimeout(()=>{
// //     var subscription= observable.subscribe(
// //         (x:any)=>addItem(x)
// //     )
// // },2000)

// const obs$= from(['🍕', '🍪', '🍔', '🌭', '🍟'])

// const sub1=obs$.subscribe(
//     (x:any)=>addItem('From Sub1:'+x),
//     null,
//     ()=>addItem('Subscription1 got completed')
// )

// const sub2=obs$.subscribe(
//     (x:any)=>addItem('From Sub2:'+x),
//     null,
//     ()=>addItem('Subscription2 got completed')
// )

// const endpoint = 'https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty';

const mySubject = new Subject();

const subscriber1= mySubject.subscribe(x => addItem(`${x} ${x}`));
const subscriber2=mySubject.subscribe(x => addItem(x));


mySubject.next('👋 Hello!');

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}
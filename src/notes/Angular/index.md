---
tags: ['angular', 'javascript']
---

# Angular Notes

## Binding Types

### Event Binding

```
<button  (click)="handleButton($event)">
```

### String interpolation

```
{{ variableName }}
```

### Property Binding

```
<button [disabled]="!isDisabled">
```

### Two way data binding

```
<input type="text" [(ngModel)]="variableName">
```

## Directives

Directives are instructions in the DOM. This is like the `card-body` that we use for the `app-card`.

`<p appTurnGreen>Receives a green bg</p>`

```
@Directive({
	selector: '[appTurnGreen]'
})
export class TurnGreenDirective {
...
}
```

### NgIf

```html
<div *ngIf="“deposits.length">0; else zeroState”>Here are your deposits!</div>

<div #zeroState>Nothing here!</div>
```

### NgStyle

`<p [ngStyle]=“{backgroundColor: getColor()}”>This paragraph</p>

## Event Emitters

You declare an event emitter property like this:
`@Output() serverCreated = new EventEmitter<>();`

Then you bind to it on the parent component’s html like:
`<app-cockpit (serverCreated)="parentFunction($event)">`

Don’t forget to put parentheses at the end of the event emitter to call it.

Then when you want to emit, you do this:

```
 this.serverCreated.emit({serverName: this.newServerName, serverContent: this.newServerContent})
```

## Using local references in Templates

So you can use a local reference( `#name` inside an HTML element) in a template to get the values of that html element and pass it around that HTML file.

Then inside the receiving component:

```typescript
  onAddServer(/nameInput/: HTMLInputElement) {
    /this/.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: /this/.newServerContent
    });
  }

```

## Angular’s version of `children`

In react I liked using higher order components and using `children` whenever I passed something inside the component. I found I couldn’t do that with Angular, as it’s all lost, but there’s a way:
`<ng-content></ng-content>`
Can’t get access to this yet until the lifecycle method `ngAfterContentInit`

## Lifecycle Hooks

Like React’s `onComponentUpdate`
In order:
`ngOnChanges` Called when bound input changes
`ngOnInit` Called once the component is initialized - runs after constructor
`ngDoCheck` - Called during every change detection run - runs often
`ngOnDestroy` - Called once the component is about to be destroyed

## Attribute directives vs. Structural directives

Attribute directives sit on elements like attributes - never change or destroy things in the DOM
Structural change the structure of the dom like `ngIf` so that it might change the DOM

You can’t have more than 1 structural directive on the same element

## Attribute Directives

```
import { Directive , OnInit, Renderer2, ElementRef} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{

  constructor(private /elRef/: ElementRef, private /renderer/: Renderer2) { }
  ngOnInit(){
    /this/.renderer.setStyle(/this/.elRef.nativeElement, 'background-color', 'blue')
  }
}
```

Better because you don’t need to access the DOM

## Services

Components become components because of the `@Component` Decorator at the beginning. You DONT do that with a service. It’s just normal JS

Don’t create service instances manually. You need to inject them with a dependency injector.

Simple service:

```typescript
export class LoggingService {
logStatusChange(/status/:string){
console.log("A server status changed, new status: " + status)
}
}
```

## Dependency Injection

A Dependency is something a class of ours will depend on.
The dependency injector _injects_ an instance of that class automatically.

You do it through the constructor:

`constructor(private loggingService: LoggingService){}`

## Hierarchical Injector

If we provide a service in some place of our app then we’ll have the same instance of the service on all our children.

If we put the service in our `AppModule` then we’ll have the same instance of the service App-wide.

`AppComponent` will give us the same instance of the service for All Child Components (But NOT other services)

Instances don’t go up, they just go down the tree of components. Like parents passing it to children.

Any Other Component: You get the same instance of service and it’s available for **the component and all its children**.

## Instances

The reason this is important is that if you’re keeping an array of users in the service, and one component goes to push a new user onto that array, it’ll only be present on that instance. You’re essentially creating a new array each time you create an instance.

The reason we don’t have it in the providers array for GCV is so that we don’t make a new instance. We want the same instance across the app, so we keep it in the constructor but remove it from the Component’s `providers` array.

## Services in Services

The highest level is the `AppModule`.
If you put a service there the ENTIRE app gets the same instance of the service.
This is the only way to put a service in a service.

To inject a service in a service you need to use a constructor like you do in any other component. Import it at the top, then
`constructor(private loggingService: LoggingService)`

### @Injectable()

If you’re importing a service into a service you need to give Angular some metadata on what it is you’re importing. At the top of the service you’re injecting into you need to add `Injectable()` like this:

```typescript
@Injectable()
export class AccountsService {
...
}
```

Once again you add this to the component where you’re injecting, NOT the component you want to inject.

### Returning a copy of an array from the service

We usually don’t want to send the exact instance of our data down, so we can call `slice()` on an array with no arguments to send a copy.

## Observables

Observables are data sources

You have an observable and an observer.

Observable ======STREAM========> Observer

As an observer, you can:

- Handle Data
- Handle Error
- Handle Completion of observable (They don’t need to complete)

If you’re creating Observables from scratch you need to create the bridge between them and the Observer that watches them.

When subscribing to an observable it takes 3 callbacks as args. Successful data, failed data, finalized data.

When you do `observer.next()` you are saying to pass the `next` data package.

If you want it to fail, you call `observer.error()`

### Subjects

Subjects seem to be both Observable and Observer

EventEmitters are built on subjects

## of/from

We can make observables by using these little shorthand functions `of()` and `from()`

of takes a raw value and wraps it in an observable

`from` takes an array, promise or iterable.

`fromEvent` listens to events so that you can subscribe to that and do something.
Example:

```javascript
const event = fromEvent(document, `click`);
event.subscribe('console.log(`clicked`));
```

## Hot and Cold observables

Hot observables can have multiple subscriptions
Cold can only have 1.
Cold observables don’t create the underlying value until they’re subscribed to.

Hot always are creating values whether subscribed or not.

The operator `shareReplay` will cache the last value so any observer can see and use it.

Instead of making cold observables hot and using `shareReplay` we would just use a subject.

## Subjects

You can push new values to the observable with `next()`

You need to have the subscription set up before you add new values to it.

### BehaviorSubjects

These have the same concept of a subject, but cache the last value.

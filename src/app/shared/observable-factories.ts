import { Observable } from "rxjs";

export function simpleObservable(): Observable<number> {
    return new Observable<number>(observer => {
        observer.next(4711);
        observer.next(815);

        observer.complete();

        return () => {
            console.log(`teardown!`);
        };
    });
}
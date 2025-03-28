import type { Observer } from "@/core/types/observer.interface"

export interface Subject<T> {
	addObserver(observer: Observer<T>): void
	removeObserver(observer: Observer<T>): void
	notifyObservers(state: T): void
}

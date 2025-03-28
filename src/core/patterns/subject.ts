import type { Observer } from "@/core/types/observer.interface"
import type { Subject as SubjectInterface } from "@/core/types/subject.interface"

export class Subject<T> implements SubjectInterface<T> {
	private observers: Observer<T>[] = []

	public addObserver(observer: Observer<T>): void {
		if (!this.observers.includes(observer)) {
			this.observers.push(observer)
		}
	}

	public removeObserver(observer: Observer<T>): void {
		const index = this.observers.indexOf(observer)
		if (index !== -1) {
			this.observers.splice(index, 1)
		}
	}

	public notifyObservers(state: T): void {
		for (const observer of this.observers) {
			try {
				observer.update(state)
			} catch (error) {
				console.error(`Error notifying observer: ${error}`)
			}
		}
	}

	public clearObservers(): void {
		this.observers = []
	}
}
